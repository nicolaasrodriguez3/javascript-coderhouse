
/* Traemos los elementos del DOM  */


const botonAgregar = document.getElementById('boton-agregar')
const botonLimpiar = document.getElementById('btn-limpiar')
const listaTareas = document.querySelector('.lista-tareas')


/* Eventos  */



/* Animaciones  */

$("document").ready(()=>{
    $("#btn-start").click(()=>{
        $("#contenedor").fadeOut(500, () => {
            $("#display-saludo").text("Adios ! Vuelve Pronto");
            $("#display-saludo").addClass("log-out");
            $("#btn-start").hide(500);
        });
    });
})




$("#btn-limpiar").click(()=>{
    
    $(".lista").hide(500);
   
});


$("#boton-agregar").click(()=>{
    agregarTarea("");
});

$("#botonDone").click(()=>{
    listaTareas.classList.toggle('input-done'); 
})

/* $(".lista-tareas").click((event)=>{

    if (event.path[0].type == 'submit') {
        eliminarTarea(event.path[1].id);
    };

        ESTE EVENTO ME TIRA ERROR SI LO HAGO CON JQUERY 



}) */

 listaTareas.addEventListener('click', (event) => {
    //funcion para eliminar la tarea seleccionada

    if (event.path[0].type == 'submit') {
        eliminarTarea(event.path[1].id);
    }

})
 

/* $(".lista-tareas").click((event)=>{
    if (event.path[0].type == 'submit') {
        eliminarTarea(event.path[1].id);
    };
});


    ME TIRA ERROR SI LO HAGO COMO EVENTO DE JQUERY:

    app.js:45 Uncaught TypeError: Cannot read properties of undefined (reading '0')
    at HTMLUListElement.<anonymous> (app.js:45)
    at HTMLUListElement.dispatch (libreria.min.js:1)
    at HTMLUListElement.v.handle (libreria.min.js:1)
    (anonymous) @ app.js:45
   Dispatch @ libreria.min.js:1
    v.handle @ libreria.min.js:1

 */



listaTareas.addEventListener('keypress', (event) => {
    
    
    if (event.keyCode == 13) {
        editarTarea(event.path[1].id, event.path[0].value);
        agregarTarea("");
    }

    
})

/* LocaStorage */

let arregloTareas = [];
let contador = 0;


/* Funciones  */

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
               <button class="btn-done" id="botonDone">Done</button> 
               <button class="boton-eliminar">X</button> 
              
               
           </li>
           
           ` )
           
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
}







const router = (route) =>{
    
    
    switch(route){
        case '#/':
            return 
        case '#/finanzas':
            $.get( URLApi, (response, status)=>{

                let contador = 0;
            
                if (status=== "success") {
                  $("#api-btn").on("click", (event)=>{
                    $(".APIContainer").append(
                        `<div class="dollar-container">
                            <tr class="contador">${contador+1}</tr>
                            ${response[contador].casa.nombre} <br>
                            Compra :${response[contador].casa.compra} ARS <br>
                            Venta: ${response[contador].casa.venta} ARS
                           
                        </div>`
                    );
            
                    contador++;
                  });
            
                };
            }
            );
            
            return $('.mainContent').html( contenidoFinanzas())
       
        case'#/to-do-list':
            
                    
            return $('.mainContent').html( contenidoToDoList())
    }

};

window.addEventListener('hashchange', () =>{
    router(window.location.hash)
});



const contenidoToDoList = ()=>{
    const view = `<div class="container" id="contenedor">
    <div class="header">
      <h1 class="titulo">My To Do List</h1>
    </div>
    <button id="boton-agregar" class="boton-agregar">+ Add new task</button>
    <ul class="lista-tareas">

    </ul>
    <button class="boton-limpiar" id="btn-limpiar">Clear all</button>
  </div>`


  return view
};

const contenidoFinanzas = ()=>{
  const view = `<div class="APIContainer"><button id="api-btn">Consultar cotizacion Dolar</button></div>` ;
  return view
};

const URLApi = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';







//inicia 

inicilizarContador();
listarTareas();


