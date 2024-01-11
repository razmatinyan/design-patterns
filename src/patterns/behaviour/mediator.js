/**
 * Mediator
 * 
 * Increases interaction between classes,
 * and set all needed connections inside him (middleware)
 * 
 * Build connection between different objects/classes and interact with them.
 * Abstraction - to let group of object interact by each other
 */

// Example 1

class Dealer {
    constructor() {
        this.customers = [];
    }

    orderAuto(customer, auto, info) {
        const name = customer.getName();
        this.addToCustomersList(name);
    }

    addToCustomersList(name) {
        this.customers.push(name);
    }

    getCustomerList() {
        return this.customers;
    }
}

class Customer {
    constructor(name, dealerMediator) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }

    getName() {
        return this.name;
    }

    makeOrder(auto, info) {
        this.dealerMediator.orderAuto(this, auto, info);
    }
}

const mediator = new Dealer();

const razo = new Customer('Razo', mediator);
const julianna = new Customer('Julianna', mediator);

razo.makeOrder('Mercedes', 'Taporov');
julianna.makeOrder('Bmw', 'Eshov');

console.log(mediator.getCustomerList());

// Example 2

class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to);
    }

    recieve(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {};
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from, to) {
        if ( to ) {
            to.recieve(message, from);
        } else {
            Object.keys(this.users).forEach(key => {
                if ( this.users[key] !== from ) {
                    this.users[key].recieve(message, from);
                }
            })
        }
    }
}

const u1 = new User('Razo');
const u2 = new User('Julianna');
const u3 = new User('Nver');

const chatRoom = new ChatRoom();
chatRoom.register(u1);
chatRoom.register(u2);
chatRoom.register(u3);

u1.send('Hello!', u2);
u2.send('Hello kyanqs!', u1);
u3.send('Hello babyner', u1);