import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@mui/material';
import { greenButton } from '../componentStyles';
import GameItem from './GameItem';
import { Game } from '../../Types/Types';
import { getData, deleteData } from '../../ApiHelper';

interface Props {
  handleCreateNewGame: () => void;
}

// const getGames = () => {
//   const games = getData('/games');
//   return games;
// };

// const gameList = await getGames();

function ModGameList(props: Props) {
	const [games, setGames] = useState([]);

	useEffect(() => {
		getGameList();
	}, []);

	const getGameList = async () => {
		const user = JSON.parse(localStorage.getItem('user') as string);
		if (user) {
		const moderator = await getData(`/moderators/${user.email}`);
		const gameList = await getData(`/games/moderator/${moderator.id}`);
    setGames(gameList);
		} else {
			setGames([]);
		}
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
				{ (games.map((game: Game) => <GameItem key={game.id} game={game} deleteGame={deleteGame}/>)) } {/* this line renders each game from the database */}
      </Grid> }
      <Button
				className="bottom"
        onClick={props.handleCreateNewGame}
        sx={greenButton}

      >
        <h3>CREATE A NEW GAME</h3>
      </Button>
			<div style={{height: '5rem', bottom: 8}}/>
    </div>
  );
}

export default ModGameList;
