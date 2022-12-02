import React, {useState, useEffect} from 'react';
import '../../../index.css';
import {Grid, Button} from '@mui/material';
import {whiteButton, redButton, DogEarButton} from '../../componentStyles';
import {Container, ButtonContainer} from './styles';
import {getData} from '../../../ApiHelper';
import { Team } from '../../../Types/Types';
import TeamItem from './TeamItem';

interface Props {
//   handleSwitch?: () => void;
//   gameId: number;
}

function TeamList(props: Props) {
	const [teams, setTeams] = useState([]);

	const getTeamList = async () => {
		const TeamList = await getData(`/teams`);
		setTeams(TeamList);
	};

	useEffect(() => {
		getTeamList();
	}, []);

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
          <DogEarButton style={whiteButton} >
            <h3>EXTENDS 30 SECONDS</h3>
          </DogEarButton>
          <br />
          <br />
          <DogEarButton style={redButton} >
            <h3>END ROUND</h3>
          </DogEarButton>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default TeamList;
