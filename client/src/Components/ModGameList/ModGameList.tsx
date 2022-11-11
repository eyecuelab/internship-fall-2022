import React from "react";
import Grid from "@mui/material/Grid";

function GameList() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid container item xs={6} direction="column">
          <h5>GAMES</h5>
        </Grid>
        <Grid container item xs={6} direction="column">
          <h5>STATUS</h5>
        </Grid>
        <hr />
      </Grid>
      <Grid container spacing={3}>
        <Grid container item xs={5} direction="column">
          <h5>EVENT NAME</h5>
        </Grid>
        <Grid container item xs={5} direction="column">
          <h5>PENDING</h5>
        </Grid>
        <Grid container item xs={1} direction="column">
		</Grid>
      </Grid>
    </>
  );
}

export default GameList;
