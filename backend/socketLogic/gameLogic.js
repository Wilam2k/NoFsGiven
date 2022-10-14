const gameState = {}
/** GAME STATE
 * roomcode : {
 *   playerName : { socket, finger, points},
 *   playerName: { socket, finger, points},
 *   playerName: { socket, finger, points},
 *   playerName: { socket, finger, points},
 * }
 */
export const GameLogic = (socket, parties) => {
    socket.on('raiseFinger', (data) => {
        console.log('data', data)
        gameState[data.roomCode][data.playerName].finger = true;
    })
    socket.on('lowerFinger', (data) => {
        gameState[data.roomCode][data.playerName].finger = false;
    })
    return socket
}  

export const GameLoop = () => {

}