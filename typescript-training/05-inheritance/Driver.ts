import { Rectangle } from './Rectangle';
import { Circle } from './Circle';
import { Shape } from './Shape';

let myShape = new Shape(10,20);
console.log(myShape.getInfo());

let myCircle = new Circle(10,20,4.5);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(45,67, 34,23);
console.log(myRectangle.getInfo());
