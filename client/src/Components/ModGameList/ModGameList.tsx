import React from 'react';
import { Grid, IconButton, Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { greenButton } from '../componentStyles';
import { getData } from '../../ApiHelper';

interface Props {
  handleCreateNewGame: () => void;
}

// it is important that the following code is written outside of the component function
// returns a promise from the API GET route for the /games endpoint
const getGames = () => {
  const games = getData('/games');
  return games;
};

// resolves the promise from getGames()
const gameList = await getGames();

// renders one game ( title + status + trashcan )
const renderGame = (game: any) => {
	return (
		<>
			<Grid container item xs={7}>
				<h4 style={{ lineHeight: '56px' }}>{ game.name.toString() }</h4>
			</Grid>
			<Grid container item xs={4} justifyContent='flex-end'>
				<h3 style={{ width: '100%', textAlign: 'right', lineHeight: '56px'}}>{ game.publishedAt ? 'published' : 'pending' }</h3>
			</Grid>
			<Grid container item xs={1} justifyContent='flex-end'>
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
    <div style={{height: '100%', position: 'relative'}}>
      <Grid container>
        <Grid container item xs={7}>
          <h3>GAMES</h3>
        </Grid>
        <Grid container item xs={4}>
          <h3 style={{width: '100%', textAlign: 'right'}}>STATUS</h3>
        </Grid>
      </Grid>
      <hr />
      { <Grid container>
				{/* @ts-ignore */} {/* this line ignores errors in the line below and will need to be removed soon*/}
				{ (gameList.map((game) => renderGame(game))) } {/* this line renders each game from the database */}
      </Grid> }
      <Button
        onClick={props.handleCreateNewGame}
        sx={greenButton}
        style={{ position: 'absolute', bottom: 0, left: 0 }}
        variant="outlined"
      >
        <h3>CREATE A NEW GAME</h3>
      </Button>
			<div style={{height: '5rem'}}/>
    </div>
  );
}

export default ModGameList;
