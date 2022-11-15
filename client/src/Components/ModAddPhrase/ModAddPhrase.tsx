import React from 'react';
import { Grid, IconButton, TextField, Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { greenButton, whiteButton } from '../componentStyles';

function ModAddPhrase() {
  greenButton.width = '100%';
  whiteButton.width = '100%';

  return (
    <>
      <Grid container spacing={33}>
        <Grid container item xs={12} direction="column">
          <h3>
            TOPIC:
            <span className="topicName">HOLIDAY ACTIVITY</span>
          </h3>
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={2}>
        <Grid container item xs={11} direction="column">
          <h3>DECORATE TREE</h3>
        </Grid>
        <Grid container item xs={1} direction="column">
          <IconButton aria-label="delete">
            <Delete />
          </IconButton>
        </Grid>
        <Grid container item xs={11} direction="column">
          <h3>BAKE COOKIES</h3>
        </Grid>
        <Grid container item xs={1} direction="column">
          <IconButton aria-label="delete">
            <Delete />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ position: 'relative', top: 20 }}>
        <Grid container item xs={9} direction="column">
          <TextField
            fullWidth
            id="standard-basic"
            variant="standard"
            name="phrase"
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
      <Button sx={whiteButton} style={{ position: 'relative', top: 345 }} variant="outlined">
        <h3>BACK TO TOPICS</h3>
      </Button>
    </>
  );
}

export default ModAddPhrase;
