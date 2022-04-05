const reservas = [
    {
        tipoHabitacion: "standard",
        desayuno: false,
        pax: 1,
        noches: 3
    },
    {
        tipoHabitacion: "standard",
        desayuno: false,
        pax: 1,
        noches: 4
    },
    {
        tipoHabitacion: "suite",
        desayuno: true,
        pax: 2,
        noches: 1
    }
];

class ReservasHotel {
    constructor() {
        this._reserva = [];
        this._subtotal = 0;
        this._total = 0;
    }
    calcularTotal() {
        this._total = this._subtotal + ((this._subtotal * 21) / 100);
    }

    calcularSubtotal() {
        this._subtotal = reservas.reduce((acumulado, { noches, tipoHabitacion, pax, desayuno }) =>
            acumulado + (noches * this.calcularTipoHabitacion(tipoHabitacion) + this.calcularOcupacion(pax)
                + (noches * this.calcularDesayuno(desayuno)))
            , 0);
    }

    calcularTipoHabitacion(tipoHabitacion) {
        if (tipoHabitacion === "standard") return 100;
        else return 150;
    }

    calcularOcupacion(pax) {
        if (pax == 1)
            return 0;
        else return (pax - 1) * 40;
    }
    calcularDesayuno(desayuno) {
        if (desayuno === true) return 15;
        else return 0;
    }
    set reserva(reservas) {
        this._reserva = reservas;
        this.calcularSubtotal();
        this.calcularTotal();
    }
    get subtotal() {
        return this._subtotal;
    }
    get total() {
        return this._total;
    }
}

class ReservasTourOperador extends ReservasHotel {
    calcularSubtotal() {
        this._subtotal = reservas.reduce((acumulado, { noches, pax, desayuno }) =>
            acumulado + (noches * 100 + this.calcularOcupacion(pax) + (noches * this.calcularDesayuno(desayuno))), 0)

    }
    calcularTotal() {
        this._total = this._subtotal + ((this._subtotal * 15) / 100);
    }
}

console.log('** Total de Reserva para cliente ***');
const reservahotel = new ReservasHotel();
reservahotel.reserva = reservas;
console.log('subtotal', reservahotel.subtotal);
console.log('total', reservahotel.total);

console.log('** Total de Reserva para Tour Operador ***');
const reservatouroperador = new ReservasTourOperador();
reservatouroperador.reserva = reservas;
console.log('subtotal', reservatouroperador.subtotal);
console.log('total', reservatouroperador.total);

