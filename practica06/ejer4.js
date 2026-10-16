const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de filas para la pirámide: ", (respuesta) => {
    let filas = parseInt(respuesta);

    console.log("\nPirámide de asteriscos:");
    for (let i = 1; i <= filas; i++) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
            linea += "*";
        }
        console.log(linea);
    }

    rl.close();
});