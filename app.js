const express = require('express');
const socket = require('socket.io');

const app = express();

app.use(express.static('public'));

let port = process.env.PORT || 3000;
let server = app.listen(port, () => {
<<<<<<< HEAD
  console.log("listening on port "+ port);
=======
  console.log("listening on port" +port);
>>>>>>> 5b6da30bdaa715eda91f4828253270e66072b14d
});

let io = socket(server);

io.on('connection', (socket) => {
  // console.log('made socket connection!');

  //received data
  socket.on('beginPath', (data) => {
    //now transfer to all computers
    io.sockets.emit('beginPath', data);
  });

  socket.on('drawStroke', (data) => {
    io.sockets.emit('drawStroke', data);
  });

  socket.on('redoUndo', (data) => {
    io.sockets.emit('redoUndo', data);
  });
});

//run by npx nodemon
