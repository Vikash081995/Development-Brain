var events = require("events");
var eventEmitter = new events.EventEmitter();
var somethingHappens = function () {
  console.log("Somehing happens");
};

eventEmitter.on("something-happen", somethingHappens);
eventEmitter.emit("something-happens");
