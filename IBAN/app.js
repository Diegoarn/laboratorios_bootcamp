const pattern = /^([A-Z]{2})(\d{2})(\s?\d{4}){5}$/

//caso 1//
console.log("- Caso 1");
const iban = 'ES6600190020961234567890';
console.log(iban, pattern.test(iban));

//caso 2//
console.log("- Caso 2");
const values = ['ES66 0019 0020 9612 3456 7890', 'ES6600190020961234567890']
values.forEach(value => {
  console.log(value, pattern.test(value));  
});

//caso 3//
console.log("- Caso 3");
const result = pattern.exec('ES6600190020961234567890')
console.log("Código del país: " + result[1] + " - " + "Dígito de control: " + result[2]);



