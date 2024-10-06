import fs from "fs";
import path from "path";

fs.writeFileSync(path.join(__dirname, "data/dummy.txt"), "hello", "utf8");
const data = fs.readFileSync(path.join(__dirname, "./data/dummy.txt"), "utf8");

fs.appendFileSync(path.join(__dirname, "/data/dummy.txt"), "updated");
console.log("data", data);
