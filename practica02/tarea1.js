//Tarea 1: Procesar nombre de usuario
//Solicite al usuario su nombre completo. 
//Convierta el nombre a mayúsculas, extraiga las primeras 4 letras y luego conviértalo a minúsculas. Muestre todos los resultados.

let nombreCompleto = 'Carlos Eduardo Martínez';

let nombreMayus = nombreCompleto.toUpperCase();
let primeras4Letras = nombreCompleto.slice(0, 4);
let nombreMinus = nombreCompleto.toLowerCase();

console.log(`El nombre en mayúsculas es: ${nombreMayus}`);
console.log(`Las primeras 4 letras del nombre son: ${primeras4Letras}`);
console.log(`El nombre en minúsculas es: ${nombreMinus}`);