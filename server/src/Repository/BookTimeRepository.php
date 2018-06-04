<?php

namespace App\Repository;

use App\Entity\BookTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method BookTime|null find($id, $lockMode = null, $lockVersion = null)
 * @method BookTime|null findOneBy(array $criteria, array $orderBy = null)
 * @method BookTime[]    findAll()
 * @method BookTime[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BookTimeRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, BookTime::class);
    }

//    /**
//     * @return BookTime[] Returns an array of BookTime objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?BookTime
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
