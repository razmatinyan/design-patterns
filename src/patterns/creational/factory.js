/**
 * Factory
 */

class Developer {
    name;
    position = 'Developer';

    constructor(name) {
        this.name = name;
    }
}

class Director {
    name;
    position = 'Director';

    constructor(name) {
        this.name = name;
    }
}

class WorkerFactory {
    static positions = {
        developer: Developer,
        director: Director
    }

    create(name, position) {
        const Worker = WorkerFactory.positions[position];
        const worker = new Worker(name);
        return worker;
    }
}

const factory = new WorkerFactory();

console.log(factory.create('Razo', 'developer'), factory.create('Julianna', 'director'));