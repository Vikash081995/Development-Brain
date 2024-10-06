const http = require("http");
const app = http.createServer();
const port = 3000;

const routeResponseMap = {
  "/info": "<h1>Info Page</h1>",
  "/contact": "<h1>Contact Us</h1>",
  "/about": "<h1>Learn More About Us.</h1>",
  "/hello": "<h1>Say hello by emailing us here</h1>",
  "/error": "<h1>Sorry the page you are looking for is not here.</h1>",
};

app.on("request", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (routeResponseMap[(req, url)]) {
    res.end(routeResponseMap[req.url]);
  } else {
    res.end(routeResponseMap["/error"]);
  }
});

app.listen(port);
console.log(`The server is listening at port ${port}`);
