"use strict";
class Department {
    constructor(id, n) {
        this.id = id;
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Depaartment: ", this.name, this.id);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static getSize() {
        console.log(Department.size);
    }
}
Department.size = "12 feet";
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.reports = "vallll";
        this.admins = admins;
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    get getReports() {
        return this.reports;
    }
    set setReport(report) {
        this.reports = report;
    }
}
const acc = new Department("d1", "Accounting");
const it = new ITDepartment("d3", ["Hamza"]);
it.addEmployee("So");
it.printEmployeeInfo();
acc.describe();
acc.printEmployeeInfo();
//# sourceMappingURL=app.js.map