<?php

namespace App\Twig;

use App\Book\Book;
use App\Entity\ReadBook;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * @author    Tomasz Karliński <karlinski.tomasz@gmail.com>
 * @copyright 2019 tkarlinski
 * @package   App\Twig
 * @since     2019-11-03
 */
class BookExtension extends AbstractExtension
{
    const READ_BOOK_TRUE = '<i class="fa fa-check" aria-hidden="true" title="Tak"></i>';
    const READ_BOOK_FALSE = '<i class="fa fa-times" aria-hidden="true" title="Nie"></i>';


    public function getFunctions()
    {
        return [
            new TwigFunction(
                'isRead',
                [$this, 'isRead'],
                array('is_safe' => array('html'))
            ),
        ];
    }

    /**
     * @param bool|ReadBook
     */
    public function isRead($readBook): string
    {
        if (!$readBook instanceof ReadBook) {
            return self::READ_BOOK_FALSE;
        }

        if (Book::isRead($readBook->getStartDate(), $readBook->getEndDate())) {
            return self::READ_BOOK_TRUE;
        } else {
            return self::READ_BOOK_FALSE;
        }
    }
}