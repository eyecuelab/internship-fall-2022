import React, { useState, useEffect } from 'react';
import '../../index.css';
import { Grid, Button } from '@mui/material';
import TopicItem from './TopicItem';
import { Game } from '../../Types/Types';
import { Container, ButtonContainer } from './styles';
import { whiteButton, redButton } from '../componentStyles';

interface Props {
	gameList: Game[];
	getGameList: any;
  handleCreateNewGame: () => void;
}


function ModChooseTopic(props: Props) {
  whiteButton.width = '100%';
  redButton.width = '100%';

  useEffect(() => {
		console.log(props.gameList);
	}, []);

  return (
    <>
      <Container>
        <div>
          <h3>choose a new round topic</h3>
          <hr />
          <br />
          { <Grid container>
				{ (props.gameList.map((game: Game) => <TopicItem key={game.id} game={game} />)) }
      </Grid> }
          <br />
          <br />
        </div>
        <ButtonContainer>
          <Button sx={redButton}>
            <h3>end game</h3>
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default ModChooseTopic;
