"use strict";
var Employee = /** @class */ (function () {
    function Employee(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Employee.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
// let's create an instance
var myEmployee = new Employee("Martin", "Black");
console.log("Full Name: " + myEmployee.firstName + " " + myEmployee.lastName);
