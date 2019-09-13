<?php

namespace App\Form;

use App\Book\BookCriteria;
use App\Entity\Author;
use App\Entity\PublishingHouse;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BookFilterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', null, [
                'required' => false,
            ])
            ->add('author', EntityType::class, [
                'required' => false,
                'class' => Author::class,
            ])
            ->add('isbn', null, [
                'required' => false,
            ])
            ->add('publishingHouse', EntityType::class, [
                'required' => false,
                'class' => PublishingHouse::class,
            ])
            ->add('isRead', CheckboxType::class, [
                'label' => 'Czy przeczytano?',
                'required' => false,
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Wyszukaj',
                'attr' => [
                    'class' => 'btn-primary'
                ]
            ]);
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => BookCriteria::class,
            'method' => 'GET',
        ]);
    }
}
