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
	turnData?: Turn;
	teamData?: Team;
	turn: number;
  lineNumber: Number;
}

function ModPresenting(props: Props) {
	const { handleSwitch, gameData, turn, lineAdvancer, lineNumber } = props;
	// @ts-ignore
	const [team, setTeam] = useState<Team>({teamName: ''});
	// @ts-ignore
	const [haiku, setHaiku] = useState<Haicue>({line1: '', line2: '', line3: '', Phrase: { body: '' }});
	const [thisTurn, setThisTurn] = useState<Turn>();
  // const [lineNumber, setLineNumber] = useState(1);
  whiteButton.width = '100%';
  redButton.width = '100%';
  greenButton.width = '100%';

  useEffect(()=>{
    socket.on('connection', () => {
			// console.log('socket open');;
		});

		socket.on('buzz', () => {
			handleSwitch;
		});

		return () => {
			socket.off('connection');
		}
  }, []);
  
	useEffect(() => {
		const game = JSON.parse(localStorage.getItem('game') as string);
		getData(`/rounds/${game.Rounds.slice(-1)[0].id}`).then((round) => {
			getData(`/turns/presentingTeam/${round.Turns[turn].id}`).then((turn) => {
				setThisTurn(turn);
				setTeam(turn.performingTeam);
				socket.emit('presenting', turn.performingTeam);
				getData(`/haicues/round/${round.id}/team/${turn.performingTeamId}`).then((haiku) => {
					setHaiku(haiku)
				});
			});
		});
	}, []);

  return (
    <>
      <Container>
        <div>
          <h3>{team.teamName}</h3>
          <h1>{haiku.Phrase.body}</h1>
          <br />
          <br />
          <h3>line {Number(lineNumber)}</h3>
          <h1>
            { lineNumber == 3 ?
              haiku.line3 :
              lineNumber == 2 ?
              haiku.line2 :
              haiku.line1 }
          </h1>
        </div>
        <ButtonContainer>
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
