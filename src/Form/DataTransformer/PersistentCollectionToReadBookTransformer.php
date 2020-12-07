<?php

namespace App\Form\DataTransformer;

use App\Entity\ReadBook as ReadBookEntity;
use App\Form\Model\ReadBook as ReadBookModel;
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
     */
    public function transform($value): ?ReadBookModel
    {
        /** @var ReadBookEntity|bool $entity */
        $entity = $value->current();

        if (!$entity) {
            return null;
        }

        $model = new ReadBookModel();
        $model->setIsRead(true);
        $model->setStartDate($entity->getStartDate());
        $model->setEndDate($entity->getEndDate());

        return $model;
    }

    /**
     * @param ReadBookModel|null $value
     */
    public function reverseTransform($value): PersistentCollection
    {
        $collection = new ArrayCollection();

        if ($value instanceof ReadBookModel && $value->isRead()) {
            $entity = new ReadBookEntity();
            $entity->setStartDate($value->getStartDate());
            $entity->setEndDate($value->getEndDate());
            $collection->add($entity);
        }

        return new PersistentCollection(
            $this->em,
            $this->em->getClassMetadata(ReadBookEntity::class),
            $collection
        );
    }
}