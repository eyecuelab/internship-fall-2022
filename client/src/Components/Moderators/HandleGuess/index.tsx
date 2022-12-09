import React, { useEffect } from 'react';
import '../../../index.css';
import { Link } from 'react-router-dom';
import socket from '../../../Hooks/WebsocketHook';
import { Container, ButtonContainer, TeamAvatar } from './styles';
import { whiteButton, greenButton, redButton, DogEarButton } from '../../componentStyles';
import { Game, Haicue, Team, Turn } from '../../../Types/Types';

interface Props {
  handleSwitch?: () => void;
  gameData?: Game;
  haikuData?: Haicue;
	guessingTeam: Team;
	assignPoints: () => void;
	turnData: Turn;
}

function ModHandleGuess(props: Props) {
	const { handleSwitch, gameData, haikuData, turnData, guessingTeam, assignPoints } = props;
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
          <h3>{guessingTeam.teamName}</h3>
          <h1>{haikuData?.Phrase.body}</h1>
					<br />
					<br />
          <h3>buzzer pressed!</h3>
          <h1>{guessingTeam.teamName}</h1>
					<TeamAvatar src={`/images/${guessingTeam.teamName}_icon.png`}/>
        </div>
        <ButtonContainer>
          <DogEarButton onClick={assignPoints}  style={greenButton}>
            <h3>reward points</h3>
          </DogEarButton>
          <DogEarButton onClick={handleSwitch} style={whiteButton}>
            <h3>dismiss guess</h3>
          </DogEarButton>
          <Link to={`/game/${gameData?.id}/round`}>
            <DogEarButton onClick={handleSwitch} style={redButton}>
              <h3>end round</h3>
            </DogEarButton>
          </Link>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default ModHandleGuess;
