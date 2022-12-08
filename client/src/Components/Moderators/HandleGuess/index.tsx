import React, { useEffect } from 'react';
import '../../../index.css';
import { Link } from 'react-router-dom';
import socket from '../../../Hooks/WebsocketHook';
import { Container, ButtonContainer, TeamAvatar } from './styles';
import { whiteButton, greenButton, redButton, DogEarButton } from '../../componentStyles';
import { Team } from '../../../Types/Types';

interface Props {
  handleSwitch?: () => void;
  gameData?: any;
  haikuData?: any;
  topicData?: any;
	guessingTeam: Team
}

function ModHandleGuess(props: Props) {
  whiteButton.width = '100%';
  redButton.width = '100%';
  greenButton.width = '100%';

  useEffect(() => {
		socket.on('connection', () => {
			console.log('socket open');
		});

		return () => {
			socket.off('connection');
		}
	}, []);
 


  return (
    <>
      <Container>
        <div>
          <h3>*insert team name*</h3>
          <h1>{props.haikuData.Phrase}</h1>
					<br />
					<br />
          <h3>buzzer pressed!</h3>
          <h1>{props.guessingTeam.teamName}</h1>
					<TeamAvatar src={`/images/${props.guessingTeam.teamName}_icon.png`}/>
        </div>
        <ButtonContainer>
          <DogEarButton onClick={props.handleSwitch}  style={greenButton}>
            <h3>reward points</h3>
          </DogEarButton>
          <DogEarButton onClick={props.handleSwitch} style={whiteButton}>
            <h3>dismiss guess</h3>
          </DogEarButton>
          <Link to={`/game/${props.gameData.id}/round`}>
            <DogEarButton onClick={props.handleSwitch} style={redButton}>
              <h3>end round</h3>
            </DogEarButton>
          </Link>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default ModHandleGuess;
