

function getInputNumber(inputId) {
    return document.getElementById(inputId).value;
}

var resultAdd = () => {
    var number1 = Number(getInputNumber("input-number1"));
    var number2 = Number(getInputNumber("input-number2"));
    getInputNumber("input-number1") === "" || getInputNumber("input-number2") === "" ?
    document.getElementById("result").innerText = "Es necesario introducir un número":
    document.getElementById("result").innerText = number1+number2;
}
var resultRest = () => {
    var number1 = Number(getInputNumber("input-number1"));
    var number2 = Number(getInputNumber("input-number2"));
    getInputNumber("input-number1") === "" || getInputNumber("input-number2") === "" ?
    document.getElementById("result").innerText = "Es necesario introducir un número":
    document.getElementById("result").innerText = number1-number2;
}
var resultMultiply = () => {
    var number1 = Number(getInputNumber("input-number1"));
    var number2 = Number(getInputNumber("input-number2"));
    getInputNumber("input-number1") === "" || getInputNumber("input-number2") === "" ?
    document.getElementById("result").innerText = "Es necesario introducir un número":
    document.getElementById("result").innerText = number1*number2;
}
var resultDivide = () => {
    var number1 = Number(getInputNumber("input-number1"));
    var number2 = Number(getInputNumber("input-number2"));
    getInputNumber("input-number1") === "" || getInputNumber("input-number2") === "" ?
    document.getElementById("result").innerText = "Es necesario introducir un número":
    document.getElementById("result").innerText = number1/number2;
}


document.getElementById("add").addEventListener("click", resultAdd);
document.getElementById("rest").addEventListener("click", resultRest);
document.getElementById("multiply").addEventListener("click", resultMultiply);
document.getElementById("divide").addEventListener("click" , resultDivide);











