var person = {
    // const person = {
    name: "Niki",
    age: 30,
    hobbies: ['Sports', 'Tennis'],
    role: [2, 'author']
};
person.role.push('admin');
person.role[1] = "admin";
console.log(person);
var fovoriteActivities;
fovoriteActivities = ['Sport'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
