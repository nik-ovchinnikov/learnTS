"use strict";
class Department {
    constructor(n) {
        this.employees = []; //now there is no access to rhis field from outside
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map