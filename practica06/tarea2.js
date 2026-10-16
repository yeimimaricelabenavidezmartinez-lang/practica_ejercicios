const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

rl.question("Ingrese un número N: ", (respuesta) => {
    let N = parseInt(respuesta);

    if (esPrimo(N)) {
        console.log(`\nEl número ${N} ES un número primo.`);
    } else {
        console.log(`\nEl número ${N} NO es un número primo.`);
    }

    let primos = [];
    for (let i = 1; i <= N; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }

    console.log(`Números primos entre 1 y \({N}:\){primos.join(", ")}`);

    rl.close();
});