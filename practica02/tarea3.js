//Tarea 3: Calcular edad y años de experiencia
//Solicite al usuario su año de nacimiento. 
//Obtenga el año actual, calcule su edad y muestre: "Tu edad aproximada es: X años."

let anioNacimiento = 2005;

let anioActual = new Date().getFullYear();
let edad = anioActual - anioNacimiento;

console.log(`Tu edad aproximada es: ${edad} años.`);