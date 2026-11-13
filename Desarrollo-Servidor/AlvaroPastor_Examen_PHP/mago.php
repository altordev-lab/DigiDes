<?php
    // Incluimos los otros archivos
    include_once "personaje.php";
    include_once "guerrero.php";

    // Creamos la clase hija Mago
    class Mago extends Personaje {
        private int $mana;

        // Constructor de la clase hija
        public function __construct(string $nombre, int $vida) {
            parent::__construct($nombre, $vida);
            $this->mana = 50;
        }

        // Método de la clase
        public function atacar(Personaje $objetivo) {
            parent::atacar($objetivo);

            if ($this->mana >= 10) {
                $this->mana -= 10;
                echo "Hechizo lanzado";
                parent::recibirDanyo($objetivo, $this->nivel*25);

                if ($objetivo->vida == 0) {
                    $this->nivel += 1;
                    $this->mana += 30;
                    $this->vida += $this->vida * 0.3;
                } else {
                    echo "Falta maná. Ataque no efectuado";
                    $this->mana += 10;
                }
            }
        }
    }

    // Prueba
    $harry = new Mago("Harry", 110);
    $harry->atacar($mario);

?>