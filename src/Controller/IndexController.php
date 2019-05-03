<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Template()
     * @Route("/index", name="index")
     */
    public function index(): array
    {
        return [
            'message' => 'Twig test page',
        ];
    }
}
