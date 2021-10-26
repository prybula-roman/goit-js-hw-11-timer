//import template from "../template/template.hbs";
const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;

      const timeComponents = getTimeComponents(deltaTime);
    }, 1000);
  },
};

function getTimeComponents(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  const secs = Math.floor((time % (1000 * 60)) / 1000);

  return { days, hours, mins, secs };
}
