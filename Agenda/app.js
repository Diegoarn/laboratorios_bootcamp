var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

var myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

var randomHours = (a, b) => (Math.round(Math.random()) ? a : b);

function scheduleTeam(arr) {
    for (var i in arr) {
        console.log("Disponibilidad de: " + arr[i].name);
        for (var x in arr[i].availability) {
            arr[i].availability[x] = [WORK_HOURS[x], randomHours("sí","no")];
            console.log(arr[i].availability[x][0] + ": " + arr[i].availability[x][1]);
        }
    }
    searchHours();
}

function searchHours() {
    var check = true;
    for (x = 0; x < WORK_HOURS.length; x++) {
        var control = true;
        for (var i = 0; i < myTeam.length; i++) {
            if (myTeam[i].availability[x][1] === "no") {
                control = false;
            }
        }
        if (control == true) {
            console.log("Primera hora disponible: " + WORK_HOURS[x]);
            check = false;
            return check;
        }
    }
    if (check == true) {
        console.log("No exiten horas disponibles");
    }
}

scheduleTeam(myTeam);