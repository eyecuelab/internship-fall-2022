import React from 'react';
import { Grid, IconButton, Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { greenButton } from '../componentStyles';

function ModGameList() {
  greenButton.width = '100%';

  return (
    <>
      <Grid container spacing={33}>
        <Grid container item xs={6} direction="column">
          <h3>GAMES</h3>
        </Grid>
        <Grid container item xs={6} direction="column">
          <h3>STATUS</h3>
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={2}>
        <Grid container item xs={6} direction="column">
          <h4>EVENT NAME</h4>
        </Grid>
        <Grid container item xs={5} direction="column">
          <h3 style={{ textAlign: 'right' }}>PENDING</h3>
          <Grid item xs={1} />
          <IconButton aria-label="delete">
            <Delete />
          </IconButton>
        </Grid>
      </Grid>
      <Button sx={greenButton} style={{ position: 'relative', top: 480 }} variant="outlined">
        <h3>CREATE A NEW GAME</h3>
      </Button>
    </>
  );
}

export default ModGameList;
