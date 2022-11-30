import React from 'react';
import '../../index.css';
import { Container, ButtonContainer } from './styles';
import { Button } from '@mui/material';
import { whiteButton, greenButton, redButton } from '../componentStyles';

function ModPresenting() {
  whiteButton.width = '100%';
  redButton.width = '100%';
  greenButton.width = '100%';

  return (
    <>
      <Container>
        <div>
          <h3>*insert team name*</h3>
          <h1>*insert topic*</h1>
          <br />
          <h3>line *insert line #*</h3>
          <h1>*Haiku line x*</h1>
        </div>
        <ButtonContainer>
          <Button sx={whiteButton}>
            <h3>advance haicue clue</h3>
          </Button>
          <br />
          <Button sx={redButton}>
            <h3>end round</h3>
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default ModPresenting;
