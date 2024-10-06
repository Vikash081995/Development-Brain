const fs = require("fs");
import path from "path";
import util from "util";
const WriteFile = util.promisify(fs.writeFile);
const ReadFile = util.promisify(fs.readFile);
async function WriteFileAsync() {
  try {
    await WriteFile(
      path.join(__dirname, "/data/dummy3-promise.txt"),
      "readingfilewithpromises"
    );
    console.log("file written");
  } catch (err) {
    console.log("error reading file");
  }
}

WriteFileAsync();

//----------read file ---------------

async function ReadFileAsync() {
  try {
    const content = await ReadFile(
      path.join(__dirname, "/data/dummy3-promise.txt"),
      "utf8"
    );
    console.log(content);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

ReadFileAsync();
