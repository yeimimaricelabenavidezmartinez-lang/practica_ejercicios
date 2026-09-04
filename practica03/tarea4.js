// Tarea 4: Validar requisitos de empleado
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el nombre del candidato: ", (nombre) => {
  rl.question("Ingrese la edad: ", (edad) => {
    rl.question("Ingrese los años de experiencia: ", (experiencia) => {
      edad = parseInt(edad);
      experiencia = parseInt(experiencia);

      if (edad > 18 && experiencia > 0) {
        console.log(`Candidato válido: ${nombre}`);
      } else {
        console.log("No cumple con los requisitos");
      }

      rl.close();
    });
  });
});