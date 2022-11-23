import React from 'react';
import '../../index.css';
import { Link, useLocation } from "react-router-dom";
import { Grid, Button } from '@mui/material';
import { greenButton, redButton } from '../componentStyles';

function ModOverlay() {
  const location = useLocation();

	redButton.width = '100%';
	greenButton.width = '100%';
	greenButton.marginBottom = '1.5rem';

  console.log(location.pathname);
  return (
    <Grid
      container
      direction="column"
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
        <h3>Team</h3>
        <h1>MODS</h1>
        <br />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          width: '90%',
          position: 'absolute',
          left: 25,
          bottom: 100,
        }}
      >
        {location.pathname.includes("/mod/game") || location.pathname.includes("/mod/topic") &&
        <Button
          sx={greenButton}
        >
          <h3>Publish</h3>
        </Button>
        }
        <br/>
        <Link to= "/mod"> 
          <Button
            sx={redButton} 
          >
            <h3>Logout</h3>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default ModOverlay;
