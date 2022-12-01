import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import socket from '../../../Hooks/WebsocketHook';
import '../../../index.css';

interface Props {
	setSubmitState: Dispatch<SetStateAction<boolean>>;
}

function TeamOverlay(props: Props) {
	const [time, setTime] = useState(180);
	const { setSubmitState } = props;

	useEffect(() => {
		socket.on('connection', () => {
			console.log('socket open');
		});

		socket.on('tick', (timeInterval: number) => {
			setTime(timeInterval);
		});

		return () => {
			socket.off('connection');
			socket.off('tick');
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
      <h1>BLUEBERRY</h1>
      <br />
      <h3>Points</h3>
      <h1>3</h1>
      <br />
      <h3>Timer</h3>
      <h1 style={timer.minutes < 1 ? {color: 'red'} : {color: '#fff'}}>{timer.minutes}:{timer.seconds}</h1>
    </>
  );
}

export default TeamOverlay;
