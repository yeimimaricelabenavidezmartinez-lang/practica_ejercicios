const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número entero positivo: ", (respuesta) => {
    let numero = parseInt(respuesta);
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    console.log(`El factorial de \({numero} (\){numero}!) es: ${factorial}`);

    rl.close();
});