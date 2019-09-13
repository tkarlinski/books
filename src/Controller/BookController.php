<?php

namespace App\Controller;

use App\Book\BookCriteria;
use App\Entity\Book;
use App\Form\BookFilterType;
use App\Form\BookType;
use App\Repository\BookRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Exception\LogicException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/book")
 */
class BookController extends AbstractController
{
    const LIST_DEFAULT_LIMIT = 20;

    /**
     * @Route("/", name="app_book_index", methods={"GET"})
     */
    public function index(
        Request $request,
        BookRepository $bookRepository,
        PaginatorInterface $paginator
    ): Response
    {
        $bookCriteria = new BookCriteria();

        $filterForm = $this->createForm(BookFilterType::class, $bookCriteria);
        $filterForm->handleRequest($request);

        if ($filterForm->isSubmitted() && $filterForm->isValid()) {
            /** @var BookCriteria $bookCriteria */
            $bookCriteria = $filterForm->getData();
        }
        // criteria
        $query = $bookRepository->getWithSearchQuery($bookCriteria);

        $pagination = $paginator->paginate(
            $query,
            $request->query->getInt('page', 1),
            self::LIST_DEFAULT_LIMIT
        );

        return $this->render('book/index.html.twig', [
            'pagination' => $pagination,
            'filterForm' => $filterForm->createView(),
        ]);
    }

    /**
     * @Route("/new", name="app_book_new", methods={"GET","POST"})
     * @throws LogicException
     */
    public function new(Request $request): Response
    {
        $book = new Book();
        $form = $this->createForm(BookType::class, $book);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $book->setUser($this->getUser());
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($book);
            $entityManager->flush();

            return $this->redirectToRoute('app_book_index');
        }

        return $this->render('book/new.html.twig', [
            'book' => $book,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="app_book_show", methods={"GET"})
     */
    public function show(Book $book): Response
    {
        return $this->render('book/show.html.twig', [
            'book' => $book,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_book_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Book $book): Response
    {
        $form = $this->createForm(BookType::class, $book);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('app_book_index', [
                'id' => $book->getId(),
            ]);
        }

        return $this->render('book/edit.html.twig', [
            'book' => $book,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="app_book_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Book $book): Response
    {
        if ($this->isCsrfTokenValid('delete' . $book->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($book);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_book_index');
    }
}
