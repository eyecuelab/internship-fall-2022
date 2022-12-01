import React from 'react';
import '../../../index.css';
import { Link, useLocation } from 'react-router-dom';
import { Grid, Button } from '@mui/material';
import { DogEarButton, greenButton, redButton } from '../../componentStyles';
import { putData } from '../../../ApiHelper';
import GameInfo from './GameInfo';

interface Props {
  handleLogout?: () => void;
  gameData?: any;
}

function ModOverlay(props: Props) {
  const location = useLocation();

  const updateGameStatus = (gameId: any) => {
    putData(`/games/${gameId}`);
  };

  redButton.width = '100%';
  greenButton.width = '100%';

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
      {props.gameData && <GameInfo h1Input={props.gameData.textOne} h3Input={props.gameData.labelOne}/>}
      {props.gameData && <GameInfo h1Input={props.gameData.textTwo} h3Input={props.gameData.labelTwo}/>}
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
        <Link to="/">
          {(location.pathname.includes('/topic/') || location.pathname.includes('/game/')) && (
            <DogEarButton onClick={() => updateGameStatus(props.gameData.id)} style={greenButton}>
              <h3>Publish</h3>
            </DogEarButton>
          )}
        </Link>
        <br />
        <br />
        <Link to="/">
          <DogEarButton onClick={props.handleLogout} style={redButton}>
            <h3>Logout</h3>
          </DogEarButton>
        </Link>
      </Grid>
    </Grid>
  );
}

export default ModOverlay;
