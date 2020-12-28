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
class IDDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("no last report was found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("please enter valid value");
        }
        this.addReport(value);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
}
const accounting = new IDDepartment("13", ["Accounting"]);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();
accounting.describe();
//# sourceMappingURL=app.js.map