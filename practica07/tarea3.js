// Tarea 3: Gestión e inventario de productos
let inventario = [
    { nombre: "Laptop", precio: 800, cantidad: 5 },
    { nombre: "Mouse", precio: 20, cantidad: 15 },
    { nombre: "Teclado", precio: 45, cantidad: 10 },
    { nombre: "Monitor", precio: 200, cantidad: 8 }
];

let totalProductos = 0;
let valorTotalInventario = 0;

console.log("=== DETALLE DE PRODUCTOS (FOR...OF) ===");

for (let producto of inventario) {
    let valorTotalProducto = producto.precio * producto.cantidad;
    
    totalProductos += producto.cantidad;
    valorTotalInventario += valorTotalProducto;

    console.log(
        "Producto: " + producto.nombre + 
        " | Precio: $" + producto.precio + 
        " | Cantidad: " + producto.cantidad + 
        " | Valor Total: $" + valorTotalProducto
    );
}

let resumenInventario = {
    totalProductos: totalProductos,
    valorTotalInventario: "$" + valorTotalInventario
};

console.log("\n=== RESUMEN DEL INVENTARIO (FOR...IN) ===");

for (let propiedad in resumenInventario) {
    console.log(propiedad + ": " + resumenInventario[propiedad]);
}