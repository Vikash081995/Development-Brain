const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify({ text: "h1", numbers: [1, 2, 3] }));
});

server.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
