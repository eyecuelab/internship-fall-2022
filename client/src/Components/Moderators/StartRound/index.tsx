import React from 'react';
import '../../../index.css';
import { Container, ButtonContainer } from './styles';
import { Button } from '@mui/material';
import { whiteButton, greenButton, redButton, DogEarButton } from '../../componentStyles';
import { postData } from '../../../ApiHelper';

function ModStartRound() {
	const gameId = Number(localStorage.getItem('gameId'));

	const startRound = () => {
		postData('/start', gameId);
	}

  whiteButton.width = '100%';
  redButton.width = '100%';
  greenButton.width = '100%';

  return (
    <>
      <Container>
        <div>
          <h3>round *insert number* topic</h3>
          <hr />
          <h1>*insert topic*</h1>
          <br />
        </div>
        <ButtonContainer>
          <DogEarButton onClick={startRound} style={greenButton}>
            <h3>start round</h3>
          </DogEarButton>
          <DogEarButton style={whiteButton}>
            <h3>back to selection</h3>
          </DogEarButton>
          <DogEarButton style={redButton}>
            <h3>end game</h3>
          </DogEarButton>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default ModStartRound;
