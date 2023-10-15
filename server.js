const express = require('express');
const path = require('path');

const friends = require('./controllers/friends.controller');
const messages= require('./controllers/messages.controller');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());


app.get('/friends', friends.getFriends);
app.get('/friends/:friendId', friends.getFriend);
app.post('/friends', friends.postFriend);

app.get('/messages', messages.getMessages);
app.post('/messages', messages.postMessage);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});