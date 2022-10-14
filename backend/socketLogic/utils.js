export const EmitToParty = (playerList, content) => {
    playerList.forEach(player => {
        player.socket.emit(content);
    })
}