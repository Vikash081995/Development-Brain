import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("Post success ");
});
