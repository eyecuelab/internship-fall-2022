import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import {useParams} from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate';
import {getData} from '../../ApiHelper';
import ModOverlay from '../../Components/Moderators/Overlay';
import TeamList from '../../Components/Moderators/TeamList';

interface Props {
  setUserData: Dispatch<SetStateAction<{}>>;
  userData: any;
}

function BrainstormingPhaseControl(props: Props) {
  const {id} = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    getGameList();
  }, []);

  const getGameList = async () => {
    const game = await getData(`/games/${id}`);
    setGame(game);
  };

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  return (
    <CardTemplate
      content={<TeamList />}
      overlay={<ModOverlay gameData={game} />}
      bgUrl="/images/moderator_card_background_2.png"
      color="#15586a"
    />
  );
}

export default BrainstormingPhaseControl;
