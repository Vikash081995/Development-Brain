const { Readable } = require("stream");

async function* generate() {
  yield "Node.js";
  yield "is";
  yield "a";
  yield "Javascript";
  yield "Runtime";
}

// /Note the use of the function* syntax. This syntax defines a generator function

const readable = Readable.from(generate());
readable.on("data", (chunk) => {
  console.log(chunk);
});