var hoteles = {
    Florida: {    
        name: "Florida",
        location: "Madrid",
        imgHotel: "https://www.cataloniahotels.com/es/blog/wp-content/uploads/2016/05/habitaci%C3%B3n-doble-catalonia-620x412.jpg"},
    Londres: {
        name: "Londres",
        location: "Oviedo",
        imgHotel: "habitacion.jpg",
    }
   
};
var selectedHotel = prompt("Nombre del hotel: Florida o Londres");
document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[selectedHotel].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[selectedHotel].location;
document.getElementById("img-hotel").src = hoteles[selectedHotel].imgHotel ;

var puntuar = prompt("puntuación del 0 al 5");
document.getElementById("rating").innerHTML = puntuar + " estrellas";
var anonima = confirm("¿desea qué su reseña sea anónima?");
document.getElementById("anonymous").checked = anonima;

