
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

const products = [
    {   id: "1",
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {   id: "2",
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {   id: "3",
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {   id: "4",
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {   id: "5",
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {     id: "6",
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {   id: "7",
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {   id: "8",
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];
var showProducts = productsList => {
    var containerDescription = document.getElementById("product-list-description");
   
    for (var product of productsList) {
        var contenedor = document.createElement("div");
        contenedor.setAttribute("class", "container");
        var description = document.createElement("h5");
        description.setAttribute("class", "descript")
        description.innerText = product.id + " - " + product.description + " - " + product.price + " €/und";
        contenedor.appendChild(description);
        var input = document.createElement("input");
        input.setAttribute("class", "input");
        input.setAttribute("id", product.id + "input");
        input.setAttribute("type", "number");
        input.setAttribute("min", "0");
        input.setAttribute("max", product.stock);
        contenedor.appendChild(input);
        containerDescription.appendChild(contenedor);
    };
}

showProducts(products);


function resultTotal () {
    var sub =  0;
    var iva = 0;
    var result = 0;
    for (var product of products) {
      var cantidades = document.getElementById(product.id + "input").value;
      var subTotal = product.price * cantidades;
      sub = sub + subTotal;
      var taxes = product.tax * subTotal/100;
      iva = iva + taxes;
      var total = subTotal + taxes;
      result = result + total;
    };
    document.getElementById("subTotal").innerText = sub + " €";
    document.getElementById("taxes").innerText = iva + " €";
    document.getElementById("total").innerText = result + " €";
}












