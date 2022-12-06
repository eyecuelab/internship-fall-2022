import React, {useEffect, useState} from 'react';
import '../../../index.css';
import { Link } from 'react-router-dom';
import {Container, ButtonContainer} from './styles';
import socket from '../../../Hooks/WebsocketHook';
import {Button} from '@mui/material';
import {whiteButton, greenButton, redButton, DogEarButton} from '../../componentStyles';
import { StartSharp } from '@mui/icons-material';
interface Props {
  handleSwitch?: () => void;
  gameData?: any;
  haikuData?: any;
  topicData?: any;
}

function ModPresenting(props: Props) {
  whiteButton.width = '100%';
  redButton.width = '100%';
  greenButton.width = '100%';

  const [lineNumber, setLineNumber] = useState(1);

  useEffect(()=>{
    socket.on('connection', () => {
			console.log('socket open');
		});

		socket.on('buzz', () => {
			props.handleSwitch;
		});

    socket.emit('buzzer_refresh');

		return () => {
			socket.off('connection');
			socket.off('buzz');
		}
  }, []);

  const lineAdvancer = () => {
    if (lineNumber < 3) {
      setLineNumber(lineNumber + 1);
    } else {
      setLineNumber(1);
    }
  };

  return (
    <>
      <Container>
        <div>
          <h3>team</h3>
          <h1>{props.topicData.name}</h1>
          <br />
          <br />
          <h3>line {lineNumber}</h3>
          <h1>
            {lineNumber == 3 ?
              props.haikuData.line3 :
              lineNumber == 2 ?
              props.haikuData.line2 :
              props.haikuData.line1}
          </h1>
        </div>
        <ButtonContainer>
        <DogEarButton onClick={props.handleSwitch} style={whiteButton}>
            <h3>fake buzzer</h3>
          </DogEarButton>
          <DogEarButton onClick={lineAdvancer} style={whiteButton}>
            <h3>advance haicue clue</h3>
          </DogEarButton>
          <Link to={`/game/${props.gameData.id}/round`}>
            <DogEarButton onClick={props.handleSwitch} style={redButton}>
              <h3>end round</h3>
            </DogEarButton>
          </Link>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default ModPresenting;
