import React from 'react';
import { Grid, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

interface Props {
	name: string,
}

function Phrase (props: Props) {
	return (
		<>
			<Grid container item xs={7}>
				<h3 style={{ lineHeight: '3.5rem' }}>{ props.name }</h3>
			</Grid>
			<Grid item xs={4} />
			<Grid container item xs={1} justifyContent="flex-end">
				<IconButton aria-label="delete" sx={{ paddingBottom: '0.5rem', maxHeight: '3.5rem' }}>
					<Delete sx={{height: '2.5rem', width: '2.5rem'}}/>
				</IconButton>
			</Grid>
		</>
	);
}

export default Phrase;