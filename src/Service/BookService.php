<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * @author    Tomasz Karliński <karlinski.tomasz@gmail.com>
 * @copyright 2019 tkarlinski
 * @package   App\Service
 * @since     2019-11-03
 */
class BookService
{
    const LAST_LIST_URL_SESSION_KEY = 'book_last_list_url';

    /** @var SessionInterface */
    protected $session;

    /** @var UrlGeneratorInterface */
    protected $urlGenerator;

    public function __construct(SessionInterface $session, UrlGeneratorInterface $urlGenerator)
    {
        $this->session = $session;
        $this->urlGenerator = $urlGenerator;
    }

    public function saveLastListUrl(string $lastListUrl): void
    {
        $this->session->set(self::LAST_LIST_URL_SESSION_KEY, $lastListUrl);
    }

    public function getCurrentListUrl()
    {
        if ($this->session->has(self::LAST_LIST_URL_SESSION_KEY)
            && $lastListUrl = $this->session->get(self::LAST_LIST_URL_SESSION_KEY)
        ) {
            return $lastListUrl;
        }

        return $this->urlGenerator->generate('app_book_index');
    }
}