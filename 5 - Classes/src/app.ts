class Department {
    public name: string;
    private employees: string[] = [];//now there is no access to rhis field from outside

    constructor(n: string) {
       this.name = n; 
    }

    describe(this: Department ) {
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string) {
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