import React from 'react';
import Grid from '@mui/material/Grid';

function TeamList() {
  return (
    <>
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
          <hr />
          <h4>BLUEBERRY</h4>
        </Grid>
        <Grid container item xs={1} direction="column">
          <hr />
          <h3 style={{ textAlign: 'right' }}>7</h3>
        </Grid>
        <Grid container item xs={5} direction="column">
          <hr />
          <h3 style={{ textAlign: 'right' }}>DONE</h3>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid container item xs={6} direction="column">
          <hr />
          <h4>APPLE</h4>
        </Grid>
        <Grid container item xs={1} direction="column">
          <hr />
          <h3 style={{ textAlign: 'right' }}>5</h3>
        </Grid>
        <Grid container item xs={5} direction="column">
          <hr />
          <h3 style={{ textAlign: 'right' }}>NOT YET</h3>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid container item xs={6} direction="column">
          <hr />
          <h4>CHERRY</h4>
        </Grid>
        <Grid container item xs={1} direction="column">
          <hr />
          <h3 style={{ textAlign: 'right' }}>3</h3>
        </Grid>
        <Grid container item xs={5} direction="column">
          <hr />
          <h3 style={{ textAlign: 'right' }}>DONE</h3>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid container item xs={6} direction="column">
          <hr />
          <h4>LEMON</h4>
        </Grid>
        <Grid container item xs={1} direction="column">
          <hr />
          <h3 style={{ textAlign: 'right' }}>3</h3>
        </Grid>
        <Grid container item xs={5} direction="column">
          <hr />
          <h3 style={{ textAlign: 'right' }}>DONE</h3>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid container item xs={6} direction="column">
          <hr />
          <h4>STRAWBERRY</h4>
        </Grid>
        <Grid container item xs={1} direction="column">
          <hr />
          <h3 style={{ textAlign: 'right' }}>1</h3>
        </Grid>
        <Grid container item xs={5} direction="column">
          <hr />
          <h3 style={{ textAlign: 'right' }}>NOT YET</h3>
        </Grid>
      </Grid>
    </>
  );
}

export default TeamList;
