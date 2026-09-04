// Tarea 1: Validar número positivo, negativo o cero
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese un número: ", (numero) => {
  numero = parseFloat(numero);

  if (numero > 0) {
    console.log("El número es positivo");
  } else if (numero < 0) {
    console.log("El número es negativo");
  } else {
    console.log("El número es cero");
  }

  rl.close();
});