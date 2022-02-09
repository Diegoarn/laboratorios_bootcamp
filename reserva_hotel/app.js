

function calcularTotal() {
    var total = 0;
    var roomType = document.getElementById("type");
    var price = roomType.options[roomType.selectedIndex].value;

    if (price != 0) {
        total = parseInt(price);
        var spa = document.getElementById("spa")
   
        if (spa.checked == true) {
            total = total + 20;
        }
      
        var persons = document.getElementById("personas");
        var roomOccupancy = persons.options[persons.selectedIndex].value;
        if (roomOccupancy != "0") {
            total = calcularOcupacion(total, roomOccupancy);
        }
   
        var nights = document.getElementById("cantidad");
        if (nights.value != "" && nights.value != "0") {
            total = total * parseInt(nights.value);
        }
   
        var parking = document.getElementById("parking");
        if (parking.value != "" && parking.value != "0") {
            total = total + (parseInt(parking.value) * 10);

        }
    } else {
        total = 0;
        alert("Debe seleccionar un tipo habitación")
    }
    document.getElementById("Total").innerText = (total + " €");

}

function calcularOcupacion(total, roomOccupancy) {
    var calculo;
    switch (roomOccupancy) {
        case "sencilla": calculo = total - (total * 0.25);
            break;
        case "triple": calculo = total + (total * 0.25);
            break;
        case "doble": calculo = total;
            break;
    }
    return calculo;
}






