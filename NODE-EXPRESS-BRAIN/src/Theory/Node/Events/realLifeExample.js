const EventEmitter = require("events");
const path = require("path");

const { readFile } = require("fs");

/**
 * Finds all occurrences of a given regex in a list of files
 * and emits events with the file and match
 *
 * @param {string[]} files - list of files to read
 * @param {RegExp} regex - regex to search for
 * @return {EventEmitter} - emitter that emits "fileread" "error" and "found" events
 */
function findRegex(files, regex) {
  const emitter = new EventEmitter();
  for (const file of files) {
    readFile(file, "utf8", (err, content) => {
      if (err) {
        return emitter.emit("error", err);
      }
      emitter.emit("fileread", file);
      const match = content.match(regex);
      if (match) {
        match.forEach((elem) => emitter.emit("found", file, elem));
      }
    });
  }
  return emitter;
}

findRegex(
  [
    path.join(__dirname, "./datadummy.txt"),
    path.join(__dirname, "./datadummy2.txt"),
  ],
  /hello \w+/g
)
  .on("fileread", (file) => console.log(`${file} was read`))
  .on("found", (file, match) => console.log(`Matched "${match}" in ${file}`))
  .on("error", (err) => console.error(`Error emitted ${err.message}`));

const server = createServer((req, res) => {
  res.end("res.send");
});

server.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
