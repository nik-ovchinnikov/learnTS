// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
    name: "Niki",
    age: 30,
    hobbies: ['Sports', 'Tennis']
};

let fovoriteActivities: any[];
fovoriteActivities = ['Sport'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}