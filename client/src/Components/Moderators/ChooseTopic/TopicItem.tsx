import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';
import {DogEarButton, whiteButton} from '../../componentStyles';
import {Game} from '../../../Types/Types';

interface Props {
  game: Game;
}

function GameItem(props: Props) {
  const {game} = props;

  whiteButton.width = '100%';

  return (
    <>
      <Link style={{ width: '100%' }} to={{pathname: `/game/${game.id}`}}>
        <DogEarButton style={whiteButton}>
          <h4 style={{lineHeight: '3.5rem'}}>{game.name.toString()}</h4>
        </DogEarButton>
      </Link>
    </>
  );
}

export default GameItem;
