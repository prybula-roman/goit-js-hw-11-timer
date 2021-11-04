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
    }
  }
  start() {
    setInterval(() => {
      this.currentTime = Date.now();
      this.deltaTime = this.endTime.getTime() - this.currentTime;
      this.timeComponents = this.getTimeComponents(this.deltaTime);
      // console.log(`*********`, this.timeComponents);
    }, 1000);
  }

  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
  }
}

const timer = new Timer("2021-11-05 15:25:00");

const timeComponents = () => {
  setInterval(() => {
    console.log(`TimeComponents::   ${timer.timeComponents.days}`);
    console.log(`                   ${timer.timeComponents.hours}`);
    console.log(`                   ${timer.timeComponents.mins}`);
    console.log(`                   ${timer.timeComponents.secs}`);
  }, 1000);
};

//timeComponents();
//timer.start();
//timer.getDeltaTime();
