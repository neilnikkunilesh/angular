"use strict";
var Employee = /** @class */ (function () {
    function Employee(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
// run this by using following command:
// tsc --target ES5 --noEmitOnError Employee.ts
