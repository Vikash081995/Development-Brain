const fs = require("fs");

fs.writeFileSync("dataSync.txt", "hello world!", (err) => {
  if (err) {
    throw err;
  }
  console.log("It is saved ");
});
