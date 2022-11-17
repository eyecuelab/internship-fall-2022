import React from 'react';
import { TextField, Button } from '@mui/material';
import { greenButton } from '../componentStyles';
import { postData } from '../../ApiHelper';
import '../../index.css';

interface Props {
	handleCreateNewGame: () => void;
}

function ModNewGame(props: Props) {

	const createNewGame = () => {
		postData('/games', { name: 'haicue game', joinCode: 'XXYY' });
		props.handleCreateNewGame();
	}

  greenButton.width = '100%';

  return (
    <div style={{ position: 'relative', height: '95%' }}>
      <h3>new game name</h3>
      <br />
      <TextField
        fullWidth
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
      <label>
        <h5>15 characters max</h5>
      </label>
      <br />
      <Button onClick={createNewGame} sx={greenButton} variant="outlined">
        <h3>Continue</h3>
      </Button>
    </div>
  );
}

export default ModNewGame;
