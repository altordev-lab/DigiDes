var numero = Math.random();
var boton = document.getElementById("btn");
var fecha = new Date();
var horas = fecha.getHours();

boton.addEventListener('click', () => {
    if (numero > 0.5) {
        document.getElementById("respuesta").innerHTML = "<a href='https://myfpschool.com/'>Enlace a Myfpschool</a>";
    } else {
        if (horas < 15) {
            document.getElementById("respuesta").innerHTML = "Buenos días";
        } else {
            document.getElementById("respuesta").innerHTML = "Buenas tardes";
        }
    }
});



