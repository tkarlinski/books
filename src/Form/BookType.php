<?php

namespace App\Form;

use App\Entity\Book;
use App\Form\DataTransformer\PersistentCollectionToReadBookTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BookType extends AbstractType
{
    const CSRF_TOKEN = 'book_form_intention';

    /** @var PersistentCollectionToReadBookTransformer  */
    private $readBookTransformer;

    public function __construct(PersistentCollectionToReadBookTransformer $readBookTransformer)
    {
        $this->readBookTransformer = $readBookTransformer;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Tytuł',
            ])
            ->add('authors', null, [
                'label' => 'Autorzy',
                'attr' => [
                    'data-live-search' => 'true',
                ]
            ])
            ->add('isbn', TextType::class, [
                'label' => 'ISBN',
                'required' => false,
            ])
            ->add('publishingHouse', null, [
                'label' => 'Wydawnictwo',
                'attr' => [
                    'data-live-search' => 'true',
                ]
            ])
            ->add('city', null, [
                'label' => 'Miasto',
                'attr' => [
                    'data-live-search' => 'true',
                ]
            ])
            ->add('publishYear', IntegerType::class, [
                'label' => 'Rok wydania',
                'required' => false,
            ])
            ->add('pages', IntegerType::class, [
                'label' => 'Stron',
            ])
            ->add('readBooks', ReadBookType::class, [
                'label' => 'Przeczytana'
            ])
            ->add('note', null, [
                'label' => 'Notatka'
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Zapisz',
                'attr' => [
                    'class' => 'btn-outline-primary'
                ]
            ]);
        ;

        $builder->get('readBooks')->addModelTransformer($this->readBookTransformer);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Book::class,
            'allow_extra_fields' => true,
            'csrf_protection' => true,
            'csrf_field_name' => '_token',
            'csrf_token_id'   => self::CSRF_TOKEN
        ]);
    }
}
