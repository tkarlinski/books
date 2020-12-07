<?php

namespace App\Repository;

use App\Entity\ReadBook;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ReadBook|null find($id, $lockMode = null, $lockVersion = null)
 * @method ReadBook|null findOneBy(array $criteria, array $orderBy = null)
 * @method ReadBook[]    findAll()
 * @method ReadBook[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReadBookRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ReadBook::class);
    }
}
