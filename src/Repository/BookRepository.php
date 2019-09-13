<?php

namespace App\Repository;

use App\Book\BookCriteria;
use App\Entity\Author;
use App\Entity\Book;
use App\Entity\PublishingHouse;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Book|null find($id, $lockMode = null, $lockVersion = null)
 * @method Book|null findOneBy(array $criteria, array $orderBy = null)
 * @method Book[]    findAll()
 * @method Book[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BookRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Book::class);
    }

    public function getWithSearchQuery(BookCriteria $bookCriteria): Query
    {
        $em = $this->getEntityManager();
        $dql = '
            SELECT b 
            FROM App\Entity\Book b
            LEFT JOIN b.authors a
            LEFT JOIN b.readBooks rb
            WHERE 1=1
        ';

        $parameters = [];

        if (is_string($bookCriteria->getTitle())) {
            $dql .= ' AND LOWER(b.title) LIKE LOWER(:title)';
            $parameters['title'] = '%' . $bookCriteria->getTitle() . '%';
        }
        if ($bookCriteria->getAuthor() instanceof Author) {
            $dql .= ' AND a.id = :authorId';
            $parameters['authorId'] = $bookCriteria->getAuthor()->getId();
        }
        if (is_string($bookCriteria->getIsbn())) {
            $dql .= ' AND LOWER(b.isbn) LIKE LOWER(:isbn)';
            $parameters['isbn'] = '%' . $bookCriteria->getIsbn() . '%';
        }
        if ($bookCriteria->getPublishingHouse() instanceof PublishingHouse) {
            $dql .= ' AND a.id = :publichinHouseId';
            $parameters['publichinHouseId'] = $bookCriteria->getPublishingHouse()->getId();
        }
        if (is_bool($bookCriteria->isRead())) {
            if ($bookCriteria->isRead()) {
                $dql .= ' AND rb.id IS NOT NULL';
            } else {
                $dql .= ' AND rb.id IS NULL';
            }
        }

        return $em->createQuery($dql)->setParameters($parameters);
    }
}
