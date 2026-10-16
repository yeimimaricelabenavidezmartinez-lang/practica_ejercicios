/*
===========================================
EJERCICIO PRÁCTICO: Tarea 2 - Funciones para figuras geométricas
===========================================
Enunciado:
Cree funciones para calcular el área y el perímetro de las siguientes figuras: 
círculo, cuadrado, rectángulo y triángulo. Cada función debe recibir los parámetros 
necesarios y retornar el resultado. Cree un menú con Switch para que el usuario elija 
la figura y luego ingrese los datos necesarios. Muestre el área y el perímetro con 2 decimales.
===========================================
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

function areaCuadrado(lado) {
    return lado * lado;
}

function areaRectangulo(base, altura) {
    return base * altura;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function perimetroCirculo(radio) {
    return 2 * Math.PI * radio;
}

function perimetroCuadrado(lado) {
    return lado * 4;
}

function perimetroRectangulo(base, altura) {
    return 2 * (base + altura);
}

function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}

console.log("=== FIGURAS GEOMÉTRICAS ===");
console.log("1. Círculo");
console.log("2. Cuadrado");
console.log("3. Rectángulo");
console.log("4. Triángulo");

rl.question("Seleccione una figura (1-4): ", (opcion) => {
    let op = parseInt(opcion);

    switch (op) {
        case 1:
            rl.question("Ingrese el radio del círculo: ", (radioStr) => {
                let r = parseFloat(radioStr);
                console.log("\n=== RESULTADO ===");
                console.log("Área: " + areaCirculo(r).toFixed(2));
                console.log("Perímetro: " + perimetroCirculo(r).toFixed(2));
                rl.close();
            });
            break;
        case 2:
            rl.question("Ingrese el lado del cuadrado: ", (ladoStr) => {
                let l = parseFloat(ladoStr);
                console.log("\n=== RESULTADO ===");
                console.log("Área: " + areaCuadrado(l).toFixed(2));
                console.log("Perímetro: " + perimetroCuadrado(l).toFixed(2));
                rl.close();
            });
            break;
        case 3:
            rl.question("Ingrese la base del rectángulo: ", (baseStr) => {
                rl.question("Ingrese la altura del rectángulo: ", (alturaStr) => {
                    let b = parseFloat(baseStr);
                    let h = parseFloat(alturaStr);
                    console.log("\n=== RESULTADO ===");
                    console.log("Área: " + areaRectangulo(b, h).toFixed(2));
                    console.log("Perímetro: " + perimetroRectangulo(b, h).toFixed(2));
                    rl.close();
                });
            });
            break;
        case 4:
            rl.question("Ingrese la base del triángulo: ", (baseStr) => {
                rl.question("Ingrese la altura del triángulo: ", (alturaStr) => {
                    rl.question("Ingrese el lado 1 del triángulo: ", (l1Str) => {
                        rl.question("Ingrese el lado 2 del triángulo: ", (l2Str) => {
                            rl.question("Ingrese el lado 3 del triángulo: ", (l3Str) => {
                                let b = parseFloat(baseStr);
                                let h = parseFloat(alturaStr);
                                let l1 = parseFloat(l1Str);
                                let l2 = parseFloat(l2Str);
                                let l3 = parseFloat(l3Str);
                                console.log("\n=== RESULTADO ===");
                                console.log("Área: " + areaTriangulo(b, h).toFixed(2));
                                console.log("Perímetro: " + perimetroTriangulo(l1, l2, l3).toFixed(2));
                                rl.close();
                            });
                        });
                    });
                });
            });
            break;
        default:
            console.log("Opción no válida");
            rl.close();
            break;
    }
});