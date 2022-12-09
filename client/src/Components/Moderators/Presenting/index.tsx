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
  haikuData?: any;
	lineAdvancer: () => void;
	turnData: Turn;
	teamData: Team;
	turn: number;
  lineNumber: Number;
}

function ModPresenting(props: Props) {
	const { handleSwitch, gameData, turnData, teamData, turn, lineAdvancer, lineNumber } = props;
	// @ts-ignore
	const [team, setTeam] = useState<Team>({teamName: ''});
	// @ts-ignore
	const [haiku, setHaiku] = useState<Haicue>({line1: '', line2: '', line3: '', Phrase: { body: '' }});
	const [thisTurn, setThisTurn] = useState<Turn>();
  const [lineNumber, setLineNumber] = useState(1);
  	// @ts-ignore
  const [phrase, setPhrase]=useState({body: ""});

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

//		const game = JSON.parse(localStorage.getItem('game') as string);
//		getData(`/rounds/${game.Rounds.slice(-1)[0].id}`).then((round) => {
//			console.log('GET ROUND: ', round);
//			console.log('ROUND TURNS', round.Turns);
//			getData(`/turns/presentingTeam/${round.Turns[turn].id}`).then((turn) => {
//				console.log('GET TURN: ', turn);
//				setThisTurn(turn);
//				setTeam(turn.performingTeam);
//				console.log(turn.performingTeam);
//				socket.emit('presenting', turn.performingTeam);
//				setHaiku(turn.Haicue);
//			});

		setThisTurn(turnData);
		console.log(turnData);
		getData(`/team/${turnData.performingTeamId}`).then((team) => {
			setTeam(team);
		});
    getData(`/phrases/single/${props.haikuData[0].phraseId}`).then((phrase) => {
			setPhrase(phrase);
		});
		getData(`/turns/presentingTeam/${turnData.performingTeamId}`).then((turn) => {
			setHaiku(turn.Haicue);

		});


    // setThisTurn(turnData);
		// getData(`/team/${turnData.performingTeamId}`).then((team) => {
		// 	setTeam(team);
		// });
		// getData(`/turns/presentingTeam/${turnData.id}`).then((turn) => {
		// 	console.log('turn', turn);
		// 	setHaiku(turn.Haicue);
		// });
	}, []);

  console.log(phrase.body);

  useEffect(() => {
	
	}, []);

  console.log(phrase)

	useEffect(() => {
		console.log('turnData: ', turnData);
		console.log('teamData: ', teamData);
		// getData(`/team/${turnData.performingTeamId}`).then((team) => {
		// 	setTeam(team);
		// });
		// getData(`/turns/presentingTeam/${turnData.performingTeamId}`).then((turn) => {
		// 	console.log(turn);
		// 	setHaiku(turn.Haicue);
		// });
	}, []);

	// useEffect(() => {
	// 	setLineNumber(turn);
	// }, [turn]);

	const buzzer = () => {
		socket.emit('buzz');
	}

  // console.log(props.haikuData[0].phraseId)

  return (
    <>
      <Container>
        <div>
          <h3>{team.teamName}</h3>
         {/* <h1>phrase</h1> */}
          <h1>{phrase.body}</h1>
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
