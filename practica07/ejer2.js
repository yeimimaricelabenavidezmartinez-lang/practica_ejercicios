// Ejercicio 2: Menú de opciones usando DO...WHILE y Switch
let opcion;

do {
    let entrada = prompt(
        "--- MENÚ INTERACTIVO ---\n" +
        "1) Saludar\n" +
        "2) Mostrar fecha actual\n" +
        "3) Salir\n" +
        "Seleccione una opción (1-3):"
    );
    
    opcion = parseInt(entrada);

    switch (opcion) {
        case 1:
            console.log("¡Hola! Esperamos que tengas un excelente día.");
            alert("¡Hola! Esperamos que tengas un excelente día.");
            break;
        case 2:
            let fechaActual = new Date().toLocaleDateString();
            console.log("La fecha actual es: " + fechaActual);
            alert("La fecha actual es: " + fechaActual);
            break;
        case 3:
            console.log("Saliendo del menú... ¡Hasta luego!");
            alert("Saliendo del menú... ¡Hasta luego!");
            break;
        default:
            console.log("Opción no válida. Intente nuevamente.");
            alert("Opción no válida. Por favor, ingrese 1, 2 o 3.");
            break;
    }
} while (opcion !== 3);