import React from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

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
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}

export default GameList;
