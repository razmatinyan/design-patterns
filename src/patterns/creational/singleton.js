/**
 * Singleton
 */
// class Single {
//     name;

//     constructor(name) {
//         if ( Single.instance ) {
//             return Single.instance
//         }

//         Single.instance = this;
//         this.name = name;
//     }
// }

/* ES6 Elegant way  */
class Single {
    name;

    constructor(name) {
        if ( typeof Single.instance === 'object' ) {
            return Single.instance;
        }

        Single.instance = this;
        this.name = name;
    }
}

const user = new Single('Raz');
const user2 = new Single('Julianna');

console.log(user, user2);