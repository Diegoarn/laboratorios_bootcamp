
var coins = [200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01]

function calculateChange() {
    change = [];
    var pay = parseFloat(document.getElementById("pago").value);
    var bill = parseFloat(document.getElementById("factura").value);
    var result = 0;
    if (pay < bill) {
        alert("Importe insuficiente")
    } else {
        result = pay - bill;
    }
    document.getElementById("cambios").innerText = result + " €";

    for (var i = 0; i < coins.length; i++) {
        if (result >= coins[i]) {
            change.push(" " + coins[i] + "€");
            result = result - coins[i];
            i = -1;
        }
    }
    document.getElementById("monedas").innerText = "En billetes/monedas de: " + change;
}

calculateChange(coins);