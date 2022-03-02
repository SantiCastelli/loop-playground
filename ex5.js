/**
 * Ejercicio 5: El siguiente bucle no se ejecuta nunca. 
 * Comrpruébalo con "node ex5.js"
 * ¿Sabrías decir porque?
 * NO SE EJECUTA EL BUCLE YA QUE ESTE INICIA EN EL NUMERO 5 EL CUAL ES EL MISMO VALOR QUE LA VARIABLE. CAMBIANDO LA VARIABLE A 15 LOGRAMOS QUE SE REPITA 10 VECES. DESDE 5 HASTA 14.
 * ---------------------------------------------------
 * Una vez lo averigues, arreglalo para que el bucle se ejecute exactamente 10 veces. 
 * Reestricción: SOLO puedes cambiar el valor de la variable 'veces' para conseguirlo
 */

 let veces = 15;

 for (let i=5; i<veces; i++) {
     console.log("No me voy a ejecutar..." + i)
 }