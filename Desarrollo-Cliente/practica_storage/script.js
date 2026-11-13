document.getElementById('guardar').addEventListener('click',() => {
    const nombre = document.getElementById('nombre').value.trim();
    const tema = document.getElementById('tema').value;

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('tema', tema);

    alert('Datos guardados correctamente.');
});

document.getElementById('leer').addEventListener('click',() => {
    const nombre = localStorage.getItem('nombre');
    const tema = localStorage.getItem('tema');
    document.getElementById('estado').textContent = `Nombre:${nombre}\nTema:${tema}`;
});

document.getElementById('borrar').addEventListener('click', () => {
    localStorage.removeItem('nombre');
    localStorage.removeItem('tema');
    alert('Datos borrados.');
    aplicarTema();
});

function aplicarTema() {
    const tema = localStorage.getItem('tema');
    document.body.classList.toggle('tema-oscuro', tema ==='oscuro');
}

aplicarTema();