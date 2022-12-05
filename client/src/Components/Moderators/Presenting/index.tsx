import React, {useState} from 'react';
import '../../../index.css';
import {Container, ButtonContainer} from './styles';
import {Button} from '@mui/material';
import {whiteButton, greenButton, redButton, DogEarButton} from '../../componentStyles';
interface Props {
  handleSwitch?: () => void;
  gameData?: any;
  haikuData?: any;
  topicData?: any;
}

function ModPresenting(props: Props) {
  whiteButton.width = '100%';
  redButton.width = '100%';
  greenButton.width = '100%';
  const [lineNumber, setLineNumber] = useState(1);
  

  const lineAdvancer = () => {
    if (lineNumber < 3) {
      setLineNumber(lineNumber + 1);
    } else {
      setLineNumber(1);
    }
  };

  console.log(props.topicData)

  return (
    <>
      <Container>
        <div>
          <h3>team</h3>
          <h1>{props.topicData.name}</h1>
          <br />
          <br />
          <h3>line {lineNumber}</h3>
          <h1>
            {lineNumber == 3 ?
              props.haikuData.line3 :
              lineNumber == 2 ?
              props.haikuData.line2 :
              props.haikuData.line1}
          </h1>
        </div>
        <ButtonContainer>
        <DogEarButton onClick={props.handleSwitch} style={whiteButton}>
            <h3>fake buzzer</h3>
          </DogEarButton>
          <DogEarButton onClick={lineAdvancer} style={whiteButton}>
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
