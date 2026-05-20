// 1. CONTROL DEL MENÚ DESPLEGABLE
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}
// 2. CONTROL DEL CARRUSEL DE IMÁGENES

const misImagenes = [
    "capturaJuego/menu.png",
    "capturaJuego/seleccion.png",
    "capturaJuego/inicioJuego.png" ,
      "capturaJuego/jefeFinal.png"
];

let indiceCarrusel = 0; 

function cambiarImagen(direccion) {
    indiceCarrusel += direccion;

    if (indiceCarrusel >= misImagenes.length) {
        indiceCarrusel = 0;
    }
    
    if (indiceCarrusel < 0) {
        indiceCarrusel = misImagenes.length - 1;
    }

    const imgVisible = document.getElementById("imagenVisible");
    if (imgVisible) {
        imgVisible.src = misImagenes[indiceCarrusel];
    }
}

document.querySelectorAll('.cinta-track').forEach(track => {

    const items = Array.from(track.children);
    items.forEach(item => {
        const clon = item.cloneNode(true);
        clon.setAttribute('aria-hidden', 'true');
        track.appendChild(clon);
    });
});