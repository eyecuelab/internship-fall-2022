import React from 'react';
import '../../index.css';
import CardTemplate from '../../Components/CardTemplate/CardTemplate';
import TeamLobby from '../../Components/TeamLobby/TeamLobby';

function GameControl() {
  return <CardTemplate user="player" content={ <TeamLobby /> } />;
}

export default GameControl;
