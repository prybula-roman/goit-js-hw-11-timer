import CountdownTimer from "./timer-date.js";
const tm = {
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2019"),
};

console.log(CountdownTimer);
const tmd = new CountdownTimer(tm);

const body = document.querySelector("body");
console.log(body);
//console.log(tmd.tm.targetDate.toJSON);

//console.log(`tmd.numDays():${tmd.numDays()}`);
//console.log(`tmd.numHours():${tmd.numHours()}`);
//console.log(`tmd.numMins():${tmd.numMins()}`);
//console.log(`tmd.numSecs():${tmd.numSecs()}`);
