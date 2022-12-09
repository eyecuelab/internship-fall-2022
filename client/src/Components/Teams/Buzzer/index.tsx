import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import socket from '../../../Hooks/WebsocketHook';
import { DogEarButton, greenButton, redButton } from '../../componentStyles';
import { Haicue, Phrase, Team } from '../../../Types/Types';
import { getData } from '../../../ApiHelper';

interface Props {
	roundNumber: number;
	topic: string;
}

function Buzzer (props: Props) {
	const { roundNumber, topic } = props;
	const [team, setTeam] = useState<Team>(JSON.parse(localStorage.getItem('team') as string));
	const [phrase, setPhrase] = useState<Phrase>();
	const [haicue, setHaicue] = useState<Haicue>();
	const [buzzerState, setBuzzerState] = useState(true);
	const [presenting, setPresenting] = useState(false);

	greenButton.width = '100%';
	redButton.width = '100%';

	useEffect(() => {
		getData(`/team/${team.id}`).then((team) => {
			setPhrase(team.phrases.slice(-1)[0]);
			setHaicue(team.Haicues.slice(-1)[0]);
		})
	}, [team.id]);

	useEffect(() => {
		socket.on('connection', () => {
			console.log('socket open');
		});

		socket.on('buzz', () => {
			setBuzzerState(false);
		});

		socket.on('buzzer_refresh', () => {
			setBuzzerState(true);
			console.log(buzzerState);
		});

		socket.on('presenting', (presentingTeam) => {
			if (team.id === presentingTeam.id) {
				setPresenting(true);
			} else {
				setPresenting(false);
			}
		})

		return () => {
			socket.off('connection');
			socket.off('buzz');
			socket.off('buzzer_refresh');
			socket.off('presenting')
		}
	}, []);

	const buzzIn = () => {
		socket.emit('buzz', team);
	}

	return (
		<>
		{ presenting ? 
			<>
				<div className='fade-in-down'>
					<h3>round {roundNumber} - {topic}</h3>
					<h3>you are reading: {phrase?.body}</h3>
				</div>
				<br />
				<div className='fade-in-left'>
					<h5>line 1</h5>
					<h1>{haicue?.line1}</h1>
					<h5>line 2</h5>
					<h1>{haicue?.line2}</h1>
					<h5>line 3</h5>
					<h1>{haicue?.line3}</h1>
				</div>
			</> 
		: 
			<>
				<h3>round {roundNumber} - {topic}</h3>
				<Grid
					container
					alignItems="center"
					sx={{ height: '80%', paddingTop: '15%', paddingBottom: '15%' }}
				>
					<Grid sx={{width: '100%'}}>
						<h3>you are guessing...</h3>
						<br />
						<DogEarButton	id='buzzer'	onClick={buzzIn} style={greenButton} disabled={!buzzerState}>
							<h3>buzz in!</h3>
						</DogEarButton>
					</Grid>
				</Grid>
			</>
		}
		</>
	);
}

export default Buzzer