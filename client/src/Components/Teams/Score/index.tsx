import { Grid } from '@mui/material';
import React from 'react';
import ReactConfetti from 'react-confetti';

function Score () {
	return (
		<>
		<ReactConfetti width={window.outerWidth*1.4} height={window.outerHeight*1.4} numberOfPieces={300} gravity={0.25} recycle={false} style={{margin:'auto'}}/>
			<Grid
				container
				alignItems="center"
				justifyContent="center"
				sx={{ height: '100%', paddingTop: '15%', paddingBottom: '15%' }}
			>
				<h3 className="fade-in-down" style={{ display: 'block', width: '100%', textAlign: 'center' }}>your team scored</h3>
				<h2 className="fade-in-left" style={{ width: '100%', textAlign: 'center'}}>{'5'}</h2>
				<h3 className="fade-in-left">points</h3>
			</Grid>
		</>
	);
}

export default Score;