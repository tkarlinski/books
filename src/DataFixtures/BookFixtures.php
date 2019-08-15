<?php

namespace App\DataFixtures;

use App\Entity\Author;
use App\Entity\Book;
use App\Entity\City;
use App\Entity\PublishingHouse;
use App\Entity\ReadBook;
use App\Entity\User;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

class BookFixtures extends BaseFixture implements DependentFixtureInterface
{
    const MAIN_GROUP = 'main_books';

    public function loadData(ObjectManager $manager): void
    {
        $this->createMany(85, self::MAIN_GROUP, function () use ($manager) {
            $book = new Book();
            $book->setIsbn($this->faker->isbn10);
            if ($this->faker->boolean(40)) {
                $book->setNote($this->faker->realText($this->faker->numberBetween(10, 3000)));
            }
            $book->setPages($this->faker->numberBetween(50, 800));
            $book->setPublishYear($this->faker->year('now'));
            $book->setTitle(ucfirst($this->faker->words($this->faker->numberBetween(1, 10), true)));
            if ($this->faker->boolean(70)) {
                $readBook = new ReadBook();
                $readBook->setBook($book);
                if ($this->faker->boolean(50)) {
                    $startDate = $this->faker->dateTime;
                    $readBook->setStartDate($startDate);
                    $readBook->setEndDate($this->faker->dateTimeBetween($startDate, 'now'));

                    $manager->persist($readBook);
                }
            }

            /** @var User $userRandomReference */
            $userRandomReference = $this->getRandomReference(UserFixture::MAIN_GROUP);
            $book->setUser($userRandomReference);

            /** @var City $cityRandomReference */
            $cityRandomReference = $this->getRandomReference(CityFixtures::MAIN_GROUP);
            $book->setCity($cityRandomReference);

            /** @var PublishingHouse $pubHouseRandomReference */
            $pubHouseRandomReference = $this->getRandomReference(PublishingHouseFixtures::MAIN_GROUP);
            $book->setPublishingHouse($pubHouseRandomReference);

            $countAuthors = 1;
            if ($this->faker->boolean(20)) {
                $countAuthors++;
                if ($this->faker->boolean(30)) {
                    $countAuthors++;
                }
            }

            $authorRandomReferences = $this->getRandomReferences(AuthorFixtures::MAIN_GROUP, $countAuthors);

            /** @var Author $author */
            foreach ($authorRandomReferences as $author) {
                $book->addAuthor($author);
            }

            return $book;
        });

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            CityFixtures::class,
            PublishingHouseFixtures::class,
            AuthorFixtures::class,
            UserFixture::class,
        ];
    }
}
