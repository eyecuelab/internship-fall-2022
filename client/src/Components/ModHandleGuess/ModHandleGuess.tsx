import React from 'react';
import '../../index.css';
import { Container, ButtonContainer } from './styles';
import { Button } from '@mui/material';
import { whiteButton, greenButton, redButton } from '../componentStyles';

function ModHandleGuess() {
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
          <h3>buzzer pressed!</h3>
          <h1>*insert team*</h1>
        </div>
        <ButtonContainer>
          <Button sx={greenButton}>
            <h3>reward points</h3>
          </Button>
          <Button sx={whiteButton}>
            <h3>dismiss guess</h3>
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

export default ModHandleGuess;
