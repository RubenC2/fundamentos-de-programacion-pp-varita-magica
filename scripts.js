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
//const figuras = document.querySelectorAll('figure');

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
        imagen.addEventListener('click', function() {
        imagen.src = "/assets/magic-5.gif";
    });
});
    
// 2.2 Párrafos: 
//Cambia el color del texto y el de fondo por uno cualquiera.

document.body.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
})
document.body.addEventListener("mouseover", function() {
    document.body.style.cursor = "pointer"; // Cambia el cursor al estilo de puntero
});


// 2.3 Bloques de article o section: Cambia el color de fondo.
//document.getElementsByTagName("article").backgroundColor = "white";
//document.getElementsByClassName("post no-image").backgroundColor = "white";
//document.querySelectorAll("article").forEach(article => article.style.backgroundColor = "white");

//document.querySelectorAll("body > div > main > article:nth-child(1)")
   //body > div > main > article:nth-child(1).addEventListener("click", function() {
   //    body > div > main > article:nth-child(1).style.backgroundColor = "orange";  
   // })

//body > div > main > article:nth-child(1).addEventListener("click",function() {
//document.body > div > main > article:nth-child(1).style.backgroundColor = "orange";
//})

//document.body > div > main > article:nth-child(1)


//3.Cuando el cursor esté sobre alguno de los siguientes elementos, 
//seguir las instrucciones siguientes, y devolver dicho elemento 
//a su estado original cuando salga el cursor.

//3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.
const imagenes2 = document.querySelectorAll("img");
    imagenes2.forEach (function(imagen) {
        const srcOriginal = imagen.src;
        imagen.addEventListener("mouseover", function() {
            imagen.src = "/assets/abracadabra.gif"
        })
        imagen.addEventListener("mouseout", function() {
        imagen.src = srcOriginal; 
    });
})

// 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

document.getElementsByTagName("p")
    const parrafos = document.getElementsByTagName("p")
    parrafos.forEach (function()

    

