<?php

// Creamos la clase padre
class Personaje {
    protected string $nombre;
    protected int $vida;
    protected int $nivel;

    // Constructor de la clase
    public function __construct(string $nombre, int $vida) {
        $this->nombre = $nombre;
        $this->nivel = 1;

        if ($this->vida <= 0) {
            $this->vida = 100;
        } else {
            $this->vida = $vida;
        }
    }

    // Getters y Setters
    public function getNombre(string $nombre): string {
        return $this->nombre = $nombre;
    }

    public function getVida(int $vida): int {
        return $this->vida = $vida;
    }

    public function getNivel(int $nivel): int {
        return $this->nivel = $nivel;
    }

    public function setVida(int $vida): void {
        if ($vida <= 0) {
            echo "La vida debe ser mayor que 0";
        }
    }

    // Métodos de la clase
    public function atacar(Personaje $objetivo) {
        echo "¡Ataque!";
    }

    public function curar(int $vida, int $nivel) {
        $vida += 20 * $nivel;
        echo "Salud aumentada";
    }

    public function recibirDanyo(Personaje $objetivo, int $danyo) {
        $this->vida -= $danyo;

        echo "Daño recibido: $danyo Vida actual: $this->vida";

        if ($this->vida == 0) {
            echo "Has muerto";
        }
    }
}

// Prueba
$mario = new Personaje("Mario", 50);

?>