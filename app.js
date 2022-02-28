const express = require('express');
const cors = require('cors')
const socket = require('socket.io');

const app = express();

app.use(express.static('public'));
app.use(cors())

let port = process.env.PORT || 3000;
let server = app.listen(port, () => {

  console.log("listening on port " + port);

  console.log("listening on port" + port);

});

const io = socket(server, {
  cors: {
    origin: 'https://open-board787.herokuapp.com/',
  }
});
// let io = socket(server);

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
