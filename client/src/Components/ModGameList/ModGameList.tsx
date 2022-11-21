import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@mui/material';
import { greenButton } from '../componentStyles';
import { getData } from '../../ApiHelper';
import Game from './Game';

interface Props {
  handleCreateNewGame: () => void;
}

const getGames = () => {
  const games = getData('/games');
  return games;
};

const gameList = await getGames();

const renderGame = (game: any) => {
	return (
		<Game name={game.name} publishedAt={game.publishedAt} id={game.id} />
	);
}

function ModGameList(props: Props) {
	const [games, setGames] = useState([]);

	useEffect(() => {
		getGameList();
	}, []);

	const getGameList = async () => {
		const gameList = await getData('/games');
		setGames(gameList);
	}

  greenButton.width = '100%';

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
				{ (games.map((game) => renderGame(game))) } {/* this line renders each game from the database */}
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
