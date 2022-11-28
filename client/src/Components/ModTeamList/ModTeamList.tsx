import React from 'react';
import '../../index.css';
import { Grid, Button } from '@mui/material';
import { whiteButton, redButton } from '../componentStyles';

function TeamList() {
  whiteButton.width = '100%';
  redButton.width = '100%';
  return (
    <>
      <Grid
        container
        direction ="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          height: '100%',
          width: '100%',
          margin: 'auto',
          display: 'block',
        }}
      >
        <Grid item xs={12} md={12} lg={12}>

        </Grid>
      </Grid>









      <Grid container spacing={2}>
        <Grid container item xs={4} direction="column">
          <h3>GAMES</h3>
        </Grid>
        <Grid container item xs={4} direction="column">
          <h3 style={{ textAlign: 'right' }}>SCORE</h3>
        </Grid>
        <Grid container item xs={4} direction="column">
          <h3 style={{ textAlign: 'right' }}>STATUS</h3>
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={3}>
        <Grid container item xs={6} direction="column">
          <br />
          <h4>BLUEBERRY</h4>
        </Grid>
        <Grid container item xs={1} direction="column">
          <br />
          <h3 style={{ textAlign: 'right' }}>7</h3>
        </Grid>
        <Grid container item xs={5} direction="column">
          <br />
          <h3 style={{ textAlign: 'right' }}>DONE</h3>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid container item xs={6} direction="column">
          <br />
          <h4>APPLE</h4>
        </Grid>
        <Grid container item xs={1} direction="column">
          <br />
          <h3 style={{ textAlign: 'right' }}>5</h3>
        </Grid>
        <Grid container item xs={5} direction="column">
          <br />
          <h3 style={{ textAlign: 'right' }}>NOT YET</h3>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid container item xs={6} direction="column">
          <br />
          <h4>CHERRY</h4>
        </Grid>
        <Grid container item xs={1} direction="column">
          <br />
          <h3 style={{ textAlign: 'right' }}>3</h3>
        </Grid>
        <Grid container item xs={5} direction="column">
          <br />
          <h3 style={{ textAlign: 'right' }}>DONE</h3>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid container item xs={6} direction="column">
          <br />
          <h4>LEMON</h4>
        </Grid>
        <Grid container item xs={1} direction="column">
          <br />
          <h3 style={{ textAlign: 'right' }}>3</h3>
        </Grid>
        <Grid container item xs={5} direction="column">
          <br />
          <h3 style={{ textAlign: 'right' }}>DONE</h3>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid container item xs={6} direction="column">
          <br />
          <h4>STRAWBERRY</h4>
        </Grid>
        <Grid container item xs={1} direction="column">
          <br />
          <h3 style={{ textAlign: 'right' }}>1</h3>
        </Grid>
        <Grid container item xs={5} direction="column">
          <br />
          <h3 style={{ textAlign: 'right' }}>NOT YET</h3>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />

      <Button sx={whiteButton} variant="outlined">
        <h3>EXTENDS 30 SECONDS</h3>
      </Button>
      <br />
      <br />
      <Button sx={redButton} variant="outlined">
        <h3>END ROUND</h3>
      </Button>
    </>
  );
}

export default TeamList;
