import React, { useState, useEffect } from 'react';
import socket from '../Hooks/WebsocketHook';

function Game() {

  useEffect(() => {
    socket.on('connection', () => {
      console.log('socket open');
    });
  }, []);

  return (
    <div>
      <button>Button</button>
    </div>
  );
}

export default Game;