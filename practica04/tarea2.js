/*
===========================================
TAREA 2: Nivel de estudios
===========================================
Enunciado:
Solicite al usuario su nivel de estudios con un número del 1 al 5:
1=Primaria, 2=Secundaria, 3=Bachillerato,
4=Universidad, 5=Postgrado.
Usando Switch, muestre el nivel correspondiente.
Si el número no es válido, muestre "Nivel no válido".
===========================================
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su nivel de estudios (1 al 5): ', (numero) => {
    let nivel = parseInt(numero);

    switch (nivel) {
        case 1:
            console.log('Nivel de estudios: Primaria');
            break;
        case 2:
            console.log('Nivel de estudios: Secundaria');
            break;
        case 3:
            console.log('Nivel de estudios: Bachillerato');
            break;
        case 4:
            console.log('Nivel de estudios: Universidad');
            break;
        case 5:
            console.log('Nivel de estudios: Postgrado');
            break;
        default:
            console.log('Nivel no válido');
    }

    rl.close();
});