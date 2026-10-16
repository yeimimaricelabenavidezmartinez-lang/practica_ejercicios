const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número N: ", (respuesta) => {
    let N = parseInt(respuesta);
    let sumaPares = 0;
    let sumaImpares = 0;

    for (let i = 1; i <= N; i++) {
        if (i % 2 === 0) {
            sumaPares += i;
        } else {
            sumaImpares += i;
        }
    }

    console.log(`\nSuma de números pares del 1 al \({N}:\){sumaPares}`);
    console.log(`Suma de números impares del 1 al \({N}:\){sumaImpares}`);

    rl.close();
});