<?php

namespace App\DataFixtures;

use App\Entity\Author;
use Doctrine\Common\Persistence\ObjectManager;

class AuthorFixtures extends BaseFixture
{
    const MAIN_GROUP = 'main_authors';

    public function loadData(ObjectManager $manager): void
    {
        $this->createMany(30, self::MAIN_GROUP, function() {
            $author = new Author();
            $author->setName($this->faker->firstName);
            $author->setSurname($this->faker->lastName);

            return $author;
        });

        $manager->flush();
    }
}
