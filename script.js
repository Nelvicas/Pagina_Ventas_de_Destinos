
// desectructurar 
// mandar a llamar o importar otro script 

import {barcelona,roma,paris,londres} from './ciudades.js';

// obtener los elementos del DOM 

let enlaces = document.querySelectorAll('a');                     // selecciona todos los selectores con la etiqueta "a"
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio')


// Agregar un evento CLICK a cada enlace 

enlaces.forEach(function(enlace){                  
    enlace.addEventListener('click', function(){             // agrega la accion de hacer un click      
          // REMOVER ACTIVE (remover la clase active de todos los enlaces )

            enlaces.forEach(function(enlace){
                enlace.classList.remove('active');
            });

          //   Agregar la clase "active" al enlace actual
             this.classList.add('active');


         //  Obtener el contenido correspondiente segun el enlace 
            let contenido = obtenerContenido(this.textContent);
            
            //     MOSTRAR EL CONTENIDO EN EL DOM 

            tituloElemento.innerHTML = contenido.titulo;
            subtituloElemento.innerHTML = contenido.subtitulo;
            parrafoElemento.innerHTML = contenido.parrafo;
            precioElemento.innerHTML = contenido.precio;

    });

});



// FUNCION PARA TRAEL LA INFORMACION CORRECTA DESDE CIUDADES.JS

function obtenerContenido(enlace){
    let contenido ={
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres

    }
    return contenido[enlace];

}
