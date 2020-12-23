// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
enum Role { ADMIN = 5, READ_ONLY = "AUTHoR", AUTHOR = 1 };
const person = {
    name: "Niki",
    age: 30,
    hobbies: ['Sports', 'Tennis'],
    role: [2, 'author'],
    roleEnum: Role.ADMIN
};

person.role.push('admin');
person.role[1] = "admin";
// console.log(person);
let fovoriteActivities: any[];
fovoriteActivities = ['Sport'];

// console.log(person.name);

for (const hobby of person.hobbies) {
    // console.log(hobby.toUpperCase());
}

console.log(Role.READ_ONLY);

if (person.roleEnum === Role.ADMIN) {
    console.log("You are admin, sir!");
}