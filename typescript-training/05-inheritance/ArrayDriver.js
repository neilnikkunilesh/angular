"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = require("./Rectangle");
var Circle_1 = require("./Circle");
var Shape_1 = require("./Shape");
var myShape = new Shape_1.Shape(10, 20);
var myCircle = new Circle_1.Circle(10, 20, 4.5);
var myRectangle = new Rectangle_1.Rectangle(45, 67, 34, 23);
//  declare an array of shapes..... initially empty
var shapeArray = [];
// add the shapes to the array;
shapeArray.push(myShape);
shapeArray.push(myCircle);
shapeArray.push(myRectangle);
// print the all data
for (var _i = 0, shapeArray_1 = shapeArray; _i < shapeArray_1.length; _i++) {
    var tempShape = shapeArray_1[_i];
    console.log(tempShape.getInfo());
}
