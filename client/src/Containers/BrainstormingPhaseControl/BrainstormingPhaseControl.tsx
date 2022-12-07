import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import {useParams} from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate';
import {getData} from '../../ApiHelper';
import ModOverlay from '../../Components/Moderators/Overlay';
import TeamList from '../../Components/Moderators/TeamList';
import ModLogin from '../../Components/Moderators/Login';
import socket from '../../Hooks/WebsocketHook';

interface Props {
	setUserData: Dispatch<SetStateAction<{}>>;
	userData: any;
}

function BrainstormingPhaseControl(props: Props) {
  const { id } = useParams();
  const [game, setGame] = useState(JSON.parse(localStorage.getItem('game') as string));
  const [presenting, setPresenting] = useState(false);

  useEffect(() => {
    getData(`/games/${ id }`).then((game) => {
			setGame(game);
			localStorage.setItem('game', JSON.stringify(game))
		});
  }, []);

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  const passedInfo = {textOne: game.Rounds.length, labelOne: 'round', gameCode: game.gameCode}
  const passedInfo = {textOne: game.Rounds.length + 1, labelOne: 'round'}

  if (localStorage.getItem('user')) {
  return (
    <CardTemplate
      content={<TeamList gameId={game} presenting={presenting} setPresenting={setPresenting}/>}
      overlay={<ModOverlay gameData={passedInfo} presenting={presenting} setPresenting={setPresenting} />}
      bgUrl="/images/moderator_card_background_2.png"
      color="#15586a"
    />
  );
}
return <ModLogin setUserData={props.setUserData} userData={props.userData} />;
}

export default BrainstormingPhaseControl;
