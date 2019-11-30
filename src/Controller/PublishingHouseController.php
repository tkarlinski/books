<?php

namespace App\Controller;

use App\Entity\PublishingHouse;
use App\Form\PublishingHouseType;
use App\Repository\PublishingHouseRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/publishing-house")
 */
class PublishingHouseController extends AbstractController
{
    /**
     * @Route("/", name="app_publishinghouse_index", methods={"GET"})
     */
    public function index(PublishingHouseRepository $publishingHouseRepository): Response
    {
        return $this->render('publishing_house/index.html.twig', [
            'publishing_houses' => $publishingHouseRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="app_publishinghouse_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $publishingHouse = new PublishingHouse();
        $form = $this->createForm(PublishingHouseType::class, $publishingHouse);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $this->get('security.csrf.token_manager')->refreshToken(PublishingHouseType::CSRF_TOKEN);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($publishingHouse);
            $entityManager->flush();

            return $this->redirectToRoute('app_publishinghouse_index');
        }

        return $this->render('publishing_house/new.html.twig', [
            'publishing_house' => $publishingHouse,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="app_publishinghouse_show", methods={"GET"})
     */
    public function show(PublishingHouse $publishingHouse): Response
    {
        return $this->render('publishing_house/show.html.twig', [
            'publishing_house' => $publishingHouse,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_publishinghouse_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, PublishingHouse $publishingHouse): Response
    {
        $form = $this->createForm(PublishingHouseType::class, $publishingHouse);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $this->get('security.csrf.token_manager')->refreshToken(PublishingHouseType::CSRF_TOKEN);

            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('app_publishinghouse_index', [
                'id' => $publishingHouse->getId(),
            ]);
        }

        return $this->render('publishing_house/edit.html.twig', [
            'publishing_house' => $publishingHouse,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="app_publishinghouse_delete", methods={"DELETE"})
     */
    public function delete(PublishingHouse $publishingHouse): Response
    {
        try {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($publishingHouse);
            $entityManager->flush();
        } catch (\Exception $e) {
            $this->addFlash('error', sprintf('Nie udało się usunąć wydawnictwa "%s".', $publishingHouse->getName()));
            return new JsonResponse($e->getMessage(), $e->getCode());
        }

        $this->addFlash('success', sprintf('Usunięto wydawnictwo "%s".', $publishingHouse->getName()));

        return new JsonResponse();

    }
}
