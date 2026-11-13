function coche(modelo, color, kms, combustible) {
    this.modelo = modelo;this.color = color;
    this.kms = kms;
    this.combustible = combustible;
}

var elmio = new coche ("Mercedes B330", "negro", 120000, "diésel");
var eltuyo = new coche ("BMV 318", "blanco", 210000, "gasolina");

delete elmio.matrícula;