import React, { useEffect, useState } from 'react';
import '../../index.css';
import CardTemplate from '../../Components/CardTemplate/CardTemplate';
import TeamLobby from '../../Components/TeamLobby/TeamLobby';
import Buzzer from '../../Components/Buzzer/Buzzer';
import HaikuForm from '../../Components/HaikuForm/HaikuForm';
import TeamOverlay from '../../Components/TeamOverlay/TeamOverlay';

function GameControl() {
	window.localStorage.clear();
	const [team, setTeam] = useState('');

	useEffect(() => {
		setTeam('blueberry');
		localStorage.setItem('team', team);
	}, []);

	let bgUrl = '';
	let color = '';

	switch (team) {
		case('blueberry'):
			bgUrl = '/images/blueberries_banner.png';
			color = '#0c114a';
			break;
		default:
			bgUrl = '/images/apple_banner.png';
			color: '#f00';
			break;
	}

	document.documentElement.style.backgroundImage = 'url(/images/oranges_background.png)';

  return (
	<CardTemplate 
		content={ <HaikuForm /> /* <TeamLobby /> */ /* <Buzzer roundNumber={2} topic={'holiday activity'} /> */ } 
		overlay={<TeamOverlay />} 
		bgUrl={bgUrl}
		color={color}
		/>
	);
}

export default GameControl;
