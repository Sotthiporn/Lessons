const express = require("express");

const app = express();

//MIDDLEWARE
app.use("/login", () => {
  console.log("Validating user credential...");
});

//ROUTES
app.get("/login", (req, res) => {
  res.send("You are on homepage");
});

app.listen(8080);
