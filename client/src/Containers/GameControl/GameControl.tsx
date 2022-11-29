import React from 'react';
import '../../index.css';
import CardTemplate from '../../Components/CardTemplate/CardTemplate';
import TeamLobby from '../../Components/TeamLobby/TeamLobby';
import Buzzer from '../../Components/Buzzer/Buzzer';
import HaikuForm from '../../Components/HaikuForm/HaikuForm';
import TeamOverlay from '../../Components/TeamOverlay/TeamOverlay';

function GameControl() {
	document.documentElement.style.backgroundImage = 'url(/images/oranges_background.png)';

  return <CardTemplate content={ <Buzzer roundNumber={2} topic={'holiday activity'} /> }  overlay={<TeamOverlay />}/>;
}

export default GameControl;
