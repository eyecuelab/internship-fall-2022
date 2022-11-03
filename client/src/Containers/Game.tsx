import React, { useState, useEffect } from 'react';
import socket from '../Hooks/WebsocketHook';

function Game() {

  useEffect(() => {
    socket.on('connection', () => {
      console.log('socket open');
    });
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  }



  return (
    <div>
      <button onClick={ sendPing }>Send ping</button>
    </div>


    




  );
}

export default Game;