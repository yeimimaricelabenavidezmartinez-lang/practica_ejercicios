// 1. Factorial de un número entero positivo[span_1](start_span)[span_1](end_span)
function factorial(n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
}

// 2. Potencia de una base elevada a un exponente (sin usar **)[span_2](start_span)[span_2](end_span)
function potencia(base, exponente) {
    if (exponente === 0) return 1;
    return base * potencia(base, exponente - 1);
}

// 3. Sumar todos los números desde 1 hasta n[span_3](start_span)[span_3](end_span)
function sumaHastaN(n) {
    if (n <= 1) return n;
    return n + sumaHastaN(n - 1);
}

// Ejemplo de interacción con el usuario (puedes adaptarlo a prompt o consola)
// let numero = parseInt(prompt("Ingrese un número entero positivo:"));
let numero = 4; // Ejemplo de prueba

console.log("--- TAREA 1 ---");
console.log("Factorial de " + numero + " es: " + factorial(numero));[span_4](start_span)[span_4](end_span)
console.log("Potencia (" + numero + " elevado a " + numero + ") es: " + potencia(numero, numero));[span_5](start_span)[span_5](end_span)
console.log("Suma desde 1 hasta " + numero + " es: " + sumaHastaN(numero));[span_6](start_span)[span_6](end_span)