const parties = {};
import {EmitToParty} from './utils.js'
import {GameLogic} from './gameLogic.js'

export const PopulateSocket = (socket) => {
    socket.on("joinRoom", (data) => {
      console.log("joiningRoom", data);
      if (!CheckRoom(data.code, socket)) return;
    });
  
    socket.on("setName", (data) => {
      console.log("settingName", data);
      if (!CheckRoom(data.code, socket)) return;
      parties[data.code].members.push({ name: data.name, socket: socket });
      const memberList = parties[data.code].members.map((player) => player.name);
      EmitToParty(parties[data.code].members, ("members", memberList))
    });
  
    socket.on("sendMessage", (data) => {
      if (!CheckRoom(data.code, socket)) return;
      parties[data.code].messages.push({ name: data.name, message: data.msg });
      EmitToParty(parties[data.code].members, ("messages", parties[data.code].messages))
    });
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
    GameLogic(socket, parties);
  }

export const CreateRoom = (roomCode) => {
    parties[roomCode] = { members: [], messages: [] };
    };
    
const CheckRoom = (code, socket) => {
    if (!parties[code]) {
        socket.emit("roomNotFound");
        return false;
    }
    return true;
};