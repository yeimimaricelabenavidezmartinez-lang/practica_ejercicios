const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el lado A: ', (ladoAStr) => {
  rl.question('Ingrese el lado B: ', (ladoBStr) => {
    rl.question('Ingrese el lado C: ', (ladoCStr) => {
      const a = parseFloat(ladoAStr);
      const b = parseFloat(ladoBStr);
      const c = parseFloat(ladoCStr);

      // Validación del triángulo
      const esValido = (a + b > c) && (a + c > b) && (b + c > a);

      if (!esValido) {
        console.log('Error: Los lados ingresados no pueden formar un triángulo.');
      } else {
        // Determinamos la categoría para evaluar con Switch
        let tipoCodigo = 0;

        if (a === b && b === c) {
          tipoCodigo = 1; // Equilátero
        } else if (a === b || a === c || b === c) {
          tipoCodigo = 2; // Isósceles
        } else {
          tipoCodigo = 3; // Escaleno
        }

        let tipoNombre = '';
        switch (tipoCodigo) {
          case 1:
            tipoNombre = 'Equilátero';
            break;
          case 2:
            tipoNombre = 'Isósceles';
            break;
          case 3:
            tipoNombre = 'Escaleno';
            break;
        }

        const perimetro = a + b + c;

        console.log('\n--- RESULTADO ---');
        console.log(`Tipo de triángulo: ${tipoNombre}`);
        console.log(`Perímetro: ${perimetro.toFixed(2)}`);
      }

      rl.close();
    });
  });
});