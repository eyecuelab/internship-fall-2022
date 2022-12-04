import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import '../../../index.css';
import { Link } from 'react-router-dom';
import {Grid, Button} from '@mui/material';
import {DogEarButton, whiteButton, redButton, greenButton} from '../../componentStyles';
import {Container, ButtonContainer} from './styles';
import {getData, postData} from '../../../ApiHelper';
import { Team } from '../../../Types/Types';
import TeamItem from './TeamItem';
import socket from '../../../Hooks/WebsocketHook';

interface Props {
  gameId: number;
	presentingState: boolean;
	setPresentingState: Dispatch<SetStateAction<boolean>>;
}

function TeamList(props: Props) {
	const [teams, setTeams] = useState([]);
	const [teamArr, setTeamArr] = useState({});
	const user = JSON.parse(localStorage.getItem('user') as string);

	useEffect(() => {
		getTeamList();

		socket.on('submit', () => {
			getTeamStatus();
		});

		return () => {
      socket.off('submit');
    };
	}, []);

	const getTeamList = async () => {
		const TeamList = await getData(`/teams/game/${props.gameId}`);
		setTeams(TeamList);
	};

	const extendTime = () => {
		postData(`/addTime`, [props.gameId]);
	}

	const getTeamStatus = async () => {
		var teamArr = new Array;
		getData(`/rounds/games/${props.gameId}`).then((round) => {
			getData(`/haicues/round/${round[0].id}`).then((haicues) => {
				for (let i = 0; i < haicues.length; i++) {
					teamArr.push(haicues[i].teamId);
				}
				setTeamArr(teamArr);
				
				if (teamArr.length === teams.length) {
					props.setPresentingState(true);
				} 
			});
		})
	  };

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
				{teams?.map((team: Team) => { return <TeamItem key={team.id} team={team} teamArr={teamArr} /> })}
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
          <DogEarButton
		  	style={redButton}
			// TODO(weijwang): for debug only, remove later
			// onMouseOver={() => socket.emit('submit')}
			>
            <h3>END ROUND</h3>
          </DogEarButton>
		  </Link>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default TeamList;

