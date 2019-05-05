FROM php:7.2-apache

ARG xdebug_port

ENV DEBIAN_FRONTEND noninteractive
ENV PHP_MEMORY_LIMIT=2G
ENV PHP_DISPLAY_ERRORS=1
ENV PHP_DISPLAY_STARTUP_ERRORS=1

RUN chmod -R 777 /tmp

### Configure Apache and installs other services ###

RUN a2enmod rewrite \
    && a2enmod ssl \
    && apt-get update \
    && echo 'ServerName localhost' >> /etc/apache2/apache2.conf \
    && apt-get install -y git \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && apt-get install -y zip \
    && apt-get install -y unzip \
    && apt-get install -y nano \
    && apt-get install -y iputils-ping \
    && apt-get install -y libpq-dev \
    && docker-php-ext-install pdo pdo_mysql \
    && apt-get install -y zlib1g-dev libicu-dev g++ \
    && docker-php-ext-configure intl \
    && docker-php-ext-install intl

# install php redis
RUN pecl install redis \
    && docker-php-ext-enable redis

# install php opcache
RUN docker-php-ext-install opcache

# install node and yarn
RUN apt-get install -y gnupg \
    && apt-get install -y apt-transport-https \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
    && apt-get install -y nodejs \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && apt-get install -y yarn

# server configuration

ENV TZ=Europe/Warsaw
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY .docker/server-config/php.ini /usr/local/etc/php/php.ini

COPY .docker/server-config/000-default.conf /etc/apache2/sites-available/000-default.conf

COPY .docker/run.sh /run.sh
RUN chmod 0755 /run.sh

WORKDIR /var/www/html/application
EXPOSE 80

RUN chmod -R 777 /tmp

# install xdebug
RUN pecl install xdebug \
&& docker-php-ext-enable xdebug \
&& echo "error_reporting = E_ALL" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
&& echo "display_startup_errors = On" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
&& echo "display_errors = On" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
&& echo "xdebug.remote_enable=1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
&& echo "xdebug.remote_connect_back=1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
&& echo "xdebug.idekey=\"PHPSTORM\"" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
&& echo "xdebug.remote_port=${xdebug_port}" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

### Deploy application ###

RUN mkdir -p vendor

CMD ["/run.sh"]
