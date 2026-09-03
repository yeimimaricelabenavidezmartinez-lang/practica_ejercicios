//3.Conversión número a texto: Solicite un número de referencia de 8 dígitos.
//Conviértalo a texto y extraiga los primeros 4 dígitos.

let numero = 12345678;

let numerotexto = numero.toString()

console.log(`su variable es de tipo: ${typeof numerotexto}`);

console.log(`los primeros cuatro digitos son ${numerotexto.slice(0,4)}`);