//Tarea 2: Información de producto con precio
//Solicite el nombre del producto, precio unitario y cantidad. 
//Muestre el nombre en mayúsculas, extraiga las primeras 3 letras del producto y muestre el precio total con 2 decimales

let producto = 'Teclado Mecánico';
let precioUnitario = 45.50;
let cantidad = 2;

let productoMayus = producto.toUpperCase();
let primeras3Letras = producto.slice(0, 3);
let precioTotal = (precioUnitario * cantidad).toFixed(2);

console.log(`El producto en mayúsculas es: ${productoMayus}`);
console.log(`Las primeras 3 letras del producto son: ${primeras3Letras}`);
console.log(`El precio total es: $${precioTotal}`);