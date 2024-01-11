// class Person {
// 	private _firstName: string;
// 	private _lastName: string;
// 	private _age: number;

// 	constructor(firstName: string, lastName: string, age: number) {
// 		this._firstName = firstName;
// 		this._lastName = lastName;
// 		this._age = age;
// 	}

// 	public greeting() {
// 		console.log(`Hello, I am ${this._firstName}.`);
// 	}

// 	public get fullName(): string {
// 		return `${this._firstName} ${this._lastName}`;
// 	}

// 	get firstName(): string {
// 		return this._firstName;
// 	}

// 	set firstName(value: string) {
// 		this._firstName = value;
// 	}

// 	get lastName(): string {
// 		return this._lastName;
// 	}

// 	set lastName(value: string) {
// 		this._lastName = value;
// 	}

// 	get age(): number {
// 		return this._age;
// 	}

// 	set age(value: number) {
// 		if (value <= 0) {
// 			this._age = 0;
// 		} else {
// 			this._age = value;
// 		}
// 	}
// }

// class Employee extends Person {
// 	private _inn: number;
// 	private _number: number;
// 	private _snils: number;

// 	constructor(
// 		firstName: string,
// 		lastName: string,
// 		age: number,
// 		inn: number,
// 		number: number,
// 		snils: number
// 	) {
// 		super(firstName, lastName, age);
// 		this._inn = inn;
// 		this._number = number;
// 		this._snils = snils;
// 	}

// 	public greeting(): void {
// 		console.log(`Hello, I am Employee ${this.firstName}`);
// 	}
// }

// class Developer extends Employee {
// 	private level: string;
// 	private language: string;

// 	constructor(
// 		firstName: string,
// 		lastName: string,
// 		age: number,
// 		inn: number,
// 		number: number,
// 		snils: number,
// 		level: string,
// 		language: string
// 	) {
// 		super(firstName, lastName, age, inn, number, snils);
// 		this.level = level;
// 		this.language = language;
// 	}

// 	public greeting(): void {
// 		console.log(`Hello, I am Developer ${this.firstName}`);
// 	}
// }

// const employee = new Employee('Julianna', 'Gharibyan', 20, 15, 15, 15);
// const developer = new Developer('Razmik', 'Matinyan', 20, 15, 15, 15, 'Middle', 'JavaScript');
// const person = new Person('Nver', 'Khachatryan', 21);

// // employee.greeting();
// // developer.greeting();
// // person.greeting();

// const personList: Person[] = [employee, developer, person];

// function massGreeting(persons: Person[]) {
// 	for (let i = 0; i < persons.length; i++) {
// 		const person = persons[i];
// 		person.greeting();
// 	}
// }
// massGreeting(personList);

class Engine {
	public drive() {
		console.log('The Engine is running!');
	}
}

class Wheel {
	public drive() {
		console.log('The Wheel is running!');
	}
}

class Freshener {}

class Car {
	engine: Engine;
	wheels: Wheel[];
	freshener: Freshener;

	constructor(freshener: Freshener) {
		// Aggregation
		this.freshener = freshener;

		// Composition
		this.engine = new Engine();
		this.wheels = [];
		this.wheels.push(new Wheel());
		this.wheels.push(new Wheel());
		this.wheels.push(new Wheel());
		this.wheels.push(new Wheel());
	}

	drive(): void {
		this.engine.drive();
		for (let i = 0; i < this.wheels.length; i++) {
			this.wheels[i].drive();
		}
	}
}

const car = new Car(Freshener);
car.drive();

class User {
	public username: string;
	public age: number;

	constructor(username: string, age: number) {
		this.username = username;
		this.age = age;
	}
}

interface Repository<T> {
	create: (obj: T) => T;
	get: () => T;
	delete: (obj: T) => T;
	update: (obj: T) => T;
}

class UserRepo implements Repository<User> {
	create(user: User): User {
		return {
			username: 'Aaaa',
			age: 18,
		};
	}

	get(): User {
		return {
			username: 'Aaaa',
			age: 18,
		}
	}

	delete(obj: User): User {
		return {
			username: 'Aaaa',
			age: 18,
		};
	}

	update(obj: User): User {
		return {
			username: 'Aaaa',
			age: 18,
		};
	}
}
