<?php

namespace App\Form\DataTransformer;

use App\Entity\ReadBook;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\PersistentCollection;
use Symfony\Component\Form\DataTransformerInterface;

/**
 * @author    Tomasz Karliński <karlinski.tomasz@gmail.com>
 * @copyright 2019 tkarlinski
 * @package   App\Form\DataTransformer
 * @since     2019-08-03
 */
class PersistentCollectionToReadBookTransformer implements DataTransformerInterface
{
    /** @var EntityManagerInterface */
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * @param PersistentCollection $value
     * @return ReadBook|null
     */
    public function transform($value): ?ReadBook
    {
        $readBook = $value->current();

        return $readBook instanceof ReadBook ? $readBook : null;
    }

    /**
     * @param ReadBook|null $value
     * @return PersistentCollection
     */
    public function reverseTransform($value)
    {
        $collection = new ArrayCollection();
        if (null !== $value) {
            $collection->add($value);
        }

        return new PersistentCollection(
            $this->em,
            $this->em->getClassMetadata(ReadBook::class),
            $collection
        );
    }
}