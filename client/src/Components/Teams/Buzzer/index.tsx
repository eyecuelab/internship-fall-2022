import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import socket from '../../../Hooks/WebsocketHook';
import { DogEarButton, greenButton, redButton } from '../../componentStyles';

interface Props {
	roundNumber: number;
	topic: string;
}

function Buzzer (props: Props) {
	const [buzzerState, setBuzzerState] = useState(true);

	greenButton.width = '100%';
	redButton.width = '100%';

	useEffect(() => {
		socket.on('connection', () => {
			console.log('socket open');
		});

		socket.on('buzz', () => {
			setBuzzerState(false);
		});

		socket.on('buzzer_refresh', () => {
			setBuzzerState(true);
		});

		return () => {
			socket.off('connection');
			socket.off('buzz');
			socket.off('buzzer_refresh');
		}
	}, []);

	const buzzIn = () => {
		socket.emit('buzz');
	}

	const buzzRefresh = () => {
		socket.emit('buzzer_refresh');
	}

	return (
		<>
		<h3>round {props.roundNumber} - {props.topic}</h3>
		<Grid
			container
			alignItems="center"
			sx={{ height: '80%', paddingTop: '15%', paddingBottom: '15%' }}
		>
			<Grid sx={{width: '100%'}}>
				<h3>you are guessing...</h3>
				<br />
				<DogEarButton
					id='buzzer'
					onClick={buzzIn}
					style={greenButton}
					disabled={!buzzerState}
				>
					<h3>buzz in!</h3>
				</DogEarButton>
			</Grid>
		</Grid>
				<DogEarButton
					onClick={buzzRefresh}
					style={redButton}
				>
					<h3>reset buzzer ?</h3>
				</DogEarButton>
		</>
	);
}

export default Buzzer