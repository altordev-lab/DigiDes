<?php
    // Incluimos los otros archivos
    include_once "personaje.php";
    include_once "mago.php";

    // Creamos la clase hija Guerrero
    class Guerrero extends Personaje {
        private int $fuerza;

        // Constructor de la clase hija
        public function __construct(string $nombre, int $vida) {
            parent::__construct($nombre, $vida);
            $this->fuerza = 20;
        }

        // Método de la clase
        public function atacar(Personaje $objetivo) {
            echo "¡Ataque con la espada!";
            parent::atacar($objetivo);

            parent::recibirDanyo($objetivo, $this->fuerza);

            if ($objetivo->vida == 0) {
                $this->nivel += 1;
                $this->vida += $this->vida * 0.5;
                $this->fuerza += 10;
            }
        }
    }

    // Prueba
    $link = new Guerrero("Link", 70);
    $link->atacar($mario);

?>