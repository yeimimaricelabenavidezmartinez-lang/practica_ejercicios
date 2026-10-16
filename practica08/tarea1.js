/*
===========================================
EJERCICIO PRÁCTICO: Tarea 1 - Sistema de calificaciones con funciones
===========================================
Enunciado:
Cree una función que reciba una calificación numérica (0-100) y devuelva la letra 
correspondiente (A, B, C, D, F). Cree otra función que reciba un arreglo de 
calificaciones y devuelva el promedio. Solicite al usuario cuántas calificaciones 
desea ingresar, almacene cada una en un arreglo, y al final muestre: cada calificación 
con su letra, el promedio y la letra del promedio.
===========================================
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obtenerLetraCalificacion(nota) {
    if (nota >= 90) return 'A';
    if (nota >= 80) return 'B';
    if (nota >= 70) return 'C';
    if (nota >= 60) return 'D';
    return 'F';
}

function calcularPromedio(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma / arreglo.length;
}

rl.question("¿Cuántas calificaciones desea ingresar?: ", (cantidadStr) => {
    let totalCalificaciones = parseInt(cantidadStr);
    let calificaciones = [];
    let contador = 0;

    function pedirSiguienteCalificacion() {
        if (contador < totalCalificaciones) {
            rl.question("Ingrese la calificación " + (contador + 1) + " (0-100): ", (calDiv) => {
                let nota = parseFloat(calDiv);
                calificaciones.push(nota);
                contador++;
                pedirSiguienteCalificacion();
            });
        } else {
            console.log("\n=== RESULTADOS ===");
            for (let i = 0; i < calificaciones.length; i++) {
                let nota = calificaciones[i];
                let letra = obtenerLetraCalificacion(nota);
                console.log("Calificación " + (i + 1) + ": " + nota + " - Letra: " + letra);
            }

            let promedio = calcularPromedio(calificaciones);
            let letraPromedio = obtenerLetraCalificacion(promedio);

            console.log("-----------------");
            console.log("Promedio general: " + promedio.toFixed(2));
            console.log("Letra del promedio: " + letraPromedio);

            rl.close();
        }
    }

    pedirSiguienteCalificacion();
});