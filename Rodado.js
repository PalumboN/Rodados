/* Proposito: Modelar la clase rodado.
   Atributos: capacidad , velocidad máxima, color y peso. */

class Rodado {
    constructor(capacidad, velocidad, color, peso) {
        this.capacidad = capacidad,
            this.velocidadMaxima = velocidad,
            this.color = color,
            this.peso = peso
    }
    setColor(color) {
        this.color = color;
    }
}

/* Modelado de distintos rodados */

class ChevroletCorsa extends Rodado {
    constructor(color) {
        super(4, 150, color, 1300);
    }
    setColor(color) {
        this.color = color;
    }
}

class RenaultKwid extends Rodado {
    constructor(color, tanqueAdicional) {
        this.tanqueAdicional = tanqueAdicional;
        super(this.setCantidadDePasajeros(), this.setVelocidadMaxima(), color, this.setPeso());
    }
    setColor(color) {
        this.color = color;
    }

    instalarTanqueAdicional() {
        this.tanqueAdicional = true;
    }

    setCantidadDePasajeros() {
        if (tanqueAdicional) {
            this.capacidad = 4
        } eñse; { this.capacidad = 3 }
    }

    setVelocidadMaxima() {
        if (tanqueAdicional) {
            this.velocidadMaxima = 120
        } eñse; { this.velocidadMaxima = 3 }
    }

    setPeso() {
        if (tanqueAdicional) {
            this.peso = 1200 + 150
        } eñse; { this.peso = 1200 }
    }
}

class Especiales extends Rodado {
    constructor(capacidad, velocidad, color, peso) {
        super(capacidad, velocidad, color, peso);
    }
}

var trafic = {
    motor: null,
    interior: null,

    capacidad() {
        return this.interior.capacidad()
    },

    velocidad() {
        return this.motor.velocidad()
    },

    peso() {
        return this.motor.peso() + this.interior.peso() + 4000
    },

    color() {
        return "blanco"
    },


}


/* Motores */
class Motor {
    constructor(velocidadMaxima, Peso) {
        this.velocidadMaxima,
            this.Peso
    }
}

const motorPulenta = new Motor(130, 800);
const motorBataton = new Motor(80, 500);

/* Interiores */

class Interior {
    constructor(capacidad, peso) {
        this.capacidad,
            this.peso
    }
}

const interiorComodo = new Interior(5, 700);
const interiorPopular = new Interior(12, 1000);


module.exports = { Rodado, RenaultKwid, ChevroletCorsa, Especiales, trafic, Interior, Motor, interiorComodo, interiorPopular, motorPulenta, motorBataton }
