function resultTotal () {
    var total = 0;
    var typeRoom = document.getElementById("type").value;
    var priceRoom = parseInt(typeRoom);
    if (priceRoom != "0") {
        total = priceRoom;
        var spa = document.getElementById("spa")
        if (spa.checked == true) {
            total = total + 20;
        }
        var occupancy = document.getElementById("personas").value;
        if ( occupancy != "0") {
            total = resultOccupancy(total, occupancy);
        } 
        var nights = document.getElementById("cantidad").value;
        if ( nights != "" && nights > "0") {
        total = total * parseInt(nights);
        }
       var parking = document.getElementById("parking").value;
       if ( parking !="" && parking > 0) {
           total = total + (parseInt(parking) * 10);
       }
     } 
     else {
        total = 0;
        alert ( "Dede seleccionar un tipo de habitación");
    }
    document.getElementById("Total").innerText = total;
}


function resultOccupancy(total, occupancy) {
    var calculo;
    switch (occupancy) {
        case "sencilla": calculo = total - (total * 0.25);
            break;
        case "triple": calculo = total + (total * 0.25);
            break;
        case "doble": calculo = total;
            break;
    }
    return calculo;
}




