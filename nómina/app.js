const empleado = {bruto: 28000, hijos: 3, pagas: 14};
console.log("Sueldo bruto " + empleado.bruto + "€");


let retenciones; 

if (empleado.bruto < 12000) { retenciones = 0}
else if (empleado.bruto < 24000) {retenciones = 0.08}
else if (empleado.bruto < 34000) {retenciones = 0.16}
else {retenciones = 0.30};
if (retenciones > 0 && empleado.hijos > 0) { retenciones = retenciones - 0.02};

console.log("Retención " + retenciones * 100 + "%");

const totalRetenciones = empleado.bruto * retenciones;
console.log("Total retenciones " + totalRetenciones + "€");

const totalNeto = empleado.bruto - totalRetenciones;
console.log("Sueldo neto " + totalNeto + "€");

const mensualidad = totalNeto / empleado.pagas;

console.log("Mensualidad " + mensualidad + "€");







