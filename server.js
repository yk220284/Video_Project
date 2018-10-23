//run a localserver without http-server command in terminal
var express = require('express');

var app = express();
var server = app.listen(5000);

app.use(express.static('public'));

console.log('running localhost 5000');

var socket = require('socket.io');
var io = socket(server); //message in and out

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log('new connection: ' + socket.id);

  socket.on('playerInfo', timeMsg)

  function timeMsg(a) {
    // socket.broadcast.emit('playerInfo', a)
    io.sockets.emit('playerInfo', a) //this will emit to every one including the sender
    console.log(a);
  }

  socket.on('buttonState', bMsg)

  function bMsg(s) {
    // socket.broadcast.emit('playerInfo', a)
    io.sockets.emit('buttonState', s) //this will emit to every one including the sender
    console.log(s);
  }
}