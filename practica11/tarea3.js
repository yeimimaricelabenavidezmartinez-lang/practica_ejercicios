// Tarea 3: Procesamiento de arreglo de objetos con forEach y filter
const productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 45 },
    { nombre: "Monitor", precio: 150 },
    { nombre: "Audífonos", precio: 80 }
];

console.log("--- Listado completo de productos ---");
productos.forEach(producto => {
    console.log(`Nombre: ${producto.nombre} | Precio: $${producto.precio}`);
});

const productosCaros = productos.filter(producto => producto.precio > 100);

console.log("--- Productos con precio mayor a $100 ---");
console.log(productosCaros);