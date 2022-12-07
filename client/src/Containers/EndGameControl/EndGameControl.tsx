import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import {useParams} from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate';
import {getData} from '../../ApiHelper';
import ModOverlay from '../../Components/Moderators/Overlay';
import EndGame from '../../Components/Moderators/EndGame';
import ModLogin from '../../Components/Moderators/Login';
import {Game, Round} from '../../Types/Types';

interface Props {
  setUserData: Dispatch<SetStateAction<{}>>;
  userData: any;
}

function EndGameControl(props: Props) {
	const {id} = useParams();
	const [game, setGame] = useState<Game>(JSON.parse(localStorage.getItem('game') as string));

  useEffect(() => {
	getData(`/games/${id}`).then(game => {
		setGame(game);
	});
  }, []);

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  const passedInfo = {
    labelOne: 'round',
    textOne: '3',
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
  return <ModLogin setUserData={props.setUserData} userData={props.userData} />;
}

export default EndGameControl;
