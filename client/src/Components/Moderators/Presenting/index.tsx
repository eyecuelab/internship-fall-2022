import React, {useEffect, useState} from 'react';
import '../../../index.css';
import {Container, ButtonContainer} from './styles';
import {whiteButton, greenButton, redButton, DogEarButton} from '../../componentStyles';
import { Game, Haicue, Team, Topic } from '../../../Types/Types';
import { getData } from '../../../ApiHelper';
interface Props {
  handleSwitch?: () => void;
  gameData: Game;
	// teamData: Team;
  haikuData: Haicue;
  topicData?: Topic;
}

function ModPresenting(props: Props) {
	const [turns, setTurns] = useState(0);
	const [team, setTeam] = useState<Team>();
	const [haiku, setHaiku] = useState<Haicue>();
	const [thisTurn, setThisTurn] = useState();
  const [lineNumber, setLineNumber] = useState(1);
  whiteButton.width = '100%';
  redButton.width = '100%';
  greenButton.width = '100%';
  
	useEffect(() => {
		getData(`/rounds/games/${props.gameData.id}`).then((rounds) => {
			setThisTurn(rounds.Turns[turns]);
			getData(`/teams/${rounds.Turns[turns].teamId}`).then((team) => {
				setTeam(team);
				getData(`/haicues/${rounds.Turns[turns]}/${team.id}`).then((haiku) => {
					setHaiku(haiku);
				})
			});
		});
	}, []);

  const lineAdvancer = () => {
    if (lineNumber < 3) {
      setLineNumber(lineNumber + 1);
    } else {
      setLineNumber(1);
    }
  };

  console.log('PROPS TOPICDATA: ', props.topicData);

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
