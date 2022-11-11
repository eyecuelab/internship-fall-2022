import React from 'react';
import '../../index.css';
import { Grid, Button } from '@mui/material';
import { Container, FlexItem } from './styles';

function ModOverlay() {
	return (
		<>
			<Grid
				container
				direction="column"
				justifyContent="space-between"
				alignItems="center"
				sx={{height: '100%', width: '100%', margin: 'auto', display: 'block'}}
			>
				<Grid item xs={12} md={12} lg={12}>
					<h3>Team</h3>
					<h1>MODS</h1>
					<br />
					{/* render when editing topics/phrases for a game */}
					{/* <h3>Name</h3>
          <h1>{'EyeCue Winter 2023'}</h1>
          <br /> */}
					{/* render while game is in progress */}
					{/* <h3>Round</h3>
          <h1>{'3'}</h1>
          <br /> */}
					{/* render during brainstorming phase each round */}
					{/* <h3>Timer</h3>
          <h1>{'47'}</h1>
          <br /> */}
					{/* render during guessing phase */}
					{/* <h3>Teams left</h3>
          <h1>{'4'}</h1>
          <br /> */}
				</Grid>
				<Grid item xs={12} sx={{width: '90%', position: 'absolute', left: 25, bottom: 100}}>
					<Button
						sx={{
							height: '5rem',
							width: '100%',
							color: '#363636',
							border: '1px solid #363636',
							borderRadius: '10px',
							background: '#bbb',
							margin: 'auto',
							display: 'block'
						}}
					>
						<h3>some text</h3>
					</Button>
					<br />
					<Button
						sx={{
							height: '5rem',
							width: '100%',
							color: '#363636',
							border: '1px solid #363636',
							borderRadius: '10px',
							background: '#bbb',
						}}
					>
						<h3>some text</h3>
					</Button>
				</Grid>
			</Grid>
		</>
	);
}

export default ModOverlay;
