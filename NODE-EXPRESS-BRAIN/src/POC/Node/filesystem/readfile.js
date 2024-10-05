var fs = require("fs");

fs.readFile("TestFile.txt", function (err, data) {
  if (err) throw err;
  console.log(data);
});

//<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 21>