import React from 'react';
import '../../../index.css';
import { Grid } from '@mui/material';

interface Props {
  h3Input: any;
  h1Input: any;
}

function GameInfo(props: Props) {
	const { h3Input, h1Input } = props;
  return (
    <Grid item key={h1Input} xs={12} md={12} lg={12}>
      <br />
      <h3>{h3Input}</h3>
      <h1>{h1Input}</h1>
      <br />
    </Grid>
  );
}

export default GameInfo;
