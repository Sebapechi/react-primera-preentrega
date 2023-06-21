const dbProductos = [
    {
        id: 1,
        name: "musculosa femenina",
        price: 900,
        color: "azul"
    },
    {
        id: 2,
        name: "remera flash",
        price: 900,
        color: "azul"
    },
    {
        id: 3,
        name: "musculosa flash",
        price: 900,
        color: "azul y amarillo"
    },
    {
        id: 4,
        name: "camperon flash",
        price: 2780,
        color: "gris"
    }, 
     {
        id: 5,
        name: "chomba flash",
        price: 1200,
        color: "azul"
    },
    {
        id: 6,
        name: "equipo de juego flash",
        price: 2980,
        color: "azul y blanco"
    },
]

const agregarCarro = document.querySelector(".addToCard");
let productosArr = [];
let trueOFalse = true;




class Producto {
    constructor(id, name, price, color) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.color = color
    }
    iva() {
        return this.price * 0.21;
    }

}



function pushProductos() {
    for (const element of dbProductos) {
        productosArr.push(new Producto(element.id, element.name, element.price, element.color))
    }
}
pushProductos()

function initProgram() {
    while (trueOFalse) {
        let selectSection = prompt("¿Qué quieres hacer? \n 1. ver prendas  \n 2.buscar prendas \n 3. agregar al carrito \n 4. salir");
        console.log(selectSection);
        switch (selectSection) {
            case "1":
                verPrendas()
                break;
            case "2":
                buscarPrendas()
                break
            case "3":
                agregarAlCarrito() 
                break;   

            case "4":
                trueOFalse = false;
                break
            default:
                alert("No ingresaste una opción valida")
                selectSection = prompt("¿Qué quieres hacer? \n 1. ver prendas  \n 2.buscar prendas \n 3. agregar al carrito \n 4. salir");
                break
        }
    }

}



initProgram()