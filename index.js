const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/style.css');
})
app.get('/img/0000001.jpg', (req, res) => {
  res.sendFile(__dirname + '/img/0000001.jpg');
})
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  // console.log('user connected');
  socket.on('user-connect', (username) => {
    console.log(`user ${username} connected`);
    io.emit('user-connect', username);
  })
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
    
  socket.on('message-submit', (messageDetails) => {
    io.emit('message-submit', messageDetails);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});