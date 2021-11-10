/* Sistema de gestion de vendedores */


/* Definimos varaibles */
const precioVenta = 300000;
const comisionPorVenta = 20/100;

/* definimos la funcion constructor de los objetos 'vendedores' */
function vendedor (nombre, seniority, cantDeCierres, reunionesTenidas ) {

    // Atributos 
    this.nombre= nombre;
    this.seniority= seniority;
    this.cantDeCierres= cantDeCierres;
    this.online= true;
    this.reunionesTenidas= reunionesTenidas;
    this.remuneracionBasica = 80000 ; 
    this.comision = comisionPorVenta;


    /*=================METODOS================ */


    /* Esta Funcion cambia el estado de online a false y retorna una alerta 
    de que el vendedor se ha desconectado */

    this.cambiarDeEstado = function () {
        this.online = !this.online;
        return alert (`el usuario ${nombre} se ha desconectado`);
    }

       /* Esta Funcion calcula el porcentaje de conversion de cada vendedor en base a los cierres
       sobre las reuniones tenidas */
    
    this.conversionRate = function () {
        return alert(`El porcentaje de conversion de ${nombre} es de ${Math.round((cantDeCierres/reunionesTenidas)*100)} %`)
    };
  }





/* creamos los objetos */
const vendedor1 = new vendedor('Marcos', 'Sr.', 19, 28);
const vendedor2 = new vendedor('Diego', 'Jr.', 1, 10);
const vendedor3 = new vendedor('Juan', 'Ssr.', 8, 10);


const user = prompt('ingrese un numero');



switch (user) {
    case "1":
      alert(`Usted ha elegido a ${vendedor1.nombre}`)

      alert(`${vendedor1.nombre} es un vendedor ${vendedor1.seniority} que este mes ha cerrado ${vendedor1.cantDeCierres} ventas`)

      break;

    case "2":
      alert(`Usted ha elegido a ${vendedor2.nombre}`)
  
      alert(`${vendedor2.nombre} es un vendedor ${vendedor2.seniority} que este mes ha cerrado ${vendedor2.cantDeCierres} ventas`)
  
      break;

    case "3":
     alert(`Usted ha elegido a ${vendedor3.nombre}`)
    
     alert(`${vendedor3.nombre} es un vendedor ${vendedor3.seniority} que este mes ha cerrado ${vendedor3.cantDeCierres} ventas`)
    
     break;
 
  } 