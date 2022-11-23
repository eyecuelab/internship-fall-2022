import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

interface Props {
	topic: any,
	deleteTopic: (param: number) => void,
}

function Topic (props: any) {
	const { topic, deleteTopic } = props

	return(
		<>
			<Grid container item xs={7}>
				<Link to={{ pathname:`/mod/topic/${topic.id}` }}><h4 style={{ lineHeight: '3.5rem' }}>{ topic.name.toString() }</h4></Link>
			</Grid>
			<Grid container item xs={4} justifyContent="flex-end">
				<h3 style={{width: '100%', textAlign: 'right', lineHeight: '56px'}}>
					{ topic.phrases ? topic.phrases.length : '0' }
				</h3>
			</Grid>
			<Grid container item xs={1} justifyContent="flex-end" alignItems='space-around'>
				<IconButton onClick={() => deleteTopic(topic.id)} aria-label="delete" sx={{ paddingBottom: '0.5rem', maxHeight: '3.5rem' }}>
					<Delete sx={{height: '2.5rem', width: '2.5rem'}}/>
				</IconButton>
			</Grid>
		</>
	);
}

export default Topic;