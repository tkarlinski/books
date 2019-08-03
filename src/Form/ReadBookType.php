<?php

namespace App\Form;

use App\Entity\ReadBook;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ReadBookType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('isRead', CheckboxType::class, [
                'label' => 'Przeczytana',
            ])
            ->add('startDate', DateType::class, [
                'label' => 'od',
            ])
            ->add('endDate', DateType::class, [
                'label' => 'do',
            ])
//            ->add('book')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ReadBook::class,
        ]);
    }
}
