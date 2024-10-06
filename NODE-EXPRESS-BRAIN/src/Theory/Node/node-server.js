const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Hellow world");
  })
  .listen(9000, () => {
    console.log(`Server is listening at port 9000`);
  });
