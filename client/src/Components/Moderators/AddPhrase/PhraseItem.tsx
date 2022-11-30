import React from 'react';
import { Grid, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { Phrase } from '../../../Types/Types';

interface Props {
	phrase: Phrase,
	deletePhrase: (param: any) => void
}

function PhraseItem (props: Props) {
	const { phrase, deletePhrase } = props;

	return (
		<>
			<Grid container item xs={7}>
				<h3 style={{ lineHeight: '3.5rem' }}>{ phrase.body }</h3>
			</Grid>
			<Grid item xs={4} />
			<Grid container item xs={1} justifyContent="flex-end">
				<IconButton onClick={() => deletePhrase(phrase.id)} aria-label="delete" sx={{ paddingBottom: '0.5rem', maxHeight: '3.5rem' }}>
					<Delete sx={{height: '2.5rem', width: '2.5rem'}}/>
				</IconButton>
			</Grid>
		</>
	);
}

export default PhraseItem;