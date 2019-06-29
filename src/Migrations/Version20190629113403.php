<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190629113403 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE miasto (id INT AUTO_INCREMENT NOT NULL, nazwa VARCHAR(50) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE wydawnictwo (id INT AUTO_INCREMENT NOT NULL, nazwa VARCHAR(100) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE przeczytane (id INT AUTO_INCREMENT NOT NULL, data_rozpoczecia DATETIME DEFAULT NULL, data_zakonczenia DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE notatka (id INT AUTO_INCREMENT NOT NULL, id_ksiazka INT DEFAULT NULL, content LONGTEXT NOT NULL, data_utworzenia DATETIME NOT NULL, data_edycji DATETIME NOT NULL, INDEX IDX_DFCBA00EB5949A00 (id_ksiazka), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ksiazka (id INT AUTO_INCREMENT NOT NULL, id_miasto INT DEFAULT NULL, id_wydawnictwo INT DEFAULT NULL, user_id INT NOT NULL, tytul VARCHAR(200) NOT NULL, rok SMALLINT DEFAULT NULL, strony SMALLINT NOT NULL, isbn VARCHAR(25) NOT NULL, INDEX IDX_6B093370F4CE9BA2 (id_miasto), INDEX IDX_6B093370FB157B9E (id_wydawnictwo), INDEX IDX_6B093370A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE autor_ksiazka (id_autor INT NOT NULL, id_ksiazka INT NOT NULL, INDEX IDX_AAD92B06DF821F8A (id_autor), INDEX IDX_AAD92B06B5949A00 (id_ksiazka), PRIMARY KEY(id_autor, id_ksiazka)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE notatka ADD CONSTRAINT FK_DFCBA00EB5949A00 FOREIGN KEY (id_ksiazka) REFERENCES ksiazka (id)');
        $this->addSql('ALTER TABLE ksiazka ADD CONSTRAINT FK_6B093370F4CE9BA2 FOREIGN KEY (id_miasto) REFERENCES miasto (id)');
        $this->addSql('ALTER TABLE ksiazka ADD CONSTRAINT FK_6B093370FB157B9E FOREIGN KEY (id_wydawnictwo) REFERENCES wydawnictwo (id)');
        $this->addSql('ALTER TABLE ksiazka ADD CONSTRAINT FK_6B093370A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE autor_ksiazka ADD CONSTRAINT FK_AAD92B06DF821F8A FOREIGN KEY (id_autor) REFERENCES ksiazka (id)');
        $this->addSql('ALTER TABLE autor_ksiazka ADD CONSTRAINT FK_AAD92B06B5949A00 FOREIGN KEY (id_ksiazka) REFERENCES autor (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE ksiazka DROP FOREIGN KEY FK_6B093370F4CE9BA2');
        $this->addSql('ALTER TABLE ksiazka DROP FOREIGN KEY FK_6B093370FB157B9E');
        $this->addSql('ALTER TABLE notatka DROP FOREIGN KEY FK_DFCBA00EB5949A00');
        $this->addSql('ALTER TABLE autor_ksiazka DROP FOREIGN KEY FK_AAD92B06DF821F8A');
        $this->addSql('DROP TABLE miasto');
        $this->addSql('DROP TABLE wydawnictwo');
        $this->addSql('DROP TABLE przeczytane');
        $this->addSql('DROP TABLE notatka');
        $this->addSql('DROP TABLE ksiazka');
        $this->addSql('DROP TABLE autor_ksiazka');
    }
}
