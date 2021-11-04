
/* calculadora de precios de juegos de steam
 
 En el marketplace de juegos 'steam' el precio reflejado no es el real, a ese precio cada comprador 
 debera sumarle los siguientes impuestos:

 21% de IVA
 8% PAIS
 35% Ganancias 

 Ya que estos impuestos solo se ven reflejados en el resumen de la tarjeta, se desarrollo
 esta calculadora que devuelve el precio final del juego sin sorpresas en el resumen.
 
 
 
*/


const userInput= Number(prompt('Bienvenido Ingrese el valor del juego'));

function taxes (precio) {
    const iva = 0.21;
    const pais = 0.08;
    const ganacias = 0.35;

    return precio + (precio * (iva+ pais + ganacias));

}


alert(`Resumen de su compra
    valor del juego : $ARS ${userInput}
    Impuesto IVA 21%
    Impuesto PAIS 8%
    Impuesto Ganancias 35%
-----------------------------
Total a pagar: $ARS ${taxes(userInput)}`);
    






