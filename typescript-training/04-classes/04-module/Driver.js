"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
// let's create an instance
var myEmployee = new Employee_1.Employee("Martin", "Black");
console.log("Full Name: " + myEmployee.firstName + " " + myEmployee.lastName);
// run this by using following command:
// tsc --target ES5 --noEmitOnError Employee.ts
