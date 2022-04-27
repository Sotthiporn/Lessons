const http = require("http");

//Call http to use and listen to event
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world");
    res.end();
  }

  if (req.url === "/api/restaurant") {
    res.write(
      JSON.stringify([
        {
          id: 1,
          name: "Restaurant 1",
        },
        {
          id: 2,
          name: "Restaurant 2",
        },
        {
          id: 3,
          name: "Restaurant 3",
        },
        {
          id: 4,
          name: "Restaurant 4",
        },
        {
          id: 5,
          name: "Restaurant 5",
        },
      ])
    );
    res.end();
  }
});

//Raise event
server.listen(8888);

console.log("You are listening on port 8888...");
