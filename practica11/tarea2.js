// Tarea 2: Fábrica de funciones
const crearMultiplicador = (factor) => {
    return (numero) => numero * factor;
};

const duplicador = crearMultiplicador(2);
const triplicador = crearMultiplicador(3);

const numeroPrueba = 5;
console.log("Número original: " + numeroPrueba);
console.log("Resultado duplicado (factor 2): " + duplicador(numeroPrueba));
console.log("Resultado triplicado (factor 3): " + triplicador(numeroPrueba));