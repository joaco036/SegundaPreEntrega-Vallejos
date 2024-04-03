const productos = []

let nombre
let precio

do {
    nombre = prompt("Por favor, ingresa el nombre del producto. al finalizar coloque 'salir'")
    if (nombre.toUpperCase() !== "SALIR") {
        precio = prompt("Por favor, ingresa el precio del producto")
        if (nombre !== null && nombre !== "" && precio !== null && !isNaN(parseFloat(precio))) {
            productos.push({ nombre: nombre, precio: parseFloat(precio) })
        } else {
            console.log("Por favor, ingresa datos válidos para el producto.")
        }
    }
} while (nombre.toUpperCase() !== "SALIR")

console.log(productos)


for (let i = 0; i < productos.length; i++) {
    productos[i].precio *= 1.20}
    


alert ("se un 20% de interes por prodcuto")
