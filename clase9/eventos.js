

/* se declaran las variables para setiar el contenido de los div con el metodo getElementByID */
const taskContainer = document.getElementById('taskContainer');
const formulario = document.getElementById('formulario')

let listaDeTareas = [];


formulario.onsubmit = (event) =>{
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    taskContainer.prepend(task);
    event.target.reset();
    listaDeTareas.push(task.textContent);
    localStorage.setItem( "tareas", JSON.stringify(listaDeTareas));
    

}



/* Funcion para cambiar la clase de las tareas a "done" */

const changeTaskState = event =>{
    event.target.classList.toggle('done');
};


/* Funcion para ordenar las tareas realizadas con la clase "done" abajo de todo */
const order = () =>{
    const done =[];
    const toDo = [];


    taskContainer.childNodes.forEach (el =>{
        el.classList.contains('done') ? done.push(el): toDo.push(el)
    })
    return [...toDo, ...done];
};


const renderOrderedTasks = () => {
    order().forEach(el => taskContainer.appendChild(el))
};




