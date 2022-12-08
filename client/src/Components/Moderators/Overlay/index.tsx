import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import '../../../index.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { DogEarButton, greenButton, redButton, blackButton } from '../../componentStyles';
import { putData } from '../../../ApiHelper';
import GameInfo from './GameInfo';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import socket from '../../../Hooks/WebsocketHook';

interface Props {
  handleLogout?: () => void;
  gameData?: any;
  gameId?: any;
  presenting?: boolean;
  gameRound?: any;
  setPresenting?: Dispatch<SetStateAction<boolean>>;
}

function ModOverlay(props: Props) {
	const { id } = useParams();
	const { handleLogout, gameData, gameId, presenting, setPresenting } = props;
  const [time, setTime] = useState(300);
  const location = useLocation();

  useEffect(() => {
    socket.on('connection', () => {
      console.log('socket open');
    });

    socket.on('tick', (timeInterval: number) => {
      setTime(timeInterval);
    });

    return () => {
      socket.off('connection');
      socket.off('tick');
    };
  }, []);

  const formatTimer = (timer: number) => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer - minutes * 60;

		if (timer === 0) {
			// @ts-ignore
			props.setPresenting(true);
		}

    return {minutes: minutes, seconds: seconds.toLocaleString('en-US', {minimumIntegerDigits: 2})};
  };

  const timer = formatTimer(time);

  const updateGameStatus = (gameId: number) => {
		console.log('OFFENDING ID: ', gameId);
    putData(`/games/${gameId}`);
  };

  const codeToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`www.haicue.com/${gameData.gameCode}`);
    } catch (err) {
      console.log('Failed to copy: ');
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
      </Grid>

      {gameData ? (
        <GameInfo h1Input={gameData.textOne} h3Input={gameData.labelOne} />
      ) : null}

      {location.pathname.includes('brainstorming') ? (<><h3>timer</h3><h1 className={timer.minutes < 1 ? 'panic' : ''}>{timer.minutes}:{timer.seconds}</h1></>) : (gameData ? (
        <GameInfo h1Input={gameData.textTwo} h3Input={gameData.labelTwo} />
      ) : null)}

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
          {gameData ? (gameData.labelOne == 'game' ? (
            <>
              <DogEarButton onClick={() => updateGameStatus(Number(id))} style={greenButton}>
                <h3>Publish</h3>
              </DogEarButton>
              <DogEarButton onClick={handleLogout} style={redButton}>
                <h3>Logout</h3>
              </DogEarButton>
            </>
          ) : null) : null}

          {location.pathname == '/' ? (
            <DogEarButton onClick={handleLogout} style={redButton}>
              <h3>Logout</h3>
            </DogEarButton>
          ) : null}
        </Link>
        {location.pathname.includes('brainstorming') || location.pathname.includes('round') ? (
          <DogEarButton onClick={codeToClipboard} style={blackButton}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
              <h3 style={{marginLeft: '2rem'}}>player url</h3>{' '}
              <ContentCopyIcon sx={{fontSize: '3rem'}} />
            </div>
          </DogEarButton>
        ) : null
        }
      </Grid>
    </Grid>
  );
}

export default ModOverlay;
