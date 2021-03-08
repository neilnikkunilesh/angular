import { Coach } from './Coach';
import { GolfCoach } from './GolfCoach';
import { CricketCoach } from './CricketCoach';


let myCricketCoach = new CricketCoach();

let myGolfCoach = new GolfCoach();

//  declare and array of coaches type.... initially empty
let theCoach: Coach[] = [];

// add the coaches into array
theCoach.push(myCricketCoach);
theCoach.push(myGolfCoach);

for(let tempCoach of theCoach){
    console.log(tempCoach.getDailyWorkOut());
}