
//const arrg = [13, "Hola", true, {nombre:"Carlos", edad:23}, [1, 2, 3] ];



/*Saber cuantos elementos tiene un arrelgo  

console.log(semana.length);*/


/* /* Extraer un valor de un arreglo 

console.log(arrg[1]);

/* extraer elemento de un arreglo y a su vez de un objeto 
console.log(arrg[3].nombre);

/* extraer elemento de un arreglo que se encuentra dentro de un arreglo 
console.log(arrg[4][1]); */


/* Como recorre un Arreglo */

/* function mostrarDiasSemana() {
    
    for (let i = 0; i < semana.length ; i++){
     console.log(semana[i]);
    }
  
}    


mostrarDiasSemana(); */

/* 
/* METODOS */

// toString // devuelve la representacion en string de un arreglo.

// semana.join("caracter elegido") devuelve todos los elementos de un arreglo en un string 
// pero separados por el caracter que especifiquemos. 

//semana.slice(2,4)  nos corta un arreglo y nos devuelve ese intervalo, nos pide posicion inicial y final */

//let semana =["Lunes", "Martes", "Miercoles"];
//let semana2= [ "jueves", "viernes", "sabado"]

/* /* Concatenar arreglos  

const resultado = [...semana, ...semana2]; // sintaxis de ES6

console.log(resultado); */


/* Agregar nuevos elementos al final de mi Arreglo */

//semana2.push("Domingo"); // el metodo push agrega un eleemento al final del arreglo

//semana = [...semana, "Feriado"];// sintaxis de ES6

//console.log(semana);

/* Agregar nuevos elementos al principio de mi arreglo de mi Arreglo */

//semana.unshift("elemento")