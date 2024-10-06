import express from "express";

const app = express();
const port = 8181;

app.get("/items/:vegetable", (req, res) => {
  let veg = req.params.vegetables;
  res.send(`This is the page for ${veg}`);
});

app.listen(port, () => {
  console.log("Server is running on port ${port}");
});
