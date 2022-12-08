import React from 'react';
import {Grid} from '@mui/material';
import {Team} from '../../Types/Types';

interface Props {
  team: Team;
}

function TeamFinalItem(props: Props) {
  const {team} = props;

  return (
    <>
      <Grid container>
        <Grid container item xs={10} direction="column">
          <h4 style={{lineHeight: '64px'}}> {team.teamName} </h4>
        </Grid>
        <Grid container item xs={2} direction="column">
          <h3 style={{textAlign: 'center', lineHeight: '64px'}}> {team.teamScore} </h3>
        </Grid>
      </Grid>
    </>
  );
}

export default TeamFinalItem;
