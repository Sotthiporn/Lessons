const express = require("express");

const app = express();

// if dont call this it cannot push req to items
app.use(express.json());

const items = [
  { id: 1, item: "iPhone 13 Pro Max" },
  { id: 2, item: "Apple" },
  { id: 3, item: "Banana" },
  { id: 4, item: "Book" },
  { id: 5, item: "Pen" },
];

//ROUTES
app.post("/api/items", (req, res) => {
  //Validation
  if (!req.body.item || req.body.item.length < 2) {
    res.status(422).send("Sorry, item name must be at least 2 characters");
    return;
  }

  const item = {
    id: items.length + 1,
    item: req.body.item,
  };

  items.push(item);
  res.send(item);
});

app.listen(8080);
