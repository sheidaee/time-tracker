<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BookTimeRepository")
 */
class BookTime
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $clock_in;

    /**
     * @ORM\Column(type="datetime")
     */
    private $clock_out;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    public function getId()
    {
        return $this->id;
    }

    public function getClockIn(): ?\DateTimeInterface
    {
        return $this->clock_in;
    }

    public function setClockIn(\DateTimeInterface $clock_in): self
    {
        $this->clock_in = $clock_in;

        return $this;
    }

    public function getClockOut(): ?\DateTimeInterface
    {
        return $this->clock_out;
    }

    public function setClockOut(\DateTimeInterface $clock_out): self
    {
        $this->clock_out = $clock_out;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }
}
