// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}


interface Named {
    readonly name: string;
}

interface Greetable extends Named{
    
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;

    constructor(n: string, private age: number) {
        this.name = n;
        
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user1 = new Person("Max", 34);

