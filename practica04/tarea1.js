/*
===========================================
TAREA 1: Clasificación de figuras geométricas
===========================================
Enunciado:
Solicite al usuario el número de lados de una figura (3, 4, 5, 6).
Utilizando Switch, muestre el nombre de la figura correspondiente:
3=Triángulo, 4=Cuadrilátero, 5=Pentágono, 6=Hexágono.
Si el número no está en la lista, muestre "Figura no reconocida".
===========================================
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el número de lados de la figura (3, 4, 5 o 6): ', (numero) => {
    let lados = parseInt(numero);

    switch (lados) {
        case 3:
            console.log('Figura: Triángulo');
            break;
        case 4:
            console.log('Figura: Cuadrilátero');
            break;
        case 5:
            console.log('Figura: Pentágono');
            break;
        case 6:
            console.log('Figura: Hexágono');
            break;
        default:
            console.log('Figura no reconocida');
    }

    rl.close();
});