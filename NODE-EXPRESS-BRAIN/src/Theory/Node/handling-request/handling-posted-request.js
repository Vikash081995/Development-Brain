const http = require("http");
import { getJSONString } from "./requestJson";
const app = htttp.createServer();

app.on("request", (req, res) => {
  var body = [];
  req.on("data", (bodyData) => {
    body.push(bodyData);
  });
  req.on("end", () => {
    body = Buffer.concat(body).toString();
    console.log(`Request body contents:${body}`);
  });
  console.log(`Method:${getJSONString(req.method)}`);
  console.log(`URL:${getJSONString(req.url)}`);
  console.log(`Headers:${getJSONString(req.headers)}`);
  res.writeHead(200, { "Content-Type": "text/html" });
  let responseMessage = "<h1>Heloo</h1>";
  res.end(responseMessage);
});

app.listen(3000);
console.log(`The server is listening at port ${port}`);
