<?php

namespace App\DataFixtures;

use App\Entity\City;
use Doctrine\Common\Persistence\ObjectManager;

class CityFixtures extends BaseFixture
{
    const MAIN_GROUP = 'main_cities';

    public function loadData(ObjectManager $manager): void
    {
        $this->createMany(30, self::MAIN_GROUP, function() {
            $city = new City();
            $city->setName($this->faker->city);

            return $city;
        });

        $manager->flush();
    }
}
