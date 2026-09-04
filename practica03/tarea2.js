// Tarea 2: Comparar calificaciones
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese la primera calificación (0-100): ", (cal1) => {
  rl.question("Ingrese la segunda calificación (0-100): ", (cal2) => {
    cal1 = parseFloat(cal1);
    cal2 = parseFloat(cal2);

    if (cal1 > cal2) {
      console.log(`La calificación más alta es la primera: ${cal1}`);
    } else if (cal2 > cal1) {
      console.log(`La calificación más alta es la segunda: ${cal2}`);
    } else {
      console.log("Ambas calificaciones son iguales");
    }

    rl.close();
  });
});