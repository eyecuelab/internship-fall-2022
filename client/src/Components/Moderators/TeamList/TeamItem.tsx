import React from 'react';
import { Grid} from '@mui/material';
import { Team } from '../../../Types/Types';

interface Props {
	team: Team,
}

function TeamItem (props: Props) {
	const { team } = props

	return(
		<>
       <Grid container>
          <Grid container item xs={6} direction="column">
		  <h4 style={{lineHeight: '64px'}}> {team.teamName} </h4>
          </Grid>
          <Grid container item xs={2} direction="column">
            <h3 style={{textAlign: 'center', lineHeight: '64px'}}> {team.teamScore} </h3>
          </Grid>
          <Grid container item xs={4} direction="column">
            <h3 style={{textAlign: 'right', lineHeight: '64px'}}> {(team.id === 1) ? 'done' : 'not yet'}</h3>
          </Grid>
        </Grid>
		</>
	);
}

export default TeamItem;
