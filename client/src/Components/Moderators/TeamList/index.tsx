import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import '../../../index.css';
import { Link } from 'react-router-dom';
import {Grid, Button} from '@mui/material';
import {DogEarButton, whiteButton, redButton, greenButton} from '../../componentStyles';
import {Container, ButtonContainer} from './styles';
import {getData, postData} from '../../../ApiHelper';
import { Team } from '../../../Types/Types';
import TeamItem from './TeamItem';

interface Props {
  gameId: number;
	presentingState: boolean;
	setPresentingState: Dispatch<SetStateAction<boolean>>;
}

function TeamList(props: Props) {
	const [teams, setTeams] = useState([]);
	const user = JSON.parse(localStorage.getItem('user') as string);

	useEffect(() => {
		getTeamList();
	}, []);

	const getTeamList = async () => {
		const TeamList = await getData(`/teams/game/${props.gameId}`);
		setTeams(TeamList);
	};

	const extendTime = () => {
		postData(`/addTime`, [props.gameId]);
	}

  whiteButton.width = '100%';
  redButton.width = '100%';

  return (
    <>
      <Container>
        <Grid container>
          <Grid container item xs={5} direction="column">
            <h3>GAMES</h3>
          </Grid>
          <Grid container item xs={3} direction="column">
            <h3 style={{textAlign: 'right'}}>SCORE</h3>
          </Grid>
          <Grid container item xs={4} direction="column">
            <h3 style={{textAlign: 'right'}}>STATUS</h3>
          </Grid>
        </Grid>
        <div>
          <hr />
        </div>
		<Grid container>
				{teams?.map((team: Team) => { return <TeamItem key={team.id} team={team} /> })}
			</Grid>
        <ButtonContainer>
		<Link to={`/game/${props.gameId}/presenting`}>
		      {props.presentingState ? <DogEarButton style={greenButton} >
            <h3>Start Reading</h3>
          </DogEarButton> : null }
		  </Link>
          <DogEarButton onClick={() => extendTime()} style={whiteButton} >
            <h3>EXTENDS 30 SECONDS</h3>
          </DogEarButton>
		  <Link to={`/game/${props.gameId}/round`}>
          <DogEarButton style={redButton} >
            <h3>END ROUND</h3>
          </DogEarButton>
		  </Link>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default TeamList;

