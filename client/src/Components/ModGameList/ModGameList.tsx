import React from 'react';
import { Grid, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

function GameList() {
  return (
    <>
      <Grid container spacing={33}>
        <Grid container item xs={6} direction="column">
          <h3>GAMES</h3>
        </Grid>
        <Grid container item xs={5} direction="column">
          <h3>STATUS</h3>
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={25}>
        <Grid container item xs={6} direction="column">
          <h4>EVENT NAME</h4>
        </Grid>
        <Grid container item xs={5} direction="column">
          <h3>PENDING</h3>
          <Grid item xs={1} />
          <IconButton aria-label="delete">
            <Delete />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}

export default GameList;
