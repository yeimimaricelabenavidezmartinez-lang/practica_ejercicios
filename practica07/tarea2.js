// Tarea 2: Cajero automático interactivo con validaciones
let saldo = 1000;
let opcionCajero;

do {
    let entrada = prompt(
        "--- CAJERO AUTOMÁTICO ---\n" +
        "Saldo actual: $" + saldo + "\n\n" +
        "1) Consultar saldo\n" +
        "2) Retirar\n" +
        "3) Depositar\n" +
        "4) Salir\n" +
        "Seleccione una opción:"
    );

    opcionCajero = parseInt(entrada);

    switch (opcionCajero) {
        case 1:
            console.log("Consulta de saldo: $" + saldo);
            alert("Su saldo actual es: $" + saldo);
            break;

        case 2:
            let montoRetiro = parseFloat(prompt("Ingrese el monto a retirar:"));
            if (isNaN(montoRetiro) || montoRetiro <= 0) {
                alert("Monto inválido.");
            } else if (montoRetiro > saldo) {
                alert("Fondos insuficientes. No puede retirar más de $" + saldo);
                console.log("Intento de retiro fallido: $" + montoRetiro + " (Excede saldo)");
            } else {
                saldo -= montoRetiro;
                console.log("Retiro exitoso: $" + montoRetiro + ". Nuevo saldo: $" + saldo);
                alert("Retiro exitoso. Su nuevo saldo es: $" + saldo);
            }
            break;

        case 3:
            let montoDeposito = parseFloat(prompt("Ingrese el monto a depositar:"));
            if (!isNaN(montoDeposito) && montoDeposito > 0) {
                saldo += montoDeposito;
                console.log("Depósito exitoso: $" + montoDeposito + ". Nuevo saldo: $" + saldo);
                alert("Depósito exitoso. Su nuevo saldo es: $" + saldo);
            } else {
                alert("El monto a depositar debe ser mayor a $0.");
                console.log("Intento de depósito fallido: Monto no válido");
            }
            break;

        case 4:
            console.log("Gracias por usar el cajero automático. ¡Hasta pronto!");
            alert("Gracias por usar nuestros servicios.");
            break;

        default:
            alert("Opción no válida. Intente de nuevo.");
            break;
    }
} while (opcionCajero !== 4);