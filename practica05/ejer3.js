const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Tipo de vehículo:\n1 = Moto\n2 = Auto\n3 = Camioneta\n4 = Bus');
rl.question('Seleccione el tipo de vehículo (1-4): ', (opcionStr) => {
  rl.question('Ingrese las horas estacionado: ', (horasStr) => {
    const opcion = parseInt(opcionStr);
    const horas = parseFloat(horasStr);

    let tarifaPorHora = 0;
    let tipoNombre = '';
    let opcionValida = true;

    switch (opcion) {
      case 1:
        tipoNombre = 'Moto';
        tarifaPorHora = 1.00;
        break;
      case 2:
        tipoNombre = 'Auto';
        tarifaPorHora = 2.00;
        break;
      case 3:
        tipoNombre = 'Camioneta';
        tarifaPorHora = 3.00;
        break;
      case 4:
        tipoNombre = 'Bus';
        tarifaPorHora = 5.00;
        break;
      default:
        opcionValida = false;
        break;
    }

    if (!opcionValida) {
      console.log('Error: Tipo de vehículo no válido.');
    } else {
      const subtotal = tarifaPorHora * horas;
      let descuento = 0;

      if (horas > 5) {
        descuento = subtotal * 0.20;
      }

      const total = subtotal - descuento;

      console.log('\n--- FACTURA DE ESTACIONAMIENTO ---');
      console.log(`Tipo de vehículo: ${tipoNombre}`);
      console.log(`Horas estacionado: ${horas}`);
      console.log(`Tarifa por hora: $${tarifaPorHora.toFixed(2)}`);
      console.log(`Subtotal: $${subtotal.toFixed(2)}`);
      console.log(`Descuento (20%): $${descuento.toFixed(2)}`);
      console.log(`Total a pagar: $${total.toFixed(2)}`);
    }

    rl.close();
  });
});