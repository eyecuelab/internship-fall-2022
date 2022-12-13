import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ReactConfetti from 'react-confetti';
import { getData } from '../../../ApiHelper';
import { Team } from '../../../Types/Types';

function Score () {
	const [team, setTeam] = useState<Team>(JSON.parse(localStorage.getItem('team') as string));

	useEffect(() => {
		const thisTeam = JSON.parse(localStorage.getItem('team') as string);
		getData(`/team/${thisTeam.id}`).then((team) => {
			setTeam(team);
		});
	}, []);

	return (
		<>
		<ReactConfetti width={window.outerWidth*1.4} height={window.outerHeight*1.4} numberOfPieces={300} gravity={0.25} recycle={false} style={{margin:'auto'}}/>
			<Grid
				container
				alignItems="center"
				justifyContent="center"
				sx={{ height: '100%', paddingTop: '15%', paddingBottom: '15%' }}
			>
				<h3 className="fade-in-down" style={{ display: 'block', width: '100%', textAlign: 'center' }}>your team has scored</h3>
				<h2 className="fade-in-left" style={{ width: '100%', textAlign: 'center'}}>{team.points}</h2>
				<h3 className="fade-in-left">points</h3>
			</Grid>
		</>
	);
}

export default Score;