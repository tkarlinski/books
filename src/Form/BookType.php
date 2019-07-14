<?php

namespace App\Form;

use App\Entity\Book;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BookType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Tytuł',
            ])
            ->add('publishYear', IntegerType::class, [
                'label' => 'Rok wydania',
            ])
            ->add('pages', IntegerType::class, [
                'label' => 'Stron',
            ])
            ->add('isbn', TextType::class, [
                'label' => 'ISBN',
            ])
            ->add('city', null, [
                'label' => 'Miasto',
            ])
            ->add('publishingHouse', null, [
                'label' => 'Wydawnictwo',
            ])
            ->add('authors', null, [
                'label' => 'Autorzy',
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Zapisz',
                'attr' => [
                    'class' => 'btn-outline-primary'
                ]
            ]);
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Book::class,
        ]);
    }
}
