<?php

namespace App\Book;

/**
 * @author    Tomasz Karliński <karlinski.tomasz@gmail.com>
 * @copyright 2019 tkarlinski
 * @package   App\Book
 * @since     2019-11-03
 */
class Book
{
    public static function isRead(?\DateTimeInterface $startDateRead, ?\DateTimeInterface $endDateRead): bool
    {
        return $startDateRead instanceof \DateTimeInterface && $endDateRead instanceof \DateTimeInterface;
    }
}