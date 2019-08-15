<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixture extends BaseFixture
{
    const MAIN_GROUP = 'main_users';

    /**
     * @var UserPasswordEncoderInterface
     */
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function loadData(ObjectManager $manager): void
    {
        $this->createMany(30, self::MAIN_GROUP, function() {
            $user = new User();
            $user->setEmail('karlinski.tomasz@gmail.com')
                ->setFirstName('tom')
                ->setPassword($this->passwordEncoder->encodePassword($user, 'test'));

            return $user;
        });

        $manager->flush();
    }
}
