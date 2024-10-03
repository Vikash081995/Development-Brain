const fs = require("fs");
const read = fs.createReadStream("./file.txt");

read.on("data", (data) => {
  console.log("Read Chunk", data);
});

read.on("end", () => {
  console.log("No More data");
});
