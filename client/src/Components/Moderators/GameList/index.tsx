import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@mui/material';
import { DogEarButton, greenButton } from '../../componentStyles';
import GameItem from './GameItem';
import { Game } from '../../../Types/Types';
import { deleteData } from '../../../ApiHelper';

interface Props {
	gameList: Game[];
	getGameList: any;
  handleCreateNewGame: () => void;
}

function ModGameList(props: Props) {

	useEffect(() => {
		props.getGameList();
		props.getGameList();
	}, []);

  const deleteGame = (gameId: any)=> {
    deleteData(`/games/${gameId}`).then(() => props.getGameList());
  }

  greenButton.width = '100%';

  return (
    <div style={{position: 'relative', height: '100%'}}>
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
				{ (props.gameList?.map((game: Game) => <GameItem key={game.id} game={game} deleteGame={deleteGame}/>)) } {/* this line renders each game from the database */}
      </Grid> }
			<div className="spacer" />
      <DogEarButton
				className="bottom"
        onClick={props.handleCreateNewGame}
        style={greenButton}
      >
        <h3>CREATE A NEW GAME</h3>
      </DogEarButton>
    </div>
  );
}

export default ModGameList;