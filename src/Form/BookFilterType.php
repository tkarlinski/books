<?php

namespace App\Form;

use App\Book\BookCriteria;
use App\Entity\Author;
use App\Entity\PublishingHouse;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
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
                'attr' => [
                    'placeholder' => 'Tytuł'
                ]
            ])
            ->add('author', EntityType::class, [
                'required' => false,
                'class' => Author::class,
                'attr' => [
                    'data-live-search' => 'true',
                    'title' => 'Autor'
                ]
            ])
            ->add('isbn', null, [
                'required' => false,
                'attr' => [
                    'placeholder' => 'ISBN',
                ]
            ])
            ->add('publishingHouse', EntityType::class, [
                'required' => false,
                'class' => PublishingHouse::class,
                'attr' => [
                    'data-live-search' => 'true',
                    'title' => 'Wydawnictwo'
                ]
            ])
            ->add('isRead', ChoiceType::class, [
                'expanded' => false,
                'multiple' => false,
                'choices' => [
                    'Tak' =>'1',
                    'Nie' => '2'
                ],
                'required' => false,
                'attr' => [
                    'title' => 'Przeczytana?'
                ]
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
