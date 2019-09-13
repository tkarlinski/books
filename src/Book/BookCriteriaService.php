<?php

namespace App\Book;

use App\Book\BookCriteria;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * @author    Tomasz Karliński <karlinski.tomasz@gmail.com>
 * @copyright 2019 tkarlinski
 * @package   App\Book
 * @since     2019-09-11
 */
class BookCriteriaService
{
    const SESSION_KEY_CRITERIA = 'book_criteria';

    /** @var Request */
    protected $request;

    /** @var SessionInterface */
    protected $session;

    public function __construct(Request $request, SessionInterface $session )
    {
        $this->request = $request;
        $this->session = $session;
    }

    public function get(): BookCriteria
    {
        if ($this->session->has(self::SESSION_KEY_CRITERIA)) {
            return $this->session->get(self::SESSION_KEY_CRITERIA);
        }
        return new BookCriteria();
    }

    public function update(BookCriteria $bookCriteria): void
    {
        $this->session->set(self::SESSION_KEY_CRITERIA, $bookCriteria);
    }

    protected function build()
    {
        $criteria = new BookCriteria();
        
    }

}