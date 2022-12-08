import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { Game } from '../../../Types/Types';

interface Props {
  game: Game;
  deleteGame: (param: number) => void;
}

function GameItem(props: Props) {
  const { game, deleteGame } = props;

  return (
    <>
			<Grid container item xs={7}>
				<Link to={{pathname: game.publishedAt ? `/game/${game.id}/round` : `/game/${game.id}`}}>
					<h4 style={{lineHeight: '3.5rem'}}>{game.name.toString()}</h4>
				</Link>
			</Grid>
      <Grid container item xs={4} justifyContent="flex-end">
        <h3 style={{width: '100%', textAlign: 'right', lineHeight: '56px'}}>
          {game.publishedAt ? 'published' : 'pending'}
        </h3>
      </Grid>
      <Grid container item xs={1} justifyContent="flex-end">
        <IconButton
          onClick={() => deleteGame(game.id)}
          aria-label="delete"
          sx={{paddingBottom: '0.5rem', maxHeight: '3.5rem'}}
        >
          <Delete sx={{height: '2.5rem', width: '2.5rem'}} />
        </IconButton>
      </Grid>
    </>
  );
}

export default GameItem;
