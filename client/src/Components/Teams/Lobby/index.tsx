import React from 'react';
import { Grid } from '@mui/material';
import '../../../index.css';
import { Game, Team } from '../../../Types/Types';

interface Props {
	game: Game;
	team: Team;
	phase: boolean;
}

function TeamLobby(props: Props) {
	const { game, team, phase } = props;

  return (
    <Grid
      container
      alignItems="center"
      sx={{ height: '100%', paddingTop: '15%', paddingBottom: '15%' }}
    >
      <Grid item>
        {phase ? <><h3 id="phase-down">team {team.teamName},<br /> get ready for</h3>
				<h1 id="phase-left">round {game.rounds}</h1></>
				 : <><h3 className="fade-in-down" style={{ width: '65%' }}>you are invited to be the team lead for</h3>
        <h1 className="fade-in-left" style={{ marginTop: '1rem' }}>team {team?.teamName}</h1></> }
      </Grid>
      <h5 className="fade-in-up">{'waiting for moderator to start the game...'}</h5>
    </Grid>
  );
}

export default TeamLobby;
