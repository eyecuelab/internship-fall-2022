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
import { Game, Team, Topic } from '../../Types/Types';

function GameControl() {
	window.localStorage.removeItem('user');
	const { code } = useParams();
	const [team, setTeam] = useState<Team>();
	const [game, setGame] = useState<Game>(JSON.parse(localStorage.getItem('game') as string));
	const [topic, setTopic] = useState<Topic>(JSON.parse(localStorage.getItem('topic') as string));
	const [color, setColor] = useState('#888');
	const [gamePhase, setGamePhase] = useState(localStorage.getItem('game-phase') || '');
	// const [readyPhase, setReadyPhase] = useState(false);
	// const [brainstorming, setBrainstorming] = useState(false);
	// const [guessing, setGuessing] = useState(false);
	const [submitState, setSubmitState] = useState(true);
	localStorage.getItem('game-phase') ? null : localStorage.setItem('gamePhase', '');
	const colors = {apple: '#0A1031', blueberry: '#0c114a', cherry: '#C70009', kiwi: '#61750D', lemon: '#105839', peach: '#DF9190', pear: '#CDA70D', strawberry: '#D00D0A'}

	useEffect(() => {
		getData(`/games/room/${code?.toUpperCase()}`)
		.then((response) => {

			if (JSON.parse(localStorage.getItem('game') as string).gameCode.toLowerCase() !== response.gameCode.toUpperCase) {
				localStorage.clear();
			}
			
			console.log(response);
			localStorage.setItem('game', JSON.stringify(response));
			setGame(response);
			if (localStorage.getItem('game-phase') === 'ready') { 
				console.log('TOPIC: ', response.Rounds.slice(-1)[0]);
				getData(`/topics/round/${response.Rounds.slice(-1)[0].id}`).then((topic) => {
					console.log('TOPIC DATA: ', topic);
					setTopic(topic);
					localStorage.setItem('topic', JSON.stringify(topic));
				});
			}
			if (!localStorage.getItem('team')) {
				postData('/teams', { gameId: response.id })
				.then((data) => {
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

	}, [gamePhase]);

	useEffect(() => {
		socket.on('connection', () => {
			console.log('socket open');
		});

		socket.on('start_game', () => {
			// setReadyPhase(true);
			localStorage.setItem('game-phase', 'ready');
			setGamePhase('ready');
		});

		socket.on('start_round', () => {
			// setBrainstorming(true);
			localStorage.setItem('game-phase', 'brainstorming');
			setGamePhase('brainstorming');
		});

		socket.on('start_guessing', () => {
			// setGuessing(true);
			localStorage.setItem('game-phase', 'guessing');
			setGamePhase('guessing');
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

	if (gamePhase === 'ready') {
		document.getElementById('phase-down')?.classList.add('fade-in-down');
		document.getElementById('phase-left')?.classList.add('fade-in-left');
	}

  return (
		<>
		<CardTemplate 
			content={ 
				gamePhase === 'guessing' ? 
				<Buzzer roundNumber={2} topic={'holiday activity'} /> : 
				( gamePhase === 'brainstorming' ? 
					<HaikuForm topic={topic} submitState={submitState} setSubmitState={setSubmitState}/> 
					// @ts-ignore
				: <TeamLobby game={game} team={team} phase={gamePhase === 'ready'}/> )
				/* <Score /> */ 
			} 
			overlay={ <TeamOverlay setSubmitState={setSubmitState}/> } 
			bgUrl={bgUrl}
			color={color}
		/>
		</>
	);
}

export default GameControl;
