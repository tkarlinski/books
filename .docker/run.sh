#!/usr/bin/env bash

if [ "true" == "${RUN_COMPOSER}" ]; then
    composer self-update
    composer global require hirak/prestissimo --no-plugins --no-scripts --no-progress
    composer install --no-interaction --prefer-dist --optimize-autoloader --profile --no-progress
    composer update --no-interaction --prefer-dist --optimize-autoloader --profile --no-progress
fi

php bin/console cache:clear --env=${APP_ENV}
php bin/console doctrine:cache:clear-metadata --env=${APP_ENV}
php bin/console cache:warmup --env=${APP_ENV}
php bin/console assets:install --env=${APP_ENV} --symlink
chmod -R 777 var

source /etc/apache2/envvars

exec apache2-foreground