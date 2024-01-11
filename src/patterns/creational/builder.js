class Car {
    constructor() {
        this.autopilot = false;
        this.parktronic = false;
        this.signaling = false;
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    addAutoPilot(value) {
        this.car.autopilot = value;
        return this;
    }

    addParktronic(value) {
        this.car.parktronic = value;
        return this;
    }

    addSignaling(value) {
        this.car.signaling = value;
        return this;
    }

    updateEngine(value) {
        this.car.engine = value;
        return this;
    }

    build() {
        return this.car;
    }
}

const car = new CarBuilder()
                .addAutoPilot(true)
                .addParktronic(true)
                .updateEngine('V8')
                .build();
console.log(car);