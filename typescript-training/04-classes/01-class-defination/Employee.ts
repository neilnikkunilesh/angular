class Employee {
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
     }
}

// let's create an instance
let myEmployee = new Employee("Martin","Black");


console.log("Full Name: "+myEmployee.firstName+ " " +myEmployee.lastName);