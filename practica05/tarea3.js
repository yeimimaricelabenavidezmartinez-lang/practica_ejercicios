const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let saldo = 1000;

function mostrarMenu() {
  console.log('\n=== CAJERO AUTOMÁTICO ===');
  console.log('1. Consultar saldo');
  console.log('2. Retirar dinero');
  console.log('3. Depositar dinero');
  console.log('4. Salir');

  rl.question('Seleccione una opción: ', (opcionStr) => {
    const opcion = parseInt(opcionStr);

    switch (opcion) {
      case 1:
        console.log(`Su saldo actual es: $${saldo.toFixed(2)}`);
        mostrarMenu();
        break;

      case 2:
        rl.question('Ingrese el monto a retirar: ', (montoStr) => {
          const monto = parseFloat(montoStr);
          if (monto <= 0) {
            console.log('Error: El monto debe ser mayor a $0.');
          } else if (monto % 5 !== 0) {
            console.log('Error: El monto debe ser múltiplo de $5.');
          } else if (monto > saldo) {
            console.log('Error: Saldo insuficiente.');
          } else {
            saldo -= monto;
            console.log(`Retiro exitoso. Saldo restante: $${saldo.toFixed(2)}`);
          }
          mostrarMenu();
        });
        break;

      case 3:
        rl.question('Ingrese el monto a depositar: ', (montoStr) => {
          const monto = parseFloat(montoStr);
          if (monto <= 0) {
            console.log('Error: El monto debe ser mayor a $0.');
          } else if (monto > 5000) {
            console.log('Error: No se permite depositar más de $5000 en una sola transacción.');
          } else {
            saldo += monto;
            console.log(`Depósito exitoso. Nuevo saldo: $${saldo.toFixed(2)}`);
          }
          mostrarMenu();
        });
        break;

      case 4:
        console.log('Gracias por usar el cajero');
        rl.close();
        break;

      default:
        console.log('Opción no válida');
        mostrarMenu();
        break;
    }
  });
}

mostrarMenu();