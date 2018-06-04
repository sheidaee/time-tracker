<?php

namespace App\Controller;

use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
//use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\Annotations as FOSRest;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\BookTime;

class BookTimeController extends Controller
{
    /**
     * @Route("/book_time", name="book_time")
     */
    public function index()
    {
        /* return $this->render('book_time/index.html.twig', [
            'controller_name' => 'BookTimeController',
        ]); */

         // you can fetch the EntityManager via $this->getDoctrine()
        // or you can add an argument to your action: index(EntityManagerInterface $entityManager)
        $entityManager = $this->getDoctrine()->getManager();

        $bookTime = new BookTime();
        $bookTime->setClockIn(new \DateTime('2018-05-17 12:56:00'));
        $bookTime->setClockOut(new \DateTime('2018-05-17 00:56:00'));
        $bookTime->setDescription('Ergonomic and stylish!');

        // tell Doctrine you want to (eventually) save the bookTime (no queries yet)
        $entityManager->persist($bookTime);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('Saved new bookTime with id '.$bookTime->getId());
    }

    /**
     * Lists all Articles.
     * @FOSRest\Get("/get_book_time")
     *
     * @return array
     */
    public function getBookTimeAction()
    {
        $repository = $this->getDoctrine()->getRepository(BookTime::class);
        
        //$bookTime = $repository->findall();
        $bookTime = $repository->findBy(array(),array('id' => 'DESC'));
        
        $arrayCollection = array();
        foreach($bookTime as $item) {
            $arrayCollection[] = array(
                'id'          => $item->getId(),
                'clock_in'    => $item->getClockIn()->format("Y/m/d"),
                'clock_out'   => $item->getClockOut()->format("Y/m/d h:i:s"),
                'duration'    => $item->getClockIn()->format("H:i:s"),
                'description' => $item->getDescription()
            );
        }

        $bookTimeArray = array(
            'count'        => count($arrayCollection),
            'bookTimeData' => $arrayCollection
        );
        
        return new JsonResponse($bookTimeArray);
    }

    /**
     * Create Book_time.
     * @FOSRest\Post("/post_book_time")
     *
     * @return array
     */
    public function postBookTimeAction(Request $request)
    {        
        $bookTime = new BookTime();
        $bookTime->setClockIn(new \DateTime($request->get('clock_in')));
        $bookTime->setClockOut(new \DateTime($request->get('clock_out')));
        $bookTime->setDescription($request->get('description'));
        
        $em = $this->getDoctrine()->getManager();
        $em->persist($bookTime);
        $em->flush();
        
        $arrayCollection = array(
            'id'          => $bookTime->getId(),
            'clock_in'    => $bookTime->getClockIn()->format("Y/m/d"),
            'clock_out'   => $bookTime->getClockOut()->format("Y/m/d h:i:s"),
            'duration'    => $bookTime->getClockIn()->format("H:i:s"),
            'description' => $bookTime->getDescription()
        );
        return new JsonResponse($arrayCollection);
    }

    /**
     * Update Book_time.
     * @FOSRest\Post("/put_book_time")
     *
     * @return array
     */
    public function putBookTimeAction(Request $request)
    {
        $repository = $this->getDoctrine()->getRepository(BookTime::class);
        $bookTime   = $repository->findOneBy(array('id' => $request->get('book_time_id')));
        
        if ($bookTime) {
            $em = $this->getDoctrine()->getEntityManager();
            $bookTime->setClockIn(new \DateTime($request->get('clock_in')));
            $bookTime->setClockOut(new \DateTime($request->get('clock_out')));
            $bookTime->setDescription($request->get('description'));
            $em->persist($bookTime);
            $em->flush();
            
            return $this->forward('App\Controller\BookTimeController::getBookTimeAction');
        }
        else {
            throw $this->createNotFoundException(
            'No product found for id '.$request->get('book_time_id')
            );
        }                         
    }

    /**
     * Create Book_time.
     * @FOSRest\Delete("/delete_book_time")
     *
     * @return array
     */
    public function deleteBooTimeAction(Request $request)
    {                
        $repository = $this->getDoctrine()->getRepository(BookTime::class);
        $bookTime   = $repository->findOneBy(array('id' => $request->get('book_time_id')));
        
        if ($bookTime) {
            $em = $this->getDoctrine()->getEntityManager();
            $em->remove($bookTime);
            $em->flush();
            
            return $this->forward('App\Controller\BookTimeController::getBookTimeAction');
        }
        else {
            throw $this->createNotFoundException(
            'No product found for id '.$request->get('book_time_id')
            );
        }        
    }
}
