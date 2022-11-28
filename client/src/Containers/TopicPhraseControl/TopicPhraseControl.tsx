import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate/CardTemplate';
import ModAddTopic from '../../Components/ModAddTopic/ModAddTopic';
import { getData } from '../../ApiHelper';
import ModAddPhrase from '../../Components/ModAddPhrase/ModAddPhrase';
import ModOverlay from '../../Components/ModOverlay/ModOverlay';

interface Props {
  viewPhrases: boolean;
}

const getGames = () => {
  const games = getData('/games');
  return games;
};

const gameList = await getGames();

function TopicPhraseControl(props: Props) {
  const {id} = useParams();
  const selectedId = parseInt(id as string);
  const [theGame, setTheGame] = useState("");

  useEffect(() => {
		getGameList();
	}, []);

  const getGameList = async () => {
		const gameLists = await getData('/games');
    const selectedGame= gameLists.filter(((gameList: { id: number | undefined; })=>gameList.id===selectedId))[0]?.name;
		setTheGame(selectedGame);
  }

  document.documentElement.style.background = 'url(/images/moderator_background.png)';


  if (props.viewPhrases) {
    return (
      <CardTemplate
        user="moderator"
        content={<ModAddPhrase />}
        overlay={<ModOverlay gameData={theGame}/>}
      />
    );
  } else {
    return (
      <CardTemplate
        user="moderator"
        overlay={<ModOverlay gameData={theGame} />}
        content={<ModAddTopic gameId={Number(id)} />}
      />
    );
  }
}

export default TopicPhraseControl;
