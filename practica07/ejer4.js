// Ejercicio 4: Recorrer propiedades de un objeto estudiante con FOR...IN
let estudiante = {
    nombre: "Yeimi Benavides",
    edad: 20,
    carrera: "Ingeniería en Sistemas",
    promedio: 8.5,
    universidad: "UNIVO"
};

console.log("--- DETALLES DEL ESTUDIANTE ---");

for (let propiedad in estudiante) {
    console.log(propiedad + ": " + estudiante[propiedad]);
}

if (estudiante.promedio >= 8) {
    console.log("--------------------------");
    console.log("Estudiante destacado");
}