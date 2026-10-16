// Tarea 1: Juego de adivinar el número secreto
let numeroSecreto = Math.floor(Math.random() * 50) + 1;
let intentos = 0;
let adivinado = false;

console.log("--- JUEGO: ADIVINA EL NÚMERO SECRETO ---");

while (!adivinado) {
    let entrada = prompt("Adivina el número secreto (entre 1 y 50):");
    let numeroUsuario = parseInt(entrada);

    if (isNaN(numeroUsuario)) {
        alert("Por favor ingresa un número válido.");
        continue;
    }

    intentos++;

    if (numeroUsuario === numeroSecreto) {
        console.log("¡Felicidades! Adivinaste el número secreto (" + numeroSecreto + ").");
        alert("¡Correcto! Lo lograste en " + intentos + " intento(s).");
        adivinado = true;
    } else if (numeroUsuario < numeroSecreto) {
        console.log("Intento " + intentos + ": " + numeroUsuario + " -> El número secreto es MAYOR.");
        alert("El número secreto es MAYOR que " + numeroUsuario);
    } else {
        console.log("Intento " + intentos + ": " + numeroUsuario + " -> El número secreto es MENOR.");
        alert("El número secreto es MENOR que " + numeroUsuario);
    }
}

console.log("Juego terminado. Total de intentos: " + intentos);