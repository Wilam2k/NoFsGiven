import React from 'react'

export const Game = ({socket}) => {
 
  const sendEvent = () =>  {
    socket.emit('joinRoom', {code:'ass'})
  }
  return (
    <div>
      <h1>Game</h1>
      <button onClick={ () => sendEvent()} >join</button>
    </div>
  )
}
