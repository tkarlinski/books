<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190811104242 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE notatka');
        $this->addSql('ALTER TABLE ksiazka ADD notatka LONGTEXT DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE notatka (id INT AUTO_INCREMENT NOT NULL, id_ksiazka INT DEFAULT NULL, tresc LONGTEXT NOT NULL COLLATE utf8mb4_unicode_ci, data_utworzenia DATETIME NOT NULL, data_edycji DATETIME NOT NULL, INDEX IDX_DFCBA00EB5949A00 (id_ksiazka), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE notatka ADD CONSTRAINT FK_DFCBA00EB5949A00 FOREIGN KEY (id_ksiazka) REFERENCES ksiazka (id)');
        $this->addSql('ALTER TABLE ksiazka DROP notatka');
    }
}
