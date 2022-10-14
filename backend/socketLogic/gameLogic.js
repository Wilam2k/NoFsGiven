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
        gameState[data.roomCode][data.playerName].finger = true;
    })
    socket.on('lowerFinger', (data) => {
        gameState[data.roomCode][data.playerName].finger = false;
    })

}  

export const GameLoop = () => {

}