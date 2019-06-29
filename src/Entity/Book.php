<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BookRepository")
 * @ORM\Table(name="ksiazka")
 */
class Book
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(name="tytul", type="string", length=200)
     */
    private $title;

    /**
     * @ORM\Column(name="rok", type="smallint", nullable=true)
     */
    private $publishYear;

    /**
     * @ORM\Column(name="strony", type="smallint")
     */
    private $pages;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $isbn;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\City")
     * @ORM\JoinColumn(name="id_miasto", referencedColumnName="id")
     */
    private $city;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\PublishingHouse", inversedBy="books")
     * @ORM\JoinColumn(name="id_wydawnictwo", referencedColumnName="id")
     */
    private $publishingHouse;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Note", mappedBy="book", orphanRemoval=true)
     */
    private $note;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="books")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Author", inversedBy="books")
     * @ORM\JoinTable(name="autor_ksiazka",
     *      joinColumns={@ORM\JoinColumn(name="id_autor", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="id_ksiazka", referencedColumnName="id")}
     *      )
     */
    private $authors;

    public function __construct()
    {
        $this->note = new ArrayCollection();
        $this->authors = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getPublishYear(): ?int
    {
        return $this->publishYear;
    }

    public function setPublishYear(?int $publishYear): self
    {
        $this->publishYear = $publishYear;

        return $this;
    }

    public function getPages(): ?int
    {
        return $this->pages;
    }

    public function setPages(int $pages): self
    {
        $this->pages = $pages;

        return $this;
    }

    public function getIsbn(): ?string
    {
        return $this->isbn;
    }

    public function setIsbn(string $isbn): self
    {
        $this->isbn = $isbn;

        return $this;
    }

    public function getCity(): ?City
    {
        return $this->city;
    }

    public function setCity(?City $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getPublishingHouse(): ?PublishingHouse
    {
        return $this->publishingHouse;
    }

    public function setPublishingHouse(?PublishingHouse $publishingHouse): self
    {
        $this->publishingHouse = $publishingHouse;

        return $this;
    }

    /**
     * @return Collection|Note[]
     */
    public function getNote(): Collection
    {
        return $this->note;
    }

    public function addNote(Note $note): self
    {
        if (!$this->note->contains($note)) {
            $this->note[] = $note;
            $note->setBook($this);
        }

        return $this;
    }

    public function removeNote(Note $note): self
    {
        if ($this->note->contains($note)) {
            $this->note->removeElement($note);
            // set the owning side to null (unless already changed)
            if ($note->getBook() === $this) {
                $note->setBook(null);
            }
        }

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection|Author[]
     */
    public function getAuthors(): Collection
    {
        return $this->authors;
    }

    public function addAuthor(Author $author): self
    {
        if (!$this->authors->contains($author)) {
            $this->authors[] = $author;
        }

        return $this;
    }

    public function removeAuthor(Author $author): self
    {
        if ($this->authors->contains($author)) {
            $this->authors->removeElement($author);
        }

        return $this;
    }
}
