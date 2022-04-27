const http = require("http");

//Call http to use
const server = http.createServer();

//listen to event
server.on("connection", (socket) => {
  console.log("New connection has made successfully...");
});

//Raise event
server.listen(8888);

console.log("You are listening on port 8888...");
