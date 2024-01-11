/**
 * Observer
 * 
 * One to many
 * 
 * One Object on which we can trigger changes, and the object that are subscribed to that object changes, will be informated about the changes, and will do their functionality, which they need to do in case of recieving information about change.
 * 
 * Dispatching events
 */
class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubsribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    trigger(action) {
        this.observers.forEach(observer => {
            observer.update(action);
        });
    }
}

class Observer {
    constructor(state) {
        this.state = state;
        this.initialState = state;
    }

    update(action) {
        switch (action.type) {
            case 'increment':
                this.state = ++this.state
                break;

            case 'decrement':
                this.state = --this.state
                break;
        
            case 'add':
                this.state += action.payload
                break;
        
            default:
                this.state = this.initialState;
        }
    }
}

const stream = new Subject()
const obs1 = new Observer(1);
const obs2 = new Observer(42);

stream.subscribe(obs1)
stream.subscribe(obs2)

stream.trigger({ type: 'increment' });
stream.trigger({ type: 'increment' });
stream.trigger({ type: 'decrement' });
stream.trigger({ type: 'add', payload: 10 });

console.log(obs1.state);
console.log(obs2.state);