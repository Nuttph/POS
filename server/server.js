//for server statement
const express = require("express");
const app = express();

const data = [{ message: "Hello world" }];

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(5555, () => {
  console.log("server is running on port : http://localhost:5555");
});
