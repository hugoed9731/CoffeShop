//NAVBAR HIDDEN
let ubicacionPrincipal = window.pageYOffset;
// window.pageYOffset este evento sirve para vel el posicionamiento del scroll
window.onscroll = function() {
    //onscroll se produce cuando se está desplazando la barra de desplazmamiento de un elemento
    let desplazmamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazmamientoActual){
        document.getElementById('navbar').style.top = '0';
    }else {
        document.getElementById('navbar').style.top = '-100px';
        // -100px es para que se esconda el navbar
    }

    ubicacionPrincipal = desplazmamientoActual;
}


// MENU SCROLLL
let buttons = document.querySelectorAll('.nav__items');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.currentTarget.getAttribute('href');
      
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

// ¿QUIENES SOMOS?

const flechaAbrir = document.getElementById('flechaAbajo'),
      flechaCerrar = document.getElementById('flechaArriba'),
      quienesSomos =  document.getElementById('aboutUs__description');


      flechaAbrir.addEventListener('click', () => {
          quienesSomos.classList.add('aparece');
          flechaAbrir.style.display = 'none';
          flechaCerrar.style.display = 'block';
      });

      flechaCerrar.addEventListener('click', () => {
        quienesSomos.classList.remove('aparece');
        flechaAbrir.style.display = 'block';
        flechaCerrar.style.display = 'none';
      });

// slider automatico our team

let slider = document.querySelector(".theCrew__content"); // obtenemos el primer elemento del documento con la clase .theCrew__content
let sliderIndividual = document.querySelectorAll(".member"); // va a obtener todos los elementos que tenga la clase .conte
let contador = 1;
let width = sliderIndividual[0].clientWidth;//el primer elemento de slider individual, 
// .clientwidth el primer elemento del contenido slider quiero que tomes su width
console.log(sliderIndividual);
let intervalo = 3000; // el intervalo, para cuando se cambia de pantalla

window.addEventListener("resize", function(){
    // cada que el usuario cambie el tamaño o posicionamiento de pantalla se cambie el tamaño para adaptarse
    width = sliderIndividual[0].clientWidth; // esta variable se va actualizar cada que haya un resize
});

//cada cierto tiempo
setInterval(function(){
   slides();  // que cada 3 segundos se ejecute la funcion slides
}, intervalo);

function slides(){
    /* aqui se hace la animacion cada que vaya cambiando en carusel */
    slider.style.transform = "translate("+(-width*contador)+"px)";
    // vamos a dar efecto a la transicion
    slider.style.transition = "transform .8s";
    // --------
    contador++;

    if(contador == sliderIndividual.length){
        // nos dice cuantos elementos tiene el arreglo
        // cuando vaya en el 5 elemento quiero que haga lo siguiente
        setTimeout(function(){
            slider.style.transform = "translate(0px)"; // cuando llegues a la posicion final en vez de traladar
            // no me traslades nada, que vuelvas al punto original
            slider.style.transition = "transform 0s";
            contador=1;
        }, 1500); // tardara un segundo y medio en ejecutarse
    }
}

// menu lateral hamburguesa
const iconoMenu = document.querySelector('#open'), 
      menu = document.querySelector('#navLinks');


      iconoMenu.addEventListener('click', () => {
        //alternamos estilos para el menu y el body
        menu.classList.toggle('activado');
        iconoMenu.classList.toggle('opacity');
        //alternamos colores del src para el icono del menu    
      });

/* CAMBIO DE TEMA */

const btnSwitch = document.querySelector('#switch');
console.log("btnSwitch");

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    /* toggle - significa que si no tiene una clase se la va a poner, y si la tiene se la va a poner */
    /* agregar el estado activo */
    btnSwitch.classList.toggle('act');
});
