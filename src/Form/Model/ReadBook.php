<?php

namespace App\Form\Model;

/**
 * @author    Tomasz Karliński <karlinski.tomasz@gmail.com>
 * @copyright 2019 tkarlinski
 * @package   App\Form\Model
 * @since     2019-08-07
 * @version   Release: $
 */
class ReadBook
{
    /**
     * @var bool
     */
    private $isRead;

    /**
     * @var \DateTimeInterface
     */
    private $startDate;

    /**
     * @var \DateTime
     */
    private $endDate;

    public function setIsRead(?bool $isRead): void
    {
        $this->isRead = $isRead;
    }

    public function getIsRead(): ?bool
    {
        return $this->isRead;
    }

    public function isRead(): ?bool
    {
        return $this->isRead;
    }

    public function setStartDate(?\DateTimeInterface $startDate): void
    {
        $this->startDate = $startDate;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setEndDate(?\DateTimeInterface $endDate): void
    {
        $this->endDate = $endDate;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->endDate;
    }

}