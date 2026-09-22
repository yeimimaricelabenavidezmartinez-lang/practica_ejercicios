const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el primer número (a): ', (aStr) => {
  rl.question('Ingrese el segundo número (b): ', (bStr) => {
    rl.question('Ingrese el tercer número (c): ', (cStr) => {
      const a = parseFloat(aStr);
      const b = parseFloat(bStr);
      const c = parseFloat(cStr);

      console.log('\n--- ANÁLISIS ---');

      // Verificación de igualdad
      if (a === b && b === c) {
        console.log('Los tres números son iguales');
      } else if (a !== b && b !== c && a !== c) {
        console.log('Los tres números son diferentes');
      } else {
        console.log('Hay dos números iguales');
      }

      // Determinar mayor y menor
      const mayor = Math.max(a, b, c);
      const menor = Math.min(a, b, c);

      console.log(`El número mayor es: ${mayor}`);
      console.log(`El número menor es: ${menor}`);

      // Verificación de números negativos
      if (a < 0 || b < 0 || c < 0) {
        console.log('Hay números negativos');
      }

      rl.close();
    });
  });
});