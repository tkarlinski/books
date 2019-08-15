<?php

namespace App\DataFixtures;

use App\Entity\PublishingHouse;
use Doctrine\Common\Persistence\ObjectManager;

class PublishingHouseFixtures extends BaseFixture
{
    const MAIN_GROUP = 'main_publishing_houses';

    public function loadData(ObjectManager $manager): void
    {
        $this->createMany(81, self::MAIN_GROUP, function() {
            $pubHouse = new PublishingHouse();
            $pubHouse->setName($this->faker->company);

            return $pubHouse;
        });

        $manager->flush();
    }
}
