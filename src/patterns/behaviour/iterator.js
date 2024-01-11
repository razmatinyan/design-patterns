/**
 * Iterator
 */

/* 1 */
// class MyIterator {
//     constructor(data) {
//         this.index = 0;
//         this.data = data;
//     }

//     [Symbol.iterator]() {
//         return {
//             next: () => {
//                 if ( this.index < this.data.length ) {
//                     return {
//                         value: this.data[this.index++],
//                         done: false,
//                     }
//                 } else {
//                     this.index = 0;
//                     return {
//                         value: void 0,
//                         done: true
//                     }
//                 }
//             }
//         }
//     }
// }

// const iterator = new MyIterator(['Raz', 'Julianna', 'Heheheh']);
// for (const value of iterator) {
//     console.log(value);
// }

/* 2 */
class Iterator {
    constructor(el) {
        this.index = 0;
        this.elements = el;
    }

    next() {
        return this.elements[this.index++];
    }

    hasNext() {
        return this.index < this.elements.length
    }
}

const collection = new Iterator(['Raz', 'Julianna', 'Heheheh']);
while(collection.hasNext()) {
    console.log(collection.next());
}