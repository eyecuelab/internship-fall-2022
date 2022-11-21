import React from 'react';
import { Grid, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

interface Props {
	name: String,
}

function Phrase (props: Props) {
	return (
		<Grid container spacing={2}>
			<Grid container item xs={11} direction="column">
				<h3>{ props.name }</h3>
			</Grid>
			<Grid container item xs={1} direction="column">
				<IconButton aria-label="delete">
					<Delete />
				</IconButton>
			</Grid>
		</Grid>
	);
}

export default Phrase;