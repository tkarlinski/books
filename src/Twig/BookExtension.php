<?php

namespace App\Twig;

use App\Entity\Book;
use App\Entity\ReadBook;
use App\Service\BookService;
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
    const TRUE_ICON = '<i class="fa fa-check" aria-hidden="true" title="Tak"></i>';
    const FALSE_ICON = '<i class="fa fa-times" aria-hidden="true" title="Nie"></i>';

    /** @var BookService */
    protected $bookService;

    /**
     * @required
     */
    public function setBookService(BookService $bookService)
    {
        $this->bookService = $bookService;
    }

    public function getFunctions()
    {
        return [
            new TwigFunction(
                'isRead',
                [$this, 'isRead'],
                array('is_safe' => array('html'))
            ),
            new TwigFunction(
                'inStock',
                [$this, 'inStock'],
                array('is_safe' => array('html'))
            ),
            new TwigFunction(
                'getCurrentListUrl',
                [$this, 'getCurrentListUrl']
            ),
        ];
    }

    /**
     * @param bool|ReadBook
     */
    public function isRead($readBook): string
    {
        if ($readBook instanceof ReadBook) {
            return self::TRUE_ICON;
        } else {
            return self::FALSE_ICON;
        }
    }

    public function inStock(Book $book): string
    {
        return $book->getInStock() ? self::TRUE_ICON : self::FALSE_ICON;
    }

    public function getCurrentListUrl(): string
    {
        return $this->bookService->getCurrentListUrl();
    }
}