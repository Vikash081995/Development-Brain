const http = require("http");
var BooksClass = require("./book.js");

var book = new BooksClass();

book.on("rated", () => {
  console.log(`Rated with` + book.getPoints());
});
book.rate(10);

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Hellow world");
  })
  .listen(9000, () => {
    console.log(`Server is listening at port 9000`);
  });
  //Rated with10
// Server is listening at port 9000