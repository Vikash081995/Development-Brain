//read and write file asynchrounsly with callbacks

import fs from "fs";
import path from "path";

//write and read file sasynchronoulsy with callback

fs.writeFile(path.join(__dirname, "/data/dummy2.txt"), "hello", (err) => {
  if (err) {
    console.log("error writing data");
  }
});

//readFile
fs.readFile(path.join(__dirname, "/data/dummy2.txt"), "utf8", (err, data) => {
  if (err) {
    console.log("error reading the data ");
  } else {
    console.log("data is successfully read", data);
  }
});
