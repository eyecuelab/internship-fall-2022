import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import socket from '../../../Hooks/WebsocketHook';
import '../../../index.css';

interface Props {
	setSubmitState: Dispatch<SetStateAction<boolean>>;
}

function TeamOverlay(props: Props) {
	const { setSubmitState } = props;
	const [time, setTime] = useState(240);
	const [timerPhase, setTimerPhase] = useState('timer');
	const teamData = JSON.parse(localStorage.getItem('team') as string);

	useEffect(() => {
		socket.on('connection', () => {
			// console.log('socket open');;
		});

		socket.on('tick', (timeInterval: number) => {
			setTime(timeInterval);
		});

		socket.on('ready', () => {
			setTimerPhase('timer');
		});

		socket.on('start_guessing', () => {
			setTime(240);
			setTimerPhase('');
		});

		return () => {
			socket.off('connection');
			socket.off('tick');
			socket.off('start_guessing');
		}
	}, []);

	const formatTimer = (timer: number) => {
		const minutes = Math.floor(timer / 60);
		const seconds = timer - minutes * 60;

		if (timer === 0) { 
			setSubmitState(true); 
		}

		return {'minutes': minutes, 'seconds': seconds.toLocaleString('en-US', {minimumIntegerDigits:2})};
	}

	const timer = formatTimer(time);

  return (
    <>
      <h3>Team</h3>
      <h1>{teamData?.teamName}</h1>
      <br />
      <h3>Points</h3>
      <h1>{teamData?.teamScore}</h1>
      <br />
			{timerPhase === 'timer' ? 
      	<><h3>Timer</h3>
    	  <h1 className={timer.minutes < 1 ? 'panic' : ''}>{timer.minutes}:{timer.seconds}</h1></>
				: null
			}
    </>
  );
}

export default TeamOverlay;
