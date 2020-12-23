// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Niki",
    age: 30,
    hobbies: ['Sports', 'Tennis'],
    role: [2, 'author'],
    roleEnum: Role.ADMIN
};
person.role.push('admin');
person.role[1] = "admin";
// console.log(person);
var fovoriteActivities;
fovoriteActivities = ['Sport'];
// console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    // console.log(hobby.toUpperCase());
}
console.log(Role.READ_ONLY);
if (person.roleEnum === Role.ADMIN) {
    console.log("You are admin, sir!");
}
