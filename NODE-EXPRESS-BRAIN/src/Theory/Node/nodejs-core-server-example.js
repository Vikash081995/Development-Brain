import http from "http";

const server = http.createServer((req, res) => {
  const { url } = req;
  console.log("request url", url);
  res.write("this is the user");
  res.end("");
});

server.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
