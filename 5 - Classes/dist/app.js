"use strict";
class Department {
    constructor(id, n) {
        this.id = id;
        this.employees = []; //now there is no access to rhis field from outside
        //id не надо нигде объявлять
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name + this.id);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department(13, "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();
accounting.describe();
//# sourceMappingURL=app.js.map