import template from "../template/template.hbs";

const listTime = document.querySelector(".timer");
class Timer {
  endTime;
  currentTime;
  constructor(stopTime) {
    this.endTime = new Date(stopTime);
    this.currentTime = Date.now();
    if (this.endTime.getTime() > this.currentTime) {
      this.start();
    } else {
      alert("ERROR!!!");
    }
  }
  start() {
    const time = document.querySelector(".timer");
    //  console.log("%%%%%%%%%%%%", time);
    if (time != null) {
      time.insertAdjacentHTML("beforeend", template(this.timeComponents));
      const numDays = time.querySelector('span[data-value="days"]');
      const numHours = time.querySelector('span[data-value="hours"]');
      const numMins = time.querySelector('span[data-value="mins"]');
      const numSecs = time.querySelector('span[data-value="secs"]');
      console.dir(numDays);
      setInterval(() => {
        this.currentTime = Date.now();
        this.deltaTime = this.endTime.getTime() - this.currentTime;
        this.timeComponents = this.getTimeComponents(this.deltaTime);
        numDays.textContent = this.timeComponents.days;
        numHours.textContent = this.timeComponents.hours;
        numMins.textContent = this.timeComponents.mins;
        numSecs.textContent = this.timeComponents.secs;
      }, 1000);
    }
  }
  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
  }
}

//========================================================
const timer = new Timer("2021-11-10 15:25:00");
const body = document.querySelector("body");
const timeComponents = () => {
  setInterval(() => {
    // console.log(timer.timeComponents);
    //const jsonTimeComps = JSON.stringify(timer.timeComponents);
    // console.log(jsonTimeComps);
    //    console.log(`TimeComponents::   ${timer.timeComponents.days}`);
    //    console.log(`                   ${timer.timeComponents.hours}`);
    //    console.log(`                   ${timer.timeComponents.mins}`);
    //   console.log(`                   ${timer.timeComponents.secs}`);
  }, 1000);
};
//=========================================================

//console.log(template);
