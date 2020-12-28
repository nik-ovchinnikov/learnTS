class Department {

    public readonly name: string;
    protected employees: string[] = [];//now there is no access to rhis field from outside

    constructor(private id: string, n: string) {
        //id не надо нигде объявлять
       this.name = n; 
    }

    describe(this: Department ) {
        console.log('Department: ' + this.name + this.id);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


class IDDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport () {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error("no last report was found");
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error("please enter valid value");
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
        this.lastReport = reports[0];
    }

    addEmployee(name: string){
        if(name === "Max") {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }
}

const accounting = new IDDepartment("13", ["Accounting"]);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printEmployeeInformation();

accounting.describe();