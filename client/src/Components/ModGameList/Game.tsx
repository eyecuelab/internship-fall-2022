import React from 'react';
import { Grid, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

function Game (props: any) {
	const { name, publishedAt } = props;

	return (
		<>
			<Grid container item xs={7}>
				<h4 style={{ lineHeight: '3.5rem' }}>{ name.toString() }</h4>
			</Grid>
			<Grid container item xs={4} justifyContent='flex-end'>
				<h3 style={{ width: '100%', textAlign: 'right', lineHeight: '56px'}}>
					{ publishedAt ? 'published' : 'pending' }
				</h3>
			</Grid>
			<Grid container item xs={1} justifyContent='flex-end'>
				<IconButton aria-label="delete" sx={{ paddingBottom: '0.5rem', maxHeight: '3.5rem' }}>
					<Delete sx={{height: '2.5rem', width: '2.5rem'}}/>
				</IconButton>
			</Grid>
		</>
	);
}

export default Game;
