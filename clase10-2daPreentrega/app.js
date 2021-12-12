
/* Traemos los elementos del DOM  */

const botonAgregar = document.getElementById('boton-agregar')
const botonLimpiar = document.getElementById('btn-limpiar')
const listaTareas = document.querySelector('.lista-tareas')


/* Eventos  */

$("#btn-limpiar").click(()=>{
    limpiarTodo();
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
            listaTareas.innerHTML += `
            <li id= ${tarea.id}>
                <input type="text" class="input-tarea"  value= "${tarea.descripcion}">
                <button class="btn-done" id="botonDone" >Done</button> <button class="boton-eliminar">X</button> 
               
                
            </li>
            
            `
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



//inicia 

inicilizarContador();
listarTareas();




