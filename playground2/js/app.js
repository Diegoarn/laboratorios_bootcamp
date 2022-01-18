var hotel = {
    name: "",
    location: "",
};
hotel.name = prompt("introduce el nombre del hotel");
// var concatNameHotel = "Hotel " + nameHotel;
document.getElementById("hotel-name") .innerHTML = "Hotel " + hotel.name;
hotel.location = prompt("introduce la dirección");
document.getElementById("hotel-location").innerHTML = hotel.location;

