import React from 'react';
import { TextField, Button } from '@mui/material';
import { greenButton } from '../componentStyles';
import '../../index.css';

interface Props {
	handleSubmitNewGame: () => void;
}

function ModNewGame(props: Props) {
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
      <Button sx={greenButton} variant="outlined" onClick={props.handleSubmitNewGame}>
        <h3>Continue</h3>
      </Button>
    </div>
  );
}

export default ModNewGame;
