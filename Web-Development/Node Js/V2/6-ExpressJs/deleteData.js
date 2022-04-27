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
app.put("/api/items/:id", (req, res) => {
  // check id exist or not
  let data = items.find((obj) => obj.id === parseInt(req.params.id));

  if (!data) res.status(404).send("Item not found");

  // if item exist
  const index = items.indexOf(data);
  items.splice(index, 1);
  res.send(items);
});

app.listen(8080);
