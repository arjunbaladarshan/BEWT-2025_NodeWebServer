const EventEmitter = require("events");
let counter = 0;
class MyEvent extends EventEmitter {
  startEvent() {
    setInterval(() => {
      counter++;
      if (counter % 5 == 0) {
        this.emit("panchsecondthai");
      }
      this.emit("eksecondthaigai");
    }, 1000);
  }
}

const me = new MyEvent();
me.startEvent();
me.on("panchsecondthai", () => {
  console.log("Panch Second thai");
});
