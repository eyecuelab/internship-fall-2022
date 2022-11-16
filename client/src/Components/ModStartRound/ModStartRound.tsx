import React from 'react';
import '../../index.css';
import {Container, GridButton, GridHeader, GridStyle, } from './styles'
import {Grid, Button} from '@mui/material';
import {whiteButton, greenButton, redButton} from '../componentStyles';

function ModStartRound() {
  whiteButton.width = '100%';
  redButton.width = '100%';
  greenButton.width = '100%';

  return (
    <>
      <div>
          <h3>round *insert number* topic</h3>
          <hr />
          <h1>passed-in topic</h1>
          <br />
     </div>
      
    <Container>
        <Button sx={greenButton}>
          <h3>start round</h3>
        </Button>
        <br />
        <Button sx={whiteButton}>
          <h3>back to selection</h3>
        </Button>
        <br />
        <Button sx={redButton}>
          <h3>end game</h3>
        </Button>
  </Container>
  </>
  );
}

export default ModStartRound;
