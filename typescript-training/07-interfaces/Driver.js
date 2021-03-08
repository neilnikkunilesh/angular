"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GolfCoach_1 = require("./GolfCoach");
var CricketCoach_1 = require("./CricketCoach");
var myCricketCoach = new CricketCoach_1.CricketCoach();
var myGolfCoach = new GolfCoach_1.GolfCoach();
//  declare and array of coaches type.... initially empty
var theCoach = [];
// add the coaches into array
theCoach.push(myCricketCoach);
theCoach.push(myGolfCoach);
for (var _i = 0, theCoach_1 = theCoach; _i < theCoach_1.length; _i++) {
    var tempCoach = theCoach_1[_i];
    console.log(tempCoach.getDailyWorkOut());
}
