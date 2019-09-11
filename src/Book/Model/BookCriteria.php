<?php

namespace App\Book\Model;

use App\Entity\Author;
use App\Entity\PublishingHouse;

/**
 * @author    Tomasz Karliński <karlinski.tomasz@gmail.com>
 * @copyright 2019 tkarlinski
 * @package   App\Form\Model
 * @since     2019-09-10
 */
class BookCriteria
{
    /** @var string */
    private $isbn;

    /** @var string */
    private $title;

    /** @var Author */
    private $author;

    /** @var PublishingHouse */
    private $publishingHouse;

    /** @var bool */
    private $isRead;

    public function getIsbn(): string
    {
        return $this->isbn;
    }

    public function setIsbn(string $isbn): void
    {
        $this->isbn = $isbn;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    public function getAuthor(): Author
    {
        return $this->author;
    }

    public function setAuthor(Author $author): void
    {
        $this->author = $author;
    }

    public function getPublishingHouse(): PublishingHouse
    {
        return $this->publishingHouse;
    }

    public function setPublishingHouse(PublishingHouse $publishingHouse): void
    {
        $this->publishingHouse = $publishingHouse;
    }

    public function isRead(): bool
    {
        return $this->isRead;
    }

    public function setIsRead(bool $isRead): void
    {
        $this->isRead = $isRead;
    }

}