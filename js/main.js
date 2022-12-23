let pedido;
let nombre;

function ingresarNombre() {
    alert("Bienvenido a la pagina de Kie Brand");
    nombre = prompt("Ingrese su nombre");
    while (nombre === "" || nombre === null) {
        nombre = prompt("Porfavor, ingrese su nombre");
    }
}

//Constructor de objetos
class Producto {
    constructor (id, nombre, precio){
        this.id = id
        this.nombre = nombre.toUpperCase()
        this.precio = precio
    }
}

//Array de productos
const productos = []

function agregarProducto(){
    productos.push(new Producto(1, "Hoodie MTV", 11000))
    productos.push(new Producto(2, "Hoodie Racing", 10500))
    productos.push(new Producto(3, "Jogger Lagon", 8500))
    productos.push(new Producto(4, "Jogger Hurry Up", 7500))
    productos.push(new Producto(5, "Remera Frosty", 5000))
    productos.push(new Producto(6, "Remera Ryat", 4000))
}

//Funcion Push -> Productos al Array 
agregarProducto()

//Funcion Bienvenida
ingresarNombre()

pedido = prompt("¿Que prenda vas a elegir "+ nombre +"? \nHoodie MTV \nHoodie Racing \nJogger Lagon \nJogger Hurry Up \nRemera Frosty \nRemera Ryat").toUpperCase()

let buscar = productos.filter(el => el.nombre.includes(pedido))

alert("Elegiste "+ pedido +" el precio a pagar es de $"+ buscar[0].precio + "!")

function cobrar(){
    let abonar = parseInt(prompt("¿Con cuanto desea abonar?"))
    if (abonar < buscar[0].precio){
        alert("No tenes dinero suficiente para pagar")
    }else{
        parseInt(alert("Tu vuelto es de $" + (abonar - buscar[0].precio)))
        alert("Gracias por tu compra " + nombre + ", que lo disfrutes!")
    }
}

cobrar()