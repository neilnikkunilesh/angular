class Employee {
    [x: string]: string;
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
     }
     
     public get firstName(): string{
         return this._firstName;
     }
     public set firstName(value: string){
        this._firstName = value;
     }

     public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
}

// let's create an instance
let myEmployee = new Employee("Martin","Black");


console.log("Full Name: "+myEmployee.firstName+ " " +myEmployee.lastName);
// run this by using following command:
// tsc --target ES5 --noEmitOnError Employee.ts