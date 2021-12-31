
/* Traemos los elementos del DOM  */


const botonAgregar = document.getElementById('boton-agregar')
const botonLimpiar = document.getElementById('btn-limpiar')
const listaTareas = document.querySelector('.lista-tareas')



/* informacion para la Fecha DE LA LISTA DE TAREAS*/

const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById ('dateText');
const dateMonth = document.getElementById('dateMonth'); 
const dateYear = document.getElementById('dateYear');


const setDate = ()=>{
    const date = new Date();

    dateNumber.textContent = date.toLocaleString('es',{day:'numeric'});
    dateMonth.textContent = date.toLocaleString('es',{month:'short'});
    dateYear.textContent = date.toLocaleString('es',{year:'numeric'});
}

setDate();

/* Cierra informacion para la FECHA DE LA LISTA DE TAREAS*/

/*Abre INFORMACION CLIMA  */

const API_key = "f074bc18bf96b8685a4961ccfd021b10";

const fetchData = (position)=>{

    const {latitude, longitude}= position.coords;

    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_key}`)
    .then( response => response.json())
    .then(data => setWeatherData(data));
    
};

const setWeatherData = (data)=>{

    const weatherData = {
        location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp,
    };

    Object.keys(weatherData).forEach( key =>{
        document.getElementById(key).textContent = weatherData[key];
    });


    cleanUp();
}

const cleanUp = ()=>{
    let container = document.getElementById('clima');
    let loader = document.getElementById('spinner');

    loader.style.display='none';
    container.style.display = 'flex';
};

const onLoad = ()=>{
    navigator.geolocation.getCurrentPosition(fetchData);
};



/* Cierra INFORMACION CLIMA  */


/* BOTONERA DEL MENU */

$("#btn-start").on('click', ()=>{
    $(".home-page").show();
    $("#contenedor").hide();
    $(".APIContainer").hide();

});


$("#btn-finanzas").click(()=>{$(".APIContainer").toggle() ;$(".canvas-container").hide() ; $("#contenedor").hide(); $("#clima").hide() }
)

$("#btn-to-do").click(()=>{$("#contenedor").toggle(); $(".canvas-container").hide(); $(".APIContainer").hide(); $("#clima").hide()})


$("#btn-log-out").on('click',()=>{
    $("#main").html(`<div class="pantallaSalida"> 

    <button class="boton-reload"> Volver al inicio</button>

    </div>`);

    $(".boton-reload").on('click', ()=>{
        window. location. reload();
    })
    
})


/* CIERRA BOTONERA DEL MENU */



$("#btn-limpiar").click(()=>{
    
    $(".lista").hide(500);
   
});


/* BOTONERA DEL LA LISTA DE TAREAS */

$("#boton-agregar").click(()=>{
    agregarTarea("");
});



listaTareas.addEventListener('click', (event) => {
    //funcion para eliminar la tarea seleccionada

    if (event.path[0].type == 'submit') {
        eliminarTarea(event.path[1].id);
    }

})
 


listaTareas.addEventListener('keypress', (event) => {
    
    
    if (event.keyCode == 13) {
        editarTarea(event.path[1].id, event.path[0].value);
        agregarTarea("");
    }

    
})

/* LocaStorage */

let arregloTareas = [];
let contador = 0;


/* Funciones PARA LA TO- DO LIST  */

const getContador = () => {
    const cont = localStorage.getItem("contador")
    return cont
}

const setContador = () => {
    localStorage.setItem("contador", contador);   
}


const inicilizarContador = () => {
    if (getContador () != null) {
      contador = getContador();
    }
  }



const getArregloDeTareas = () =>{
    setContador();
    const arreglo = JSON.parse(localStorage.getItem("arregloTareas"));
    return arreglo
}


const setArregloDeTareas = () =>{
    localStorage.setItem("arregloTareas", JSON.stringify(arregloTareas));
    listarTareas();
}


const agregarTarea = (descripcion) => {
    contador++

    // definimos el objeto tarea con un ID y una descripcion
    let objTarea = {
        id: contador,
        descripcion: descripcion,
    };

    // la variable obtiene lo que hay en locastorage
   if (getArregloDeTareas() != null) {
       arregloTareas=getArregloDeTareas();
   }

    // luego a la variable se le pushea un objeto de tarea
    arregloTareas.push(objTarea);

    // por ultimo se actualiza el localStorage
    setArregloDeTareas()
}

const listarTareas = () =>{
    listaTareas.innerHTML = '';

    let datos = getArregloDeTareas().reverse();

    if (datos != null) {
        for (const tarea of datos) {
           
           $(".lista-tareas").append(`
           <li class="lista" id= ${tarea.id}>
               <input type="text" class="input-tarea"  value= "${tarea.descripcion}"> 
               <button class="boton-eliminar">X</button> 
           </li>` )
          
           
           
           
        };
    };

  
    
};



const editarTarea = (idTarea, descripcion) =>{
    let newTarea = {
        id: idTarea,
        descripcion: descripcion,
    };


    let datos = getArregloDeTareas();
    let newArreglo = [];
     
    if (datos != null) {
        for (const tarea of datos) {
           if (tarea.id == idTarea ) {
             newArreglo.push(newTarea);   
            }else{
                newArreglo.push(tarea);
            };
            
        };
    };

    arregloTareas = newArreglo;
    setArregloDeTareas();
}


const eliminarTarea = (idTarea)=> {
    let datos = getArregloDeTareas();
    let newArreglo =[];

    if (datos != null) {
        for (const tarea of datos) {
           if (tarea.id != idTarea ) {
               newArreglo.push(tarea);
               
            }
            
        };
    };


    arregloTareas = newArreglo;
    setArregloDeTareas();
}


const limpiarTodo = ( )=>{
    arregloTareas = [];
    contador = 0;
    setArregloDeTareas();
    setContador();
};

/* CIERRA Funciones PARA LA TO- DO LIST  */


/* API para consulta valor del  DOLAR */

const URLApi = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';

$.get( URLApi, (response, status)=>{

                let contador = 0;
            
                if (status=== "success") {
                  $("#api-btn").on("click", (event)=>{
                    $(".APIContainer").append(
                        `<div class="dollar-container">
                            <tr class="contador">${contador+1}</tr>
                            <span id="nombre-dolar">${response[contador].casa.nombre}</span> <br>
                            Compra :${response[contador].casa.compra} ARS <br>
                            Venta: ${response[contador].casa.venta} ARS
                           
                        </div>`
                    );
            
                    contador++;
                  });
            
                };
            }
            );
            

/* API para consulta valor del  DOLAR */




inicilizarContador();
listarTareas();


