import React, {useState, useEffect} from 'react';
import '../../../index.css';
import {Link} from 'react-router-dom';
import {Grid} from '@mui/material';
import {DogEarButton, whiteButton, redButton, greenButton} from '../componentStyles';
import {Container, ButtonContainer} from './styles';
import {getData} from '../../ApiHelper';
import {Game, Team} from '../../Types/Types';
import TeamFinalItem from './TeamFinalItem';
import socket from '../../Hooks/WebsocketHook';
import ReactConfetti from 'react-confetti';

interface Props {
  gameId: Game;
}

function EndGame(props: Props) {
  const [teams, setTeams] = useState([]);
  const [game, setGame] = useState(JSON.parse(localStorage.getItem('game') as string));
  const user = JSON.parse(localStorage.getItem('user') as string);

  useEffect(() => {
    getData(`/teams/game/${game.id}`).then(teams => {
      setTeams(teams);
    });
  }, []);

  whiteButton.width = '100%';
  redButton.width = '100%';

	const handleEndGame = () => {
		socket.emit('end_game');
	}

  return (
    <>
			<ReactConfetti width={window.outerWidth*1.4} height={window.outerHeight*1.4} numberOfPieces={300} gravity={0.25} recycle={false} style={{margin:'auto'}}/>
      <Container>
        <Grid container>
          <Grid container item xs={10} direction="column">
            <h3>TEAM</h3>
          </Grid>
          <Grid container item xs={2} direction="column">
            <h3 style={{textAlign: 'right'}}>SCORE</h3>
          </Grid>
        </Grid>
        <div>
          <hr />
        </div>
        <Grid container>
          {teams?.map((team: Team) => {
            return <TeamFinalItem key={team.id} team={team} />;
          })}
        </Grid>
        <ButtonContainer>
          <Link to={`/game/${props.gameId}/round`}>
            <DogEarButton style={redButton} onClick={handleEndGame}>
              <h3>END GAME</h3>
            </DogEarButton>
          </Link>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default EndGame;
