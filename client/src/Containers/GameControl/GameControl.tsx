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
	const [team, setTeam] = useState<Team>(JSON.parse(localStorage.getItem('team') as string));
	const [game, setGame] = useState<Game>();
	const [color, setColor] = useState('#888');
	const [readyPhase, setReadyPhase] = useState(false);
	const [brainstorming, setBrainstorming] = useState(false);
	const [submitState, setSubmitState] = useState(true);
	const colors = {apple: '#0A1031', blueberry: '#0c114a', cherry: '#C70009', kiwi: '#61750D', lemon: '#105839', peach: '#DF9190', pear: '#CDA70D', strawberry: '#D00D0A'}

	useEffect(() => {
		console.log('useEffect')
		getData(`/games/room/${code?.toUpperCase()}`)
		.then((response) => {
			localStorage.setItem('game', JSON.stringify(response));
			setGame(response);
			console.log('RESPONSE: ', response);
			console.log('GAME: ', game);
			if (!localStorage.getItem('team')) {
				postData('/teams', { gameId: response.id })
				.then((data) => {
					console.log(data);
					setTeam(data);
					localStorage.setItem('team', JSON.stringify(data));
					setColor(eval(`colors.${data.teamName}`));
				});
			} else {
				const teamData = JSON.parse(localStorage.getItem('team') as string);
				setTeam(teamData);
				setColor(eval(`colors.${teamData.teamName}`));
			}
		});
	}, []);

	useEffect(() => {
		socket.on('connection', () => {
			console.log('socket open');
		});

		socket.on('start_game', () => {
			setReadyPhase(true);
		});

		socket.on('start_round', () => {
			setBrainstorming(true);
		});

		socket.on('start_guessing', () => {

		});

		socket.on('end_round', () => {

		});

		return () => {
			socket.off('connection');
			socket.off('start_game');
			socket.off('start_round');
			socket.off('start_guessing');
			socket.off('end_round');
		}
	})

	const bgUrl = `/images/${team?.teamName}_banner.png`;

	document.documentElement.style.backgroundImage = 'url(/images/oranges_background.png)';

  return (
		<>
		<CardTemplate 
			content={ 
				brainstorming ? 
					<HaikuForm submitState={submitState} setSubmitState={setSubmitState}/> 
				: <TeamLobby team={team} phase={readyPhase}/> 
				/* <Score /> */ 
				/* <Buzzer roundNumber={2} topic={'holiday activity'} /> */ 
			} 
			overlay={ <TeamOverlay setSubmitState={setSubmitState}/> } 
			bgUrl={bgUrl}
			color={color}
		/>
		</>
	);
}

export default GameControl;
