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
    constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
    }

    addEmployee(name: string){
        if(name === "Max") {
            return;
        }
        this.employees.push(name);
    }
}

const accounting = new IDDepartment("13", ["Accounting"]);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printEmployeeInformation();

accounting.describe();