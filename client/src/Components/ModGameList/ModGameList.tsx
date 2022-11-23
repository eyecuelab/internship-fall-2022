import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@mui/material';
import { greenButton } from '../componentStyles';
import { deleteData, getData } from '../../ApiHelper';
import GameItem from './GameItem';
import { Game } from '../../Types/Types';

interface Props {
  handleCreateNewGame: () => void;
}

const getGames = () => {
  const games = getData('/games');
  return games;
};

const gameList = await getGames();

function ModGameList(props: Props) {
	const [games, setGames] = useState([]);

	useEffect(() => {
		getGameList();
	}, []);

	const getGameList = async () => {
		const gameList = await getData('/games');
		setGames(gameList);
	}

  const deleteGame = (gameId: any)=> {
    deleteData(`/games/${gameId}`).then(()=> getGameList());
  }

  greenButton.width = '100%';
	greenButton.marginBottom = '0'

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
				{ (games.map((game: Game) => <GameItem game={game} deleteGame={deleteGame}/>)) } {/* this line renders each game from the database */}
      </Grid> }
      <Button
        onClick={props.handleCreateNewGame}
        sx={greenButton}
        style={{ position: 'absolute', bottom: 8, left: 0 }}
        variant="outlined"
      >
        <h3>CREATE A NEW GAME</h3>
      </Button>
			<div style={{height: '5rem', bottom: 8}}/>
    </div>
  );
}

export default ModGameList;
