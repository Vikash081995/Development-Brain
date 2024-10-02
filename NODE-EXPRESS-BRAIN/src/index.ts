import express from "express";

const app = express();
const port = 3000;

//define routes

//refers tto how an application's endpoints-URI respond to client client requests
//All URLs are  URIs but not all URIs are URLs( HTML,XML,JSON)

//the app object includes get() post() put() and delete()
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Hello world app is listening at port 3000`);
});
