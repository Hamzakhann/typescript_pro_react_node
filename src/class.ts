// Code goes here!

class Department {

    static size: string = "12 feet"
    name: string
    protected employees: string[] = [];
    constructor(private readonly id: string, n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log("Depaartment: ", this.name, this.id)
    }
    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    printEmployeeInfo() {
        console.log(this.employees.length)
        console.log(this.employees)
    }

    static getSize() { //static method and property below
        console.log(Department.size)
    }
}

class ITDepartment extends Department {
    admins: string[]
    private reports: string = "vallll"
    constructor(id: string, admins: string[]) {
        super(id, "IT")
        this.admins = admins;
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return
        }
        this.employees.push(name)
    }

    get getReports() { //this is getter function
        return this.reports
    }

    set setReport(report: string) {
        this.reports = report
    }

}
const acc = new Department("d1", "Accounting")
const it = new ITDepartment("d3", ["Hamza"])
it.addEmployee("So")
it.printEmployeeInfo()
// acc.addEmployee("Mohsin")
// acc.addEmployee("usama")
acc.describe()
acc.printEmployeeInfo()

// console.log("chal", acc.employees)
// let accCopy = { dep: acc.describe } look at this to understand this kw
// accCopy.dep()