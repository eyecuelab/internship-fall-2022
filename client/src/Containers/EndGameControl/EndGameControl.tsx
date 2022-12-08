import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate';
import { getData } from '../../ApiHelper';
import ModOverlay from '../../Components/Moderators/Overlay';
import EndGame from '../../Components/Moderators/EndGame';
import ModLogin from '../../Components/Moderators/Login';
import { Game, Round, User } from '../../Types/Types';

interface Props {
  setUserData: Dispatch<SetStateAction<User | undefined>>;
}

function EndGameControl(props: Props) {
	const { id } = useParams();
	const { setUserData } = props;
	const [game, setGame] = useState<Game>(JSON.parse(localStorage.getItem('game') as string));
	const [round, setRound]= useState<Round>(JSON.parse(localStorage.getItem('game') as string).Rounds.slice(-1)[0]);

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  useEffect(() => {
    getData(`/games/${id}`).then(games => {
      setGame(games);
	  setRound(games.Rounds.slice(-1)[0]);
    });
  }, []);

  const passedInfo = {
    labelOne: 'round',
    textOne: game.Rounds.length,
    labelTwo: 'teams left',
    textTwo: 'pass #',
    gameCode: game.gameCode,
    gameRound: round,
  };

  if (localStorage.getItem('user')) {
    return (
      <CardTemplate
        content={<EndGame gameId={game}/>}
        overlay={
          <ModOverlay gameData={passedInfo} />
        }
        bgUrl="/images/moderator_card_background_2.png"
        color="#15586a"
      />
    );
  }
  return <ModLogin setUserData={setUserData} />;
}

export default EndGameControl;
