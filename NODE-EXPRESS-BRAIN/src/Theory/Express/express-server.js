import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

//define routes

//refers tto how an application's endpoints-URI respond to client client requests
//All URLs are  URIs but not all URIs are URLs( HTML,XML,JSON)

app.listen(port, () => {
  console.log(`Hello world app is listening at port 3000`);
});
