const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let calificaciones = [];

function solicitarCalificaciones(contador, total) {
    if (contador < total) {
        rl.question(`Ingrese la calificación ${contador + 1}: `, (nota) => {
            calificaciones.push(parseFloat(nota));
            solicitarCalificaciones(contador + 1, total);
        });
    } else {
        let suma = 0;
        let notaMasAlta = calificaciones[0];
        let notaMasBaja = calificaciones[0];

        // Recorrido con bucle FOR para calcular suma, máximo y mínimo
        for (let i = 0; i < calificaciones.length; i++) {
            suma += calificaciones[i];

            if (calificaciones[i] > notaMasAlta) {
                notaMasAlta = calificaciones[i];
            }

            if (calificaciones[i] < notaMasBaja) {
                notaMasBaja = calificaciones[i];
            }
        }

        let promedio = suma / calificaciones.length;

        console.log("\n--- RESULTADOS ---");
        console.log(`Promedio de calificaciones: ${promedio.toFixed(2)}`);
        console.log(`Calificación más alta: ${notaMasAlta}`);
        console.log(`Calificación más baja: ${notaMasBaja}`);

        rl.close();
    }
}

rl.question("¿Cuántas calificaciones desea ingresar?: ", (respuesta) => {
    let totalCalificaciones = parseInt(respuesta);
    solicitarCalificaciones(0, totalCalificaciones);
});