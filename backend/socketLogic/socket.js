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
      parties[data.code].members.forEach((player) => {
        player.socket.emit("members", memberList);
      });
    });
  
    socket.on("sendMessage", (data) => {
      if (!CheckRoom(data.code, socket)) return;
      parties[data.code].messages.push({ name: data.name, message: data.msg });
      parties[data.code].members.forEach((player) => {
        player.socket.emit("messages", parties[data.code].messages);
      });
    });
}
socket.on("disconnect", () => {
    console.log("user disconnected");
});

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