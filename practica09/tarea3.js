// 1. Cantidad de vocales en una cadena[span_13](start_span)[span_13](end_span)
function contarVocales(cadena, i = 0) {
    if (i >= cadena.length) return 0;
    let letra = cadena[i].toLowerCase();
    let esVocal = "aeiouáéíóú".includes(letra) ? 1 : 0;
    return esVocal + contarVocales(cadena, i + 1);
}

// 2. Invertir una cadena[span_14](start_span)[span_14](end_span)
function invertirCadena(cadena) {
    if (cadena === "") return "";
    return invertirCadena(cadena.substring(1)) + cadena[0];
}

// 3. Determinar si es palíndromo[span_15](start_span)[span_15](end_span)
function esPalindromo(cadena) {
    // Limpiamos espacios y pasamos a minúsculas para una mejor validación
    let limpia = cadena.toLowerCase().replace(/[\W_]/g, '');
    function verificar(str) {
        if (str.length <= 1) return true;
        if (str[0] !== str[str.length - 1]) return false;
        return verificar(str.substring(1, str.length - 1));
    }
    return verificar(limpia);
}

// Ejemplo de prueba
let texto = "Anita lava la tina";

console.log("--- TAREA 3 ---");
console.log("Texto analizado: " + texto);
console.log("Cantidad de vocales: " + contarVocales(texto));[span_16](start_span)[span_16](end_span)
console.log("Cadena invertida: " + invertirCadena(texto));[span_17](start_span)[span_17](end_span)
console.log("¿Es palíndromo?: " + esPalindromo(texto));[span_18](start_span)[span_18](end_span)