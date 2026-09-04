// Tarea 3: Descuento por monto de compra
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el monto de la compra: ", (monto) => {
  let montoOriginal = parseFloat(monto);
  let porcentajeDescuento = 0;

  if (montoOriginal > 100) {
    porcentajeDescuento = 0.15;
  } else if (montoOriginal > 50) {
    porcentajeDescuento = 0.10;
  } else {
    porcentajeDescuento = 0;
  }

  let descuento = montoOriginal * porcentajeDescuento;
  let totalAPagar = montoOriginal - descuento;

  console.log(`Monto original: $${montoOriginal.toFixed(2)}`);
  console.log(`Descuento aplicado: $${descuento.toFixed(2)} (${porcentajeDescuento * 100}%)`);
  console.log(`Total a pagar: $${totalAPagar.toFixed(2)}`);

  rl.close();
});