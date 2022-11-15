import React from 'react';
import '../../index.css';
import {Grid, Button} from '@mui/material';
import {whiteButton, greenButton, redButton} from '../componentStyles';

function ModStartRound() {
  whiteButton.width = '100%';
  redButton.width = '100%';
  greenButton.width = '100%';

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        height: '100',
        width: '100%',
        margin: 'auto',
        display: 'block',
      }}
    >
      <Grid item xs={12} md={12} lg={12} sx={{height: '50%', width: '100%'}}>
        <h3>round *insert number* topic</h3>
        <hr />
        <h1>passed-in topic</h1>
        <br />
      </Grid>

      <Grid
        item
        xs={12}
        // sx={{
        //   height: '50%',
        //   width: '100%',
        //   // margin: 'auto',
        //   // alignItems: 'flex-end',
        // }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button sx={greenButton}>
          <h3>start round</h3>
        </Button>
        <br />
        <br />
        <Button sx={whiteButton}>
          <h3>back to selection</h3>
        </Button>
        <br />
        <br />
        <Button sx={redButton}>
          <h3>end game</h3>
        </Button>
      </Grid>
    </Grid>
  );
}

export default ModStartRound;
