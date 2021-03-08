var Employee = /** @class */ (function () {
    function Employee(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Employee;
}());
// let's create an instance
var myEmployee = new Employee("Martin", "Black");
console.log("Full Name: " + myEmployee.firstName + " " + myEmployee.lastName);
