//import template from "../template/template.hbs";
export default class {
  constructor(tm) {
    this.tm = tm;
    this.time = new Date() - tm.targetDate;
    //console.log(`constructor()::time=${this.time}`);
    //console.log("constructor:", tm.targetDate.toJSON());
    const timer_1 = document.querySelector(this.tm.selector);
    console.log("timer_1:", timer_1);
  }
  numDays() {
    const days = Math.floor(this.time / (1000 * 60 * 60 * 24));
    console.log(`constructor()::days=${days}`);
    return days;
  }
  numHours() {
    const hours = Math.floor(
      (this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    console.log(`constructor()::hours=${hours}`);
    return hours;
  }
  numMins() {
    const mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
    console.log(`constructor()::mins=${mins}`);
    return mins;
  }
  numSecs() {
    const secs = Math.floor((this.time % (1000 * 60)) / 1000);
    console.log(`constructor()::secs=${secs}`);
    return secs;
  }
  getDate() {
    const promise = new Promise();
    setInterval((date) => {
      console.log(date);
    }, 1000);
  }
}
