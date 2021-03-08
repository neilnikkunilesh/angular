import { Employee } from './Employee';


// let's create an instance
let myEmployee = new Employee("Martin","Black");


console.log("Full Name: "+myEmployee.firstName+ " " +myEmployee.lastName);
// run this by using following command:
// tsc --target ES5 --noEmitOnError Employee.ts