/**
 * Flyweight
 */
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    create(model, price) {
        const candidate = this.getCar(model);
        if ( candidate ) return candidate;

        const newCar = new Car(model, price);
        this.cars.push(newCar);
        return newCar;
    }

    getCar(model) {
        return this.cars.find(car => car.model === model);
    }
}

const factory = new CarFactory();
const bmw = factory.create('bmw', 18000);
const tesla = factory.create('tesla', 32000);
const bmw2 = factory.create('bmw', 5000);

console.log(bmw, tesla, bmw2);