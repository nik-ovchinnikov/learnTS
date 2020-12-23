const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
// const person = {
    name: "Niki",
    age: 30,
    hobbies: ['Sports', 'Tennis'],
    role: [2, 'author']
};

person.role.push('admin');
person.role[1] = "admin";
console.log(person);
let fovoriteActivities: any[];
fovoriteActivities = ['Sport'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}