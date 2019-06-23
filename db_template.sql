CREATE TABLE `autor`
(
    `id`       int(11)                            NOT NULL AUTO_INCREMENT,
    `imie`     varchar(50) COLLATE utf8_polish_ci NOT NULL,
    `nazwisko` varchar(50) COLLATE utf8_polish_ci NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = MyISAM
  AUTO_INCREMENT = 221
  DEFAULT CHARSET = utf8
  COLLATE = utf8_polish_ci;

CREATE TABLE `ksiazka`
(
    `id`             int(11)                             NOT NULL AUTO_INCREMENT,
    `tytul`          varchar(100) COLLATE utf8_polish_ci NOT NULL,
    `id_wydawnictwo` int(11)                            DEFAULT NULL,
    `id_miasto`      int(11)                            DEFAULT NULL,
    `rok`            int(11)                            DEFAULT NULL,
    `strony`         int(11)                             NOT NULL,
    `isbn`           varchar(25) COLLATE utf8_polish_ci DEFAULT NULL,
    `id_uwaga`       int(11)                            DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = MyISAM
  DEFAULT CHARSET = utf8
  COLLATE = utf8_polish_ci;

CREATE TABLE `miasto`
(
    `id`    int(11)                            NOT NULL AUTO_INCREMENT,
    `nazwa` varchar(50) COLLATE utf8_polish_ci NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = MyISAM
  AUTO_INCREMENT = 18
  DEFAULT CHARSET = utf8
  COLLATE = utf8_polish_ci;

CREATE TABLE `wydawnictwo`
(
    `id`    int(11)                            NOT NULL AUTO_INCREMENT,
    `nazwa` varchar(50) COLLATE utf8_polish_ci NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = MyISAM
  AUTO_INCREMENT = 63
  DEFAULT CHARSET = utf8
  COLLATE = utf8_polish_ci

/**
Tabela przeczytane:
id
id_ksiazka
data_rozpoczecia
data_zakonczenia


Tabela autor_ksiazka:
id?
id_autora
id_ksiazki

 */