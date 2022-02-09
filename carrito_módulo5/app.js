
const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];
// lista

function listarElementos(id) {
    for (i = 0; i < carrito.length; i++) {
        console.log("Nombre: " + carrito[i].name);
        console.log("ID: " + carrito[i].id);
        console.log("Price: " + carrito[i].price);
        console.log("Count: " + carrito[i].count);
        console.log("Premium: " + carrito[i].premium);
        console.log("--------------");
    }
}

// eliminar elemento

    function eliminarElemento(id) {
        var elementoEliminado;
        for (i = 0; i < carrito.length; i++) {
            if (carrito[i].id == id) {
                elementoEliminado = i
            }
        }
        carrito.slice(elementoEliminado, 1);
    }

    // calcular total

    function sumaTotal() {
        var total = 0;
        var totalConDto = 0;
        for (i = 0; i < carrito.length; i++) {
            total = total + (carrito[i].price * carrito[i].count);
        };
        if (total > 100) {
            totalConDto = total - (total * 0.05);
        }
        console.log("Total " + total);
        console.log("Total con descuento: " + totalConDto);
    }

    // premium
    
    function listadoPremium() {
        var listaPremium = [];
        var isPremium = true;
        for (i = 0; i < carrito.length; i++) {
            if (carrito[i].premium == true) {
                listaPremium.push(carrito[i]);
            } else {
                isPremium = false;
            }
        } console.log(listaPremium);
        if (isPremium == true) {
            alert("El pedido no tiene gastos de envío");
        } else {
            alert("El pedido tiene gastos de envio");
        }

    }






    listarElementos()
    eliminarElemento(54657)
    sumaTotal()
    listadoPremium()





