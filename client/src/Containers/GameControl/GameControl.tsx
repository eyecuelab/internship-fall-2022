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
	const [gamePhase, setGamePhase] = useState(localStorage.getItem('game-phase') || '');
	const [submitState, setSubmitState] = useState(true);
	const [color, setColor] = useState('#ffffff');
	localStorage.getItem('game-phase') ? null : localStorage.setItem('gamePhase', '');

	useEffect(() => {
		// @ts-ignore
		getData(`/games/room/${code.toUpperCase()}`)
		.then((response) => {
			console.log('GAME bY CODE: ', response);
			setGame(response);

			if (localStorage.getItem('game-phase') === 'ready') { 
				getData(`/topics/round/${response.Rounds.slice(-1)[0].id}`).then((topic) => {
					setTopic(topic);
					localStorage.setItem('topic', JSON.stringify(topic));
				});
			}
		});

	}, [gamePhase]);

	useEffect(() => {
		// @ts-ignore
		getData(`/games/room/${code.toUpperCase()}`)
		.then((response) => {
			console.log('GAME bY CODE: ', response);
			if (localStorage.getItem('game')) {
				console.log('game in localstorage');
				if (game.gameCode.toLowerCase() !== response.gameCode.toLowerCase()) {
					console.log('local game code: ', game.gameCode);
					console.log('joined game code: ', response.gameCode)
					localStorage.clear();
					localStorage.setItem('game', JSON.stringify(response));
					localStorage.setItem('game-phase', '');
					setGame(response);
				}
			} else {
				localStorage.setItem('game', JSON.stringify(response));
				setGame(response);
			}

			if (!localStorage.getItem('team')) {
				postData('/teams', { gameId: response.id })
				.then((data) => {
					setTeam(data);
					console.log(color);
					localStorage.setItem('team', JSON.stringify(data));
				});
			} else {
				const teamData = JSON.parse(localStorage.getItem('team') as string);
				setTeam(teamData);
			}
		});
	}, [])

	useEffect(() => {
		swapBanner();
		console.log(color);
	}, [team?.id]);

	useEffect(() => {
		socket.on('connection', () => {
			console.log('socket open');
		});

		socket.on('start_game', () => {
			localStorage.setItem('game-phase', 'ready');
			setGamePhase('ready');
		});

		socket.on('start_round', () => {
			localStorage.setItem('game-phase', 'brainstorming');
			setGamePhase('brainstorming');
		});

		socket.on('start_guessing', () => {
			localStorage.setItem('game-phase', 'guessing');
			setGamePhase('guessing');
		});

		socket.on('end_round', () => {
			setGamePhase('scoring');
		})

		return () => {
			socket.off('connection');
			socket.off('start_game');
			socket.off('start_round');
			socket.off('start_guessing');
			socket.off('end_round');
		}
	})

	const bgUrl = `/images/${team?.teamName}_banner.png`;

	const swapBanner = () => {
		switch(team?.teamName) {
			case("apple"):
				setColor('#0A1031');
				break;
			case("blueberry"):
				setColor('#0c114a');
				break;
			case("cherry"):
				setColor('#C70009');
				break;
			case("kiwi"):
				setColor('#61750D');
				break;
			case("lemon"):
				setColor('#105839');
				break;
			case("peach"):
				setColor('#DF9190');
				break;
			case("pear"):
				setColor('#CDA70D');
				break;		
		}
	}

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
				<Buzzer roundNumber={game.Rounds.length} topic={topic.name} /> : 
				( gamePhase==='scoring' ? <Score /> : ( gamePhase === 'brainstorming' ? 
					<HaikuForm topic={topic} submitState={submitState} setSubmitState={setSubmitState}/> 
					// @ts-ignore
				: <TeamLobby game={game} team={team} phase={gamePhase === 'ready'}/> ))
			} 
			overlay={ <TeamOverlay setSubmitState={setSubmitState}/> } 
			bgUrl={bgUrl}
			color={color}
			/>
		
		</>
	);
}

export default GameControl;
