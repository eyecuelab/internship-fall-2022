import React from 'react';
import '../../index.css';
import { Link, useLocation } from "react-router-dom";
import { Grid, Button } from '@mui/material';

function ModOverlay() {
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
        <Button
          sx={{
            height: '5rem',
            width: '100%',
            color: '#363636',
            border: '1px solid #363636',
            borderRadius: '10px',
            background: '#bbb',
            margin: 'auto',
            display: 'block',
          }}
        >
          <h3>some text</h3>
        </Button>
        <br />
        <Link to= "/mod"> 
          <Button
            sx={{
              height: '5rem',
              width: '100%',
              color: '#363636',
              border: '1px solid #363636',
              borderRadius: '10px',
              background: '#FC3911',
            }} 
          >
            <h3>Logout</h3>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default ModOverlay;
