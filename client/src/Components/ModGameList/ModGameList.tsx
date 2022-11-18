import React from 'react';
import { Grid, IconButton, Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { greenButton } from '../componentStyles';
import { getData } from '../../ApiHelper';

interface Props {
  handleCreateNewGame: () => void;
}

const getGames = async () => {
  const games = await getData('/games');
  return games;
};

const gameList = await getGames();

const renderGame = (game: any) => {
	return (
		<>
			<Grid container item xs={5}>
				<h4>{ game.name.toString() }</h4>
			</Grid>
			<Grid container item xs={3}>
				<h3 style={{ width: '100%', textAlign: 'right'}}>{ game.publishedAt ? 'published' : 'pending' }</h3>
			</Grid>
			<Grid item xs={1}>
				<IconButton aria-label="delete">
					<Delete />
				</IconButton>
			</Grid>
		</>
	);
}

function ModGameList(props: Props) {
  greenButton.width = '100%';

  console.log('LINE 26: ', gameList);

  return (
    <>
      <Grid container spacing={28}>
        <Grid container item xs={6}>
          <h3>GAMES</h3>
        </Grid>
        <Grid container item xs={3}>
          <h3 style={{width: '100%', textAlign: 'right'}}>STATUS</h3>
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={30}>
				{/* @ts-ignore */}
				{ <> { (gameList.map((game) => renderGame(game))) } </> }
      </Grid>
      <Button
        onClick={props.handleCreateNewGame}
        sx={greenButton}
        style={{position: 'relative', top: 480}}
        variant="outlined"
      >
        <h3>CREATE A NEW GAME</h3>
      </Button>
    </>
  );
}

export default ModGameList;
