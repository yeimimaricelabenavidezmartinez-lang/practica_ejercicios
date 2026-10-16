// Ejercicio 1: Acumular números hasta superar 100 con WHILE
let sumaTotal = 0;
let contadorNumeros = 0;

while (sumaTotal <= 100) {
    let entrada = prompt("Ingrese un número (Suma actual: " + sumaTotal + "):");
    let numero = parseFloat(entrada);

    if (!isNaN(numero)) {
        sumaTotal += numero;
        contadorNumeros++;
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

console.log("--- RESULTADO FINAL ---");
console.log("Suma total alcanzada: " + sumaTotal);
console.log("Cantidad de números ingresados: " + contadorNumeros);