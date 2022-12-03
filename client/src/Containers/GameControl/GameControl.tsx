import React, { useEffect, useState } from 'react';
import '../../index.css';
import CardTemplate from '../../Components/CardTemplate';
import TeamLobby from '../../Components/Teams/Lobby';
import Buzzer from '../../Components/Teams/Buzzer';
import HaikuForm from '../../Components/Teams/HaikuForm';
import TeamOverlay from '../../Components/Teams/Overlay';
import Score from '../../Components/Teams/Score';
import socket from '../../Hooks/WebsocketHook';
import { getData } from '../../ApiHelper';
import { useParams } from 'react-router-dom';
import { Game } from '../../Types/Types';

function GameControl() {
	window.localStorage.removeItem('user');
	const { code } = useParams();
	const [team, setTeam] = useState('');
	const [game, setGame] = useState<Game>();
	const [submitState, setSubmitState] = useState(true);

	const findGame = () => {
		getData(`/games/room/${code}`).then((response) => {
			setGame(response);
			localStorage.setItem('game', JSON.stringify(response));
		})
	}

	useEffect(() => {
		findGame();
		setTeam('blueberry');
		localStorage.setItem('team', team);
		// localStorage.setItem('game', JSON.stringify(game));
	}, []);

	let bgUrl = '';
	let color = '';

	switch (team) {
		case('blueberry'):
			bgUrl = '/images/blueberry_banner.png';
			color = '#0c114a';
			break;
		default:
			bgUrl = '/images/apple_banner.png';
			color: '#f00';
			break;
	}

	document.documentElement.style.backgroundImage = 'url(/images/oranges_background.png)';

  return (
		<>
		<button onClick={() => console.log(game)} >{game?.gameCode}</button>
		<CardTemplate 
			content={ <HaikuForm submitState={submitState} setSubmitState={setSubmitState}/> /* <Score /> */ /* <TeamLobby /> */ /* <Buzzer roundNumber={2} topic={'holiday activity'} /> */ } 
			overlay={ <TeamOverlay setSubmitState={setSubmitState}/> } 
			bgUrl={bgUrl}
			color={color}
		/>
		</>
	);
}

export default GameControl;
