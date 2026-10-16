/*
===========================================
EJERCICIO PRÁCTICO: Tarea 3 - Funciones para manejo de cadenas
===========================================
Enunciado:
Cree las siguientes funciones: una que reciba una cadena y devuelva la cantidad de vocales; 
otra que reciba una cadena y devuelva la cadena invertida; y otra que reciba una cadena 
y determine si es palíndromo (se lee igual al derecho y al revés). Solicite una palabra 
o frase al usuario y muestre los tres resultados.
===========================================
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarVocales(cadena) {
    let vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.indexOf(cadena[i]) !== -1) {
            contador++;
        }
    }
    return contador;
}

function invertirCadena(cadena) {
    let invertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        invertida += cadena[i];
    }
    return invertida;
}

function esPalindromo(cadena) {
    let limpia = cadena.toLowerCase().replace(/[\W_]/g, "");
    let invertida = "";
    for (let i = limpia.length - 1; i >= 0; i--) {
        invertida += limpia[i];
    }
    return limpia === invertida;
}

rl.question("Ingrese una palabra o frase: ", (texto) => {
    let totalVocales = contarVocales(texto);
    let textoInvertido = invertirCadena(texto);
    let palindromo = esPalindromo(texto);

    console.log("\n=== RESULTADOS ===");
    console.log("Cantidad de vocales: " + totalVocales);
    console.log("Cadena invertida: " + textoInvertido);
    console.log("¿Es palíndromo?: " + (palindromo ? "Sí" : "No"));

    rl.close();
});