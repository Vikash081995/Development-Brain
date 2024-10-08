import { EventEmitter } from "node:events";

const emitter = new EventEmitter();
emitter.on("message", (message) => {
  console.log(`message: ${message}`);
});

emitter.emit("message", "HEllo");
