const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Node.js API");
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});
