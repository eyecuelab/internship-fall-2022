import React, { useEffect, useState } from 'react';
import '../../../index.css';
import { Link } from 'react-router-dom';
import { Container, ButtonContainer } from './styles';
import socket from '../../../Hooks/WebsocketHook';
import { whiteButton, greenButton, redButton, DogEarButton } from '../../componentStyles';
import { Game, Haicue, Team, Topic } from '../../../Types/Types';
import { getData } from '../../../ApiHelper';

interface Props {
  handleSwitch?: () => void;
  gameData: Game;
  topicData?: Topic;
	lineAdvancer: () => void;
}

function ModPresenting(props: Props) {
	const { handleSwitch, gameData, topicData, lineAdvancer } = props;
	const [turns, setTurns] = useState(0);
	const [team, setTeam] = useState<Team>();
	const [haiku, setHaiku] = useState<Haicue>();
	const [thisTurn, setThisTurn] = useState();
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
		console.log('important: ', JSON.parse(localStorage.getItem('game') as string).Rounds.slice(-1)[0]);
		const round = (JSON.parse(localStorage.getItem('game') as string).Rounds.slice(-1)[0]);
		console.log('important round: ', round);
		getData(`/rounds/${round.id}`).then((rounds) => {
			console.log('rounds: ', rounds);
			console.log('ROUNDS TURNS: ', rounds.Turns[turns]);
			setThisTurn(rounds.Turns[turns]);
			getData(`/teams/${rounds.Turns[turns].teamId}`).then((team) => {
				console.log(team);
				setTeam(team);
			});
			getData(`/haicues/round/${rounds.Turns[turns].roundId}/team/${rounds.Turns[turns].performingTeamId}`).then((haicue) => {
				console.log('THIS haicue: ', haicue);
				setHaiku(haicue);
				getData(`/team/${haicue.teamId}`).then((team) => {
					setTeam(team);
				});
			});
		});
	}, []);

	useEffect(() => {
		setTeam(team);
		socket.emit('presenting', team);
	}, [team?.id]);

  console.log('PROPS TOPICDATA: ', topicData);

  return (
    <>
      <Container>
        <div>
          <h3>team</h3>
          <h1>{team?.teamName}</h1>
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
        <DogEarButton onClick={handleSwitch} style={whiteButton}>
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
