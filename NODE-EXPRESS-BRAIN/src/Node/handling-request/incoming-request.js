const http = require("http");
const app = http.createServer();

app.on("request", (req, res) => {
  rs.writeHead(200, { "Content-Type": "text/html" });

  let responseMessage = "<h1>This will be sent to see the Screen</h1>";

  res.end(responseMessage);
});

app.listen(3000);
console.log("App is running on port 3000");
