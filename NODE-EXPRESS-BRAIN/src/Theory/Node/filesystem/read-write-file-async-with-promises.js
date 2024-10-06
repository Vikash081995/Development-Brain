const fs = require("fs").promises;
import path from "path";
async function WriteFile() {
  try {
    fs.writeFile(
      path.join(__dirname, "/data/dummy3-promise.txt"),
      "readingfilewithpromises"
    );
    console.log("file written");
  } catch (err) {
    console.log("error reading file");
  }
}

WriteFile();

//----------read file ---------------

async function ReadFile() {
  try {
    fs.readFile(path.join(__dirname, "/data/dummy3-promise.txt"), "utf8").then(
      (res) => console.log(res)
    );
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

ReadFile();
