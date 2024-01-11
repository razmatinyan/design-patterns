/**
 * Template
 */
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {}

    work() {
        return `${this.name} is doing ${this.responsibilities()}`;
    }

    getPaid() {
        return `${this.name} has salary: ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return `programming`;
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return `testing`;
    }
}

const dev = new Developer('Razmik', 240000);
console.log(dev.work());

const tester = new Tester('Julianna', 150000);
console.log(tester.work());