import React from 'react';
import '../../../index.css';
import { Container, ButtonContainer } from './styles';
import { Button } from '@mui/material';
import { whiteButton, greenButton, redButton, DogEarButton } from '../../componentStyles';
interface Props {
  handleSwitch?: () => void;
  gameData?: any
  haikuData?:any
  ;
}

function ModPresenting(props: Props) {
  whiteButton.width = '100%';
  redButton.width = '100%';
  greenButton.width = '100%';
  console.log(props.haikuData)

  return (
    <>
      <Container>
        <div>
          <h3>team</h3>
          <h1>insert topic info</h1>
          <br />
          <br />
          <h3>line *insert line #*</h3>
          <h1>*Haiku line x*</h1>
        </div>
        <ButtonContainer>
          <DogEarButton onClick={props.handleSwitch} style={whiteButton}>
            <h3>advance haicue clue</h3>
          </DogEarButton>
          <DogEarButton onClick={props.handleSwitch} style={redButton}>
            <h3>end round</h3>
          </DogEarButton>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default ModPresenting;
