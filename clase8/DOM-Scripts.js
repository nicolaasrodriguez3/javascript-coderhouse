/* =====================LISTA DE TAREAS =========================*/

/* se declaran las variable opcion menu en un scope global y el array lista de tareas */

let listaDeTareas = [];
let opcionMenu;

alert(' - Mi lista de tareas -')

const userName = prompt('ingrese su nombre de usuario')

alert(`Bienvenido nuevamente ${userName}`)

function mostrarTareas(listaDeTareas) {
    const ul = document.getElementById("contenedorTareas")
    
    listaDeTareas.forEach( task => {
        const li = document.createElement("li");
        li.textContent= `Tarea Numero - ${task.id+1} : ${task.name}  - Estado: ${task.estatus}`;
        ul.appendChild(li);
        li.classList.add('task');
    });

}




/* Se crea un bucle while en el cual se va a repetir la inciacion del script
a menos que se quiera salir con la opcion nro 4, se romperá el ciclo.  */
while(opcionMenu!==4){ 

    const menu = `
    Elija una opcion 
    1 - ingresar una nueva tarea
    2 -  Completar una tarea
    4 - Salir`; 
    
    opcionMenu = Number(prompt(menu)); //menu que se le muestra al usuario 

    //si el usuario ingresa una opcion entre 1 y 3 inclusive va a entrar en este if.
    // se utiliza una validacion.

    if (!isNaN(opcionMenu) && opcionMenu < 4 && opcionMenu>0) {

        // se crea  un switch para los distintos casos que puede elegir el uisuario
        switch(opcionMenu){
            case 1: // se crea el objeto 'task' y se pushea al arrey 'listaDeTareas'
            
                const name = prompt('Ingresa el nombre de la tarea');
                const estatus = "In process"; 
                const id = listaDeTareas.length;
                const task = {name, estatus, id};
        
                listaDeTareas.push(task);
                mostrarTareas(listaDeTareas);
                break;

            case 2: // se marca como completada una tarea y se imprime en consola 
                const tarea = prompt('ingrese nombre de la tarea') ;
                const tareaNorm = tarea.toLocaleLowerCase().trim();
                const index = listaDeTareas.findIndex(task =>task.name.toLocaleLowerCase()== tareaNorm);

                if(index > -1){
                    listaDeTareas[index].estatus="completado";
                    console.log("================================")
                    for (let task of listaDeTareas) { // se guarda en cada iteracion el contenido del arreglo
                      
                        console.log(`Tarea numero - ${task.id} : ${task.name} - Descripcion: ${task.description} - Estado: ${task.estatus}`);
              
                     };

                }else{alert('esa tarea no existe')};
                mostrarTareas(listaDeTareas);
                 break;


        

            
        }





    }else if (opcionMenu=="4"){

        alert(`Hasta la proxima ${userName} !`);
      

    }else{ alert("la opcion ingresada es incorrecta")};





};