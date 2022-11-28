import React from 'react';
import '../../index.css';
import { Grid } from '@mui/material';

interface Props {
  gameInfo: any;
}

function GameInfo(props: Props) {
  return (
    <Grid item xs={12} md={12} lg={12}>
      <br />
      <h3>game</h3>
      <h1>{props.gameInfo}</h1>
      <br />
    </Grid>
  );
}

export default GameInfo;
