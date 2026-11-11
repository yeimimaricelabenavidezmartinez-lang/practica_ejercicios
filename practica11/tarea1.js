// Tarea 1: Acumulación con reduce
const notas = [8, 7, 9, 6, 10];

const sumaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
const promedio = sumaNotas / notas.length;

console.log("Notas del estudiante: " + notas);
console.log("Promedio de las notas: " + promedio.toFixed(2));