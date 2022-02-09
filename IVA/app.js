const product = {count: 5, price: 13.95, type: "alimento"};


if (product.count > 0) {total = product.count * product.price} 
    else { total = 0};
console.log("Total sin iva " + total + "€")
let valor1 = document.getElementById("caja1").innerText ;
console.log(valor1);
document.getElementById("caja1").textContent = "Total sin iva " + total + "€";
let tipoIva ;

switch (product.type) {
    case "alimento": tipoIva = 0.10;

     break; 
    case "libro": tipoIva = 0.04; break;
    default: tipoIva = 0.21;
};
console.log("Tipo de IVA " + tipoIva * 100 + "%");
const totaliva = (total * tipoIva);
console.log("IVA " + totaliva + "€");


const totalfactura = (total + totaliva);
console.log("Total con IVA " + totalfactura + "€");



