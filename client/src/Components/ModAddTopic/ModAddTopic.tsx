import React from 'react';
import {Grid, IconButton} from '@mui/material';
import {Delete} from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import {greenButton} from '../componentStyles';
import {whiteButton} from '../componentStyles';
import Button from '@mui/material/Button';

function ModAddTopic() {
  greenButton.width = '100%';
  whiteButton.width = '100%';

  return (
    <>
      <Grid container spacing={33}>
        <Grid container item xs={6} direction="column">
          <h3>TOPICS</h3>
        </Grid>
        <Grid container item xs={5} direction="column">
          <h3>PHRASES</h3>
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={2}>
        <Grid container item xs={8} direction="column">
          <h4>HOLIDAY ACTIVITY</h4>
        </Grid>
        <Grid container item xs={3} direction="column">
          <h3 style={{textAlign:'center'}} >5</h3>
        </Grid>
        <Grid container item xs={1} direction="column">
          <IconButton aria-label="delete">
            <Delete />
          </IconButton>
        </Grid>
		<Grid container item xs={8} direction="column">
          <h4>1ST WORLD PROBLEMS</h4>
        </Grid>
        <Grid container item xs={3} direction="column">
          <h3 style={{textAlign:'center'}}>5</h3>
        </Grid>
        <Grid container item xs={1} direction="column">
          <IconButton aria-label="delete">
            <Delete />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{position: 'relative', top:20 }}>
        <Grid container item xs={9} direction="column">
          <TextField
            fullWidth
            sx={{mt: 0}}
            id="standard-basic"
            variant="standard"
            name="FiveSyllables"
            type="text"
            multiline
            InputProps={{
              style: {
                fontFamily: 'LuloCleanOneBold',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '42px',
                lineHeight: '50px',
                color: '#363636',
              },
            }}
          />
          <h5>20 CHARACTERS MAX</h5>
        </Grid>
        <Grid container item xs={3} direction="column">
          <Button sx={greenButton} variant="outlined">
            <h3>ADD</h3>
          </Button>
        </Grid>
      </Grid>
      <Button sx={whiteButton} style={{position: 'relative', top:345 }} variant="outlined">
        <h3>BACK TO GAMES</h3>
      </Button>
    </>
  );
}

export default ModAddTopic;