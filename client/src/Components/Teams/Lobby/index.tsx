import React from 'react';
import { Grid } from '@mui/material';
import '../../../index.css';

function TeamLobby() {
  return (
    <Grid
      container
      alignItems="center"
      sx={{ height: '100%', paddingTop: '15%', paddingBottom: '15%' }}
    >
      <Grid item>
        <h3 className="fade-in-down" style={{ width: '65%' }}>you are invited to be the team lead for</h3>
        {/* <h3 className="fade-in-down">team {'blueberry'},\n get ready for</h3> */}
        <h1 className="fade-in-left" style={{ marginTop: '1rem' }}>{'team blueberry'}</h1>
      </Grid>
      <h5 className="fade-in-up">{'waiting for moderator to start the game...'}</h5>
    </Grid>
  );
}

export default TeamLobby;
