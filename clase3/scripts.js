
/*
const magicNumber= 57;

for (let i=0; i<3; i++ ) {

   const numberUser = Number(prompt('ingrese un numero entre 1 y 100'));

    if (numberUser == magicNumber){
        alert('Felicitaciones ganaste el juego');
        break; //cortamos la ejecucion del ciclo.

    } else{
        alert('Numero incorrecto, intente nuevamente');
    }

} */



//for (let i = 0; i<10; i++) {
//    if (i % 2!=0) {
//        continue;
//    }
    
//    console.log(i);
//}


/* CICLO WHILE*/

/*
const magicNumber= 57;
let numberUser = Number(prompt('ingrese un numero entre 1 y 100'));

while (numberUser != magicNumber ) {

    if (numberUser < 0 || numberUser>100) {
        alert('el numero ingresado no se encuentra entre 0 y 100');
        numberUser = Number(prompt('ingrese un numero entre 1 y 100'));
        continue;
    }

    alert('el numero ingresado es incorrecto');
    numberUser = Number(prompt('ingrese un numero entre 1 y 100'));


}

alert('Felicitaciones ganaste el juego bro') */


// const user = prompt("Ingresa tu nombre de usuario");
// const pass = prompt("Ingresa tu contraseña") ;

// switch (user) {
//     case "admin":
//         alert("bienvenido Administrador capo master");
//         break;
    
//     case "martin":
//         alert("bienvenido Martin");
//         break;
    
//     case "carlitos":
//         alert("bienvenido Carlitos");
//         break;
    
    
//     default:
//         alert("Credenciales invalidas");
//         break;


// } 

const magicWord = "hot dog";
const magicNumber = 369;
alert("Bienvenido al juego de las adivinanzas")

for (let i= 0; i<3; i++) {
    const respuesta = prompt("¿Cómo se denomina a un perro con fiebre?");
    if (respuesta==magicWord) {
        alert("Adivinaste, pasaste a la siguiente ronda");
        break;


        
    }else{
        alert("Lo sentimos, respuesta incorrecta. Intentalo nuevamente");
    }
    
}

alert("Ronda numero 2")

for (let i= 0; i<3; i++) {
    const respuesta = Number(prompt("Soy un número de 3 cifras, la suma de estas es 18. La primera cifra es la mitad de la segunda y un tercio de la tercera, ¿Qué número soy?"));
    if (respuesta == magicNumber) {
        alert("Adivinaste, ganaste el juego. Saludos");
        break;


        
    }else{
        alert("Lo sentimos, respuesta incorrecta. Intentalo nuevamente");
    }
    
}
