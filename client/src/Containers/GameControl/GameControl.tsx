import React, { useEffect, useState } from 'react';
import '../../index.css';
import CardTemplate from '../../Components/CardTemplate';
import TeamLobby from '../../Components/Teams/Lobby';
import Buzzer from '../../Components/Teams/Buzzer';
import HaikuForm from '../../Components/Teams/HaikuForm';
import TeamOverlay from '../../Components/Teams/Overlay';
import Score from '../../Components/Teams/Score';
import socket from '../../Hooks/WebsocketHook';
import { getData, postData } from '../../ApiHelper';
import { useParams } from 'react-router-dom';
import { Game, Team } from '../../Types/Types';

function GameControl() {
	window.localStorage.removeItem('user');
	const { code } = useParams();
	const [team, setTeam] = useState('');
	const [game, setGame] = useState<Game>();
	const [submitState, setSubmitState] = useState(true);
	const teams = ['apple','blueberry','cherry','kiwi','lemon','peach','pear','strawberry'];
	
	const assignTeam = () => {
		if (!localStorage.getItem('team')) {
			getData(`/games/room/${code}`).then((response) => {
				setGame(response);
				localStorage.setItem('game', JSON.stringify(response));
				console.log(response);
				const setTeams = new Set(response.Team.map((a: Team) => a.teamName));
				let thisTeam = teams[Math.floor(Math.random() * 8)];
				if (!(setTeams.size === 8)) {
					while (setTeams.has(thisTeam)) {
						thisTeam = teams[Math.floor(Math.random() * 8)];
						console.log('shit');
					}
					console.log(thisTeam);
					setTeam(thisTeam);
					postData('/teams', {teamName: thisTeam, gameId: response.id});
					localStorage.setItem('team', thisTeam);
				}
			});
		}
	}

	const findGame = () => {
		getData(`/games/room/${code}`).then((response) => {
			setGame(response);
			localStorage.setItem('game', JSON.stringify(response));
		})
	}

	useEffect(() => {
		findGame();
		localStorage.getItem('team') ? null : assignTeam();
		setTeam('blueberry');
		// localStorage.setItem('game', JSON.stringify(game));
	}, []);

	let color = '';

	const bgUrl = `/images/${team}_banner.png`;

	switch (team) {
		case('blueberry'):
			color = '#0c114a';
			break;
		default:
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
