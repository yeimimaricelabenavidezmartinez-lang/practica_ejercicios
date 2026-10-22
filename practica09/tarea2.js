// 1. Suma de los primeros n números pares[span_8](start_span)[span_8](end_span)
function sumaPares(n) {
    if (n <= 0) return 0;
    return (2 * n) + sumaPares(n - 1);
}

// 2. Suma de los primeros n números impares[span_9](start_span)[span_9](end_span)
function sumaImpares(n) {
    if (n <= 0) return 0;
    return (2 * n - 1) + sumaImpares(n - 1);
}

// 3. n-ésimo término de la serie de Fibonacci[span_10](start_span)[span_10](end_span)
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Menú con Switch[span_11](start_span)[span_11](end_span)
// let opcion = parseInt(prompt("Elija una opción:\n1. Suma de pares\n2. Suma de impares\n3. Fibonacci"));
// let n = parseInt(prompt("Ingrese el valor de n:"));

let opcion = 3; // Ejemplo de prueba
let n = 5;

console.log("--- TAREA 2 ---");
switch (opcion) {
    case 1:
        console.log("La suma de los primeros " + n + " números pares es: " + sumaPares(n));
        break;
    case 2:
        console.log("La suma de los primeros " + n + " números impares es: " + sumaImpares(n));
        break;
    case 3:
        console.log("El término " + n + " de la serie de Fibonacci es: " + fibonacci(n));
        break;
    default:
        console.log("Opción no válida.");
}