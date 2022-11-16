import React from 'react';
import { Grid, IconButton, Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { greenButton } from '../componentStyles';

function ModGameList() {
  greenButton.width = '100%';

  return (
    <>
      <Grid container>
        <Grid container item xs={7}>
          <h3>GAMES</h3>
        </Grid>
        <Grid container item xs={3}>
          <h3 style={{width: '100%', textAlign: 'right'}}>STATUS</h3>
        </Grid>
      </Grid>
      <hr />
      <Grid container>
        <Grid container item xs={7}>
          <h4>EVENT NAME</h4>
        </Grid>
        <Grid container item xs={4}>
          <h3>PENDING</h3>
        </Grid>
				<Grid item xs={1} >
					<IconButton aria-label="delete">
						<Delete />
					</IconButton>
				</Grid >
      </Grid>
      <Button sx={greenButton} style={{ position: 'relative', top: 480 }} variant="outlined">
        <h3>CREATE A NEW GAME</h3>
      </Button>
    </>
  );
}

export default ModGameList;
