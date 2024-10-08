const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (name) => {
  console.log(name);
});

eventEmitter.on("greet", (name) => {
  console.log(name);
});

eventEmitter.emit("greet", "John");

eventEmitter.once("shout", (message) => {
  console.log(`Shout ${message}`);
});

eventEmitter.emit("shout", "This is cool");
eventEmitter.emit("shout", "no way this is s bad");

eventEmitter.removeAllListeners("greet");
