const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


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
});

app.get("/messages/:messageId", function (req, res) {
  const id = Number(req.params.messageId);
  const message = messages.find((message) => message.id === id);
  res.send(message);
});

app.delete("/messages/:messageId", function (req, res) {
  const id = Number(req.params.messageId);
  const messageToDel = messages.find((message) => message.id === id);
  messages.splice(messages.indexOf(messageToDel), 1);
  res.send(messageToDel);
});


app.post("/messages", function (req, res) {
  const newMessage = req.body;
  messages.push(newMessage);
  res.send(newMessage);
});

app.listen(3100)

//app.listen(process.env.PORT);
