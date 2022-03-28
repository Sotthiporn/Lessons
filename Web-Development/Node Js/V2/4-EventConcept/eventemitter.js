const EventEmitter = require("events");
const emitter = new EventEmitter();

//Listen (Must use before raise)
emitter.on("alert", function () {
  console.log("Button pressed");
});

//Raise event
emitter.emit("alert");
