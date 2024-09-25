// 1. Evita el comportamiento por defecto al hacer click. 
//Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

//addEventListener: onclick.preventDefault

//document.querySelectorAll("head")
const enlaces = document.querySelectorAll('a');

// Recorremos todos los enlaces y les agregamos el evento de clic
enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function(event) {
        event.preventDefault();  // Evitar la acción predeterminada
        alert("Se ha prevenido la navegación al enlace: " + this.href);
    });
});

//2.1 Imágenes: Cambia la imagen por uno de los gif que tienes 
//en la carpeta assets con el nombre magic-*.

// Seleccionamos todos los elementos <figure>
const figuras = document.querySelectorAll('figure');

//No vale porque dentro de figure hay img y al cambiar img se han cambiado todas.
// Recorremos cada figura seleccionada
//figuras.forEach(function(figure) {
    // Dentro de cada figura, seleccionamos la imagen
    //const imagen = figure.querySelector('img');
    
    // Cambiamos el atributo src de la imagen a una nueva imagen
    //imagen.src = '/assets/magic-6.gif'; // Cambia a la ruta de la nueva imagen
//});

//selecionamos los img
const imagenes = document.querySelectorAll("img");
    imagenes.forEach(function(imagen) {
        imagen.src = "/assets/magic-5.gif";
    });
    
// 2.2 Párrafos: 
//Cambia el color del texto y el de fondo por uno cualquiera.
//document.getElementsByTagName("body")
document.body.style.backgroundColor = "black";

// 2.3 Bloques de article o section: Cambia el color de fondo.
