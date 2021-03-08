import { Rectangle } from './Rectangle';
import { Circle } from './Circle';
import { Shape } from './Shape';

let myCircle = new Circle(10,20,4.5);
let myRectangle = new Rectangle(45,67, 34,23);

//  declare an array of shapes..... initially empty
let shapeArray: Shape[] = [];

// add the shapes to the array;
shapeArray.push(myCircle);
shapeArray.push(myRectangle);

// print the all data
for(let tempShape of shapeArray){
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}
