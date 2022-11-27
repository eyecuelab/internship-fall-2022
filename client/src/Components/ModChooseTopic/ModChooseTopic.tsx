import React from 'react';
import '../../index.css';
import { Container, ButtonContainer } from './styles';
import { Button } from '@mui/material';
import { whiteButton, redButton } from '../componentStyles';

function ModChooseTopic() {
  whiteButton.width = '100%';
  redButton.width = '100%';

  return (
    <>
      <Container>
        <div>
          <h3>choose a new round topic</h3>
          <hr />
          <br />
          <Button sx={whiteButton}>
            <h3>phrase to be passed</h3>
          </Button>
          <br />
          <br />
        </div>
        <ButtonContainer>
          <Button sx={redButton}>
            <h3>end game</h3>
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default ModChooseTopic;
