const http = require("http");

//http is a protocol for fetching resources such as HTML documents
//http is esentially the foundation of any data exchange on the web

//creating server
//req and res boh are the callback function parameters
//that are used to node.js- queries, params,body and even cookies
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url == "/") {
    res.write(
      "   <html>  <body>           <p>This is a homepage</p>  </body> </html> "
    );
  }
});

server.listen(5000);
console.log("Nodejs web server running at port 5000....");
