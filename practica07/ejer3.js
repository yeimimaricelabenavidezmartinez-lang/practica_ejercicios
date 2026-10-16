// Ejercicio 3: Procesar nombres con FOR...OF
let nombres = ["Alejandro", "María", "Christopher", "Ana", "Fernando"];
let nombreMasLargo = "";

console.log("--- LISTADO DE NOMBRES ---");

for (let nombre of nombres) {
    let cantidadLetras = nombre.length;
    console.log("Nombre: " + nombre + " - Letras: " + cantidadLetras);

    if (nombre.length > nombreMasLargo.length) {
        nombreMasLargo = nombre;
    }
}

console.log("--------------------------");
console.log("El nombre más largo es: " + nombreMasLargo + " con " + nombreMasLargo.length + " letras.");