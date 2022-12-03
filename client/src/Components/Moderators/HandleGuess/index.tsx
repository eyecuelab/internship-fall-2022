import React from 'react';
import '../../../index.css';
import { Container, ButtonContainer, TeamAvatar } from './styles';
import { whiteButton, greenButton, redButton, DogEarButton } from '../../componentStyles';

interface Props {
  handleSwitch?: () => void;
  gameData?: any;
}

function ModHandleGuess(props: Props) {
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
					<br />
          <h3>buzzer pressed!</h3>
          <h1>*insert team*</h1>
					<TeamAvatar src={`/images/${'blueberry'}_icon.png`}/>
        </div>
        <ButtonContainer>
          <DogEarButton onClick={props.handleSwitch}  style={greenButton}>
            <h3>reward points</h3>
          </DogEarButton>
          <br />
          <DogEarButton onClick={props.handleSwitch} style={whiteButton}>
            <h3>dismiss guess</h3>
          </DogEarButton>
          <DogEarButton onClick={props.handleSwitch} style={redButton}>
            <h3>end round</h3>
          </DogEarButton>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default ModHandleGuess;
