interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

uder1 = {
    name: 'Max',
    age: 30,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}