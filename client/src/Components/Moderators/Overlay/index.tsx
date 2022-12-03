import React from 'react';
import '../../../index.css';
import {Link, useLocation} from 'react-router-dom';
import {Grid, Button} from '@mui/material';
import {DogEarButton, greenButton, redButton, blackButton} from '../../componentStyles';
import {putData} from '../../../ApiHelper';
import GameInfo from './GameInfo';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface Props {
  handleLogout?: () => void;
  gameData?: any;
  gameId?: any;
}

function ModOverlay(props: Props) {
  const location = useLocation();

  const updateGameStatus = (gameId: any) => {
    putData(`/games/${gameId}`);
  };

  const codeToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`www.haicue.com/game/${props.gameData.gameCode}`);
      console.log('Content copied to clipboard');
    } catch (err) {
      alert('Failed to copy: ');
    }
  };

  redButton.width = '100%';
  greenButton.width = '100%';
  blackButton.width = '100%';

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

      {props.gameData ? (
        <GameInfo h1Input={props.gameData.textOne} h3Input={props.gameData.labelOne} />
      ) : null}

      {props.gameData ? (
        <GameInfo h1Input={props.gameData.textTwo} h3Input={props.gameData.labelTwo} />
      ) : null}

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
          {props.gameData.labelOne == 'game' ? (
            <>
              <DogEarButton onClick={() => updateGameStatus(props.gameId)} style={greenButton}>
                <h3>Publish</h3>
              </DogEarButton>
              <br />
              <br />
              <DogEarButton onClick={props.handleLogout} style={redButton}>
                <h3>Logout</h3>
              </DogEarButton>
            </>
          ) : null}

          {location.pathname == '/' ? (
            <DogEarButton onClick={props.handleLogout} style={redButton}>
              <h3>Logout</h3>
            </DogEarButton>
          ) : null}
        </Link>
        <br />
        <br />
        {props.gameData.labelOne == 'round' ? (
          <DogEarButton onClick={codeToClipboard} style={blackButton}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <h3 style={{marginLeft: '2rem'}}>player url</h3>{' '}
              <ContentCopyIcon sx={{fontSize: '3rem'}} />
            </div>
          </DogEarButton>
        ) : null

        // <Button
        //   variant="contained"
        //   onClick={codeToClipboard}
        //   endIcon={<ContentCopyIcon sx={{fontSize: "5rem"}}/>}
        //   sx={blackButton}
        //   >
        //   <h3>player url</h3>
        // </Button> :null
        }
      </Grid>
    </Grid>
  );
}

export default ModOverlay;
