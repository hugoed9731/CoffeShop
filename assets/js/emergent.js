/* PENDIENTE ARREGLAR LA VENTANA EMERGENTE DE GALERIA */

// FORMULARIO EMERGENTE
const btnAbrirPopup = document.getElementById('btn-abrir-popup'),
      overlay = document.getElementById('overlay'),
      popup = document.getElementById('popup'),
      btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', () => {
     overlay.classList.add('active');
     popup.classList.add('active');
     document.getElementsByTagName("html")[0].style.overflow = "hidden";

});


btnCerrarPopup.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
    document.getElementsByTagName("html")[0].style.overflow = "auto";

});

// Galeria emergente

const overlayGalery = document.querySelector('.overlayGalery');
const overlayImage = document.querySelector('.overlayGalery img');
const galeriaPopup = document.getElementById('galeria-popup');
const cerrar = document.getElementById('cerrar');

/* const texto = document.querySelectorAll('.galery .galery__item .galery_cover')
const overlayTexto = document.querySelector('.overlayGalery .galeria-popup .emergentTexts .coffeText h2');
 */


document.querySelectorAll('.galery .galery__item').forEach((elemento) => {
    

    elemento.addEventListener('click', (e) => {
        overlayGalery.classList.add('activo');
        galeriaPopup.classList.add('activo');
        // recuperamos la ruta de la imagen de del texto mediante nodos
        const src = e.currentTarget.querySelector('img').src;
        const descripcion = elemento.textContent;
        overlayImage.src = src;
        //indicar la ruta y la descripcion a donde va ir el texto almacenado en const descripcion, con innerHTML lo colocamos
        document.querySelector('#overlayGalery .description').innerHTML = descripcion;
        //quitamos el scroll de la web al abrir el popUp, no se movera nada de atras
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
    });
});

cerrar.addEventListener('click', (e) => {
    e.preventDefault();
    overlayGalery.classList.remove('activo');
    galeriaPopup.classList.remove('activo');
    document.getElementsByTagName("html")[0].style.overflow = "auto";

});


/* BOTON EMERGETE */
/* SI QUITAMOS ESTE BOTON PODEMOS DEJAR LA OPCION DE MENU DESAPARECE */

// Funcionalidad de boton de arriba
window.onscroll = function() {
    // cuando hagamos scroll hacia abajo que se muestre
    console.log(document.documentElement.scrolltop); // nos vamos a consola para ver en que posicion estamos
    if (document.documentElement.scrollTop > 50) { //100: es la posicion en la cual esta el scrool
        document.querySelector('.go-top-container').classList.add('show');
    } else { // para decirle que cuando sea menor a 100 que remueva esa clase
        document.querySelector('.go-top-container').classList.remove('show');
    }
  }
  
  
  document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({ 
        top: 0,
        behavior: 'smooth' // efecto que te manda suave hacia arriba
    })
  });
  