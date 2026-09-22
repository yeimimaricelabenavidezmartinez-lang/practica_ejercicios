const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Tipo de tarjeta:\n1 = Débito\n2 = Crédito\n3 = Premium');
rl.question('Seleccione el tipo de tarjeta (1-3): ', (tipoStr) => {
  rl.question('Ingrese el monto a retirar: ', (montoStr) => {
    const tipo = parseInt(tipoStr);
    const monto = parseFloat(montoStr);

    let limite = 0;
    let tarjetaValida = true;

    switch (tipo) {
      case 1:
        limite = 500;
        break;
      case 2:
        limite = 1000;
        break;
      case 3:
        limite = 2000;
        break;
      default:
        tarjetaValida = false;
        break;
    }

    if (!tarjetaValida) {
      console.log('Tarjeta no válida');
    } else {
      if (monto > limite) {
        console.log('Límite excedido');
      } else if (monto % 10 !== 0) {
        console.log('El monto debe ser múltiplo de 10');
      } else {
        console.log('Retiro exitoso');
      }
    }

    rl.close();
  });
});