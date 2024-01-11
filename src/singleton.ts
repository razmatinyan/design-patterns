/**
 * Singleton
 */

interface SingletonInterface {
    name: string;
}

class Singleton implements SingletonInterface {
    private static instance: Singleton;
    public name: string;

    private constructor(name: string) {
        this.name = name;
    }

    public static getInstance(name: string): Singleton {
        if ( !Singleton.instance ) return new Singleton(name);

        return Singleton.instance;
    }
}

const user = Singleton.getInstance('Raz');