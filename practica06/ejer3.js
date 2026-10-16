const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuántos términos de la serie Fibonacci desea ver?: ", (respuesta) => {
    let n = parseInt(respuesta);
    let serie = [];

    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        serie.push(a);
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }

    console.log(`\nSerie de Fibonacci (${n} términos):`);
    console.log(serie.join(", "));

    rl.close();
});