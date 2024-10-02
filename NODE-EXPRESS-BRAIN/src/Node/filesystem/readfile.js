var fs = require("fs");

var data = fs.readFile("TestFile.txt", function (err, data) {
  if (err) throw err;
  console.log(data);
});
