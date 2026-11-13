var boton = document.getElementById("btn");

boton.addEventListener('click', () => {
    var palabra = document.getElementById("pala").value.trim();
    var buscar = document.getElementById("bus").value.trim();

    document.getElementById("respuesta").innerHTML = `El último elemento que coincide está en la <b>posición ${palabra.lastIndexOf(buscar)}</b>.`;
});



