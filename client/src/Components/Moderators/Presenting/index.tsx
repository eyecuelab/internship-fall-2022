import React, { useEffect, useState } from 'react';
import '../../../index.css';
import { Link } from 'react-router-dom';
import { Container, ButtonContainer } from './styles';
import socket from '../../../Hooks/WebsocketHook';
import { whiteButton, greenButton, redButton, DogEarButton } from '../../componentStyles';
import { Game, Haicue, Team, Topic, Turn } from '../../../Types/Types';
import { getData } from '../../../ApiHelper';

interface Props {
  handleSwitch?: () => void;
  gameData: Game;
  topicData?: Topic;
	lineAdvancer: () => void;
	turnData: Turn;
}

function ModPresenting(props: Props) {
	const { handleSwitch, gameData, topicData, turnData, lineAdvancer } = props;
	const [turns, setTurns] = useState(0);
	// @ts-ignore
	const [team, setTeam] = useState<Team>({teamName: ''});
	const [haiku, setHaiku] = useState<Haicue>();
	const [thisTurn, setThisTurn] = useState<Turn>();
  const [lineNumber, setLineNumber] = useState(1);
  whiteButton.width = '100%';
  redButton.width = '100%';
  greenButton.width = '100%';

  useEffect(()=>{
    socket.on('connection', () => {
			console.log('socket open');
		});

		socket.on('buzz', () => {
			handleSwitch;
		});

		return () => {
			socket.off('connection');
		}
  }, []);
  
	useEffect(() => {
		setThisTurn(turnData);
		console.log(turnData);
		getData(`/team/${turnData.performingTeamId}`).then((team) => {
			setTeam(team);
		});
		getData(`/turns/presentingTeam/${turnData.performingTeamId}`).then((turn) => {
			setHaiku(turn.Haicue);
		});
	}, []);

	useEffect(() => {
		setTeam(team);
		socket.emit('presenting', team);
	}, [team?.id]);

	const buzzer = () => {
		socket.emit('buzz');
	}

  return (
    <>
      <Container>
        <div>
          <h3>team</h3>
          <h1>{team.teamName}</h1>
          <br />
          <br />
          <h3>line {lineNumber}</h3>
          <h1>
            {lineNumber == 3 ?
              haiku?.line3 :
              lineNumber == 2 ?
              haiku?.line2 :
              haiku?.line1 }
          </h1>
        </div>
        <ButtonContainer>
        <DogEarButton onClick={buzzer} style={whiteButton}>
            <h3>fake buzzer</h3>
          </DogEarButton>
          <DogEarButton onClick={lineAdvancer} style={whiteButton}>
            <h3>advance haicue clue</h3>
          </DogEarButton>
          <Link to={`/game/${gameData.id}/round`}>
            <DogEarButton onClick={handleSwitch} style={redButton}>
              <h3>end round</h3>
            </DogEarButton>
          </Link>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default ModPresenting;
