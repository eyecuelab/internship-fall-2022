import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../index.css';

function ModNewGame() {
	return (
		<div style={{ position: 'relative', height: '95%' }}>
			<h3>new game name</h3>
			<br />
			<TextField
				fullWidth
				sx={{ mt: 0 }}
				id="standard-basic"
				variant="standard"
				name="game title"
				type="text"
				multiline
				InputProps={{
					style: {
						fontFamily: 'LuloCleanOneBold',
						fontStyle: 'normal',
						fontWeight: '700',
						fontSize: '42px',
						lineHeight: '50px',
						color: '#363636',
					},
				}}
			/>
			<label><h5>Easy, buster. 15 characters max</h5></label>
			<br/>
			<Button
				sx={{
					height: '5rem',
					width: '100%',
					color: '#363636',
					backgroundColor: '#61C14A',
					border: '1px solid #363636',
					borderRadius: '10px'
					// position: 'absolute',
					// bottom: '0',
					// left: '0',
				}}
				variant="outlined"
			>
				<h3>Continue</h3>
			</Button>
		</div>
	);
}

export default ModNewGame;
