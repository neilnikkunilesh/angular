let found: boolean = true;
let grade: number = 88.78;
let firstName: string = "Anup";
let lastName: string = 'Singh';

console.log(found);
console.log("The grade is: " + grade);
console.log("Hi! " + firstName + " " + lastName);

// Use backticks: ` Reference variable with ${...}
// Template String Use Backticks
console.log(`Hi, ${firstName} ${lastName}`);

// even ts file has error, By default, tsc will STILL generate a .js file.
/* found=10;
grade='A'
firstName=true; */
// Prevent this with a compiler flag
// E:> tsc -noEmitOnError sample-type.ts

