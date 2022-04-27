const express = require("express");

const app = express();

//ROUTES
app.get("/", (req, res) => {
  res.send("You are on homepage.");
});
app.get("/api", (req, res) => {
  res.send("API for Developers");
});

app.listen(8080);
