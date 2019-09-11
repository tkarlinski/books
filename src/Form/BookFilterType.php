<?php

namespace App\Form;

use App\Book\Model\BookCriteria;
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
            ->add('title')
            ->add('author')
            ->add('isbn')
            ->add('publishingHouse')
            ->add('isRead', CheckboxType::class, [
                'label' => 'Czy przeczytano?'
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
        ]);
    }
}
