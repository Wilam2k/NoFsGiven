import express from 'express';
const app = express();
import http from 'http';
const server = http.createServer(app);
import {Server as socketIO} from 'socket.io';
const io = new socketIO(server, {cors:{
    origin: '*',
}});
import cors from 'cors';
import {PopulateSocket, CreateRoom} from './socket.js'

app.use(cors({ origin: '*'}));
app.get('/createRoom', (req, res) => {
  const roomCode = Math.floor(Math.random() * 10000)
  CreateRoom(roomCode);
  res.send({roomCode: roomCode});
});

io.on('connection', (socket) => {
  PopulateSocket(socket)
});

server.listen(4000, () => {
  console.log('listening on *:4000');
});