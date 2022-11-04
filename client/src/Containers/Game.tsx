import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import socket from '../Hooks/WebsocketHook';

function Game() {
  const [teamName, setTeamName] = useState('');

  useEffect(() => {
    socket.on('connection', () => {
      console.log('socket open');
    });

    socket.on('create_team', (team) => {
      $('#teamList').append(`<h4>${team}</h4>`);
    });

    return () => {
      socket.off('create_team');
    }
  }, []);

  useEffect(() => {
    teamName ? socket.emit('create_team', (teamName)) : null;
  }, [teamName]);

  const createTeam = (event : React.FormEvent) => {
    event.preventDefault();
    const name:any = $('#teamName').val();
    name ? setTeamName(name) : setTeamName('placeholder');
  }

  return (
    <div>
      <form id='createTeam' onSubmit={createTeam}>
        <input type='text' id='teamName' />
        <button type='submit'>Create Team</button>
      </form>
      <div id='teamList'>

      </div>
    </div>
  );
}

export default Game;