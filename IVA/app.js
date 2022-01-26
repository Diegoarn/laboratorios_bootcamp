const product = {count: 5, price: 13.95, type: "libro"};


if (product.count > 0) {total = product.count * product.price} 
    else { total = 0};
console.log("Total sin iva " + total + "€")

let tipoiva ;

switch (product.type) {
    case "alimento": tipoiva = 0.10; break; 
    case "libro": tipoiva = 0.04; break;
    default: tipoiva = 0.21;
};
console.log("Tipo de IVA " + tipoiva * 100 + "%");
const totaliva = (total * tipoiva);
console.log("IVA " + totaliva + "€");


const totalfactura = (total + totaliva);
console.log("Total con IVA " + totalfactura + "€");



