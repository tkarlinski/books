<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
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

    /**
     * @Template()
     * @Route("/", name="app_homepage")
     */
    public function homepage(): array
    {

        var_dump('homepage');
//        die(__METHOD__);

        return [
            'message' => 'Homepage',
        ];
    }

    /**
     * @Route("/admin/test", name="app_admin_test")
     */
    public function testAdmin(): JsonResponse
    {
        return new JsonResponse('test_admin');
    }
}
