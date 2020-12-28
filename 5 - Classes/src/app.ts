class Department {

    public readonly name: string;
    private employees: string[] = [];//now there is no access to rhis field from outside

    constructor(private id: number, n: string) {
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

const accounting = new Department(13, "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printEmployeeInformation();

accounting.describe();