import express from 'express';
import http from 'http';
import cors from 'cors';
import {Server as socketIO} from 'socket.io';
// const io = socketIO(server, {cors: {origin: '*',}})
import {PopulateSocket, CreateRoom} from './socketLogic/roomLogic.js'

const app = express();
const server = http.createServer(app);
const io = new socketIO(server, {
  allowEIO3: true,
  allowedHeaders: ["my-custom-header"],
  credentials: true,
  cors: {
    origin: true,
  }});
  // cors: '*', origins: '*'});

// app.use( cors({origin: '*', credentials: false,}));
// http://127.0.0.1:5173/
// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', false);
//   next();
//   });

app.get('/createRoom', (req, res) => {
  const roomCode = 'TomasPizzeria' + Math.floor(Math.random() * 100)
  CreateRoom(roomCode);
  res.send({roomCode: roomCode});
});

io.on('connection', (socket) => {
  console.log('connection', socket.id)
  PopulateSocket(socket)
});

server.listen(4000, () => {
  console.log('listening on *:4000');
});
