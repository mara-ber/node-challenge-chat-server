const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const welcomeMessage = {
  id: 0,
  from: "Bart",
  text: "Welcome to CYF chat system!",
};

//This array is our "data store".
//We will start with one message in the array.
//Note: messages will be lost when Glitch restarts our server.
const messages = [welcomeMessage];

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.get("/messages", function (req, res) {
  res.send(messages);
})

app.post("/messages", function (req, res) {
  const newMessage = req.body;
  messages.push(newMessage);
  res.send(newMessage);
})

app.listen(3100)