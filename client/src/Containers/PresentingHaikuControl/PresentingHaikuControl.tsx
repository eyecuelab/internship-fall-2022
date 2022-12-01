import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate';
import { getData } from '../../ApiHelper';
import ModPresenting from '../../Components/Moderators/Presenting';
import ModHandleGuess from '../../Components/Moderators/HandleGuess';
import ModOverlay from '../../Components/Moderators/Overlay';
import ModLogin from '../../Components/Moderators/Login';
// do I need ModLogin?

interface Props {
  setUserData: Dispatch<SetStateAction<{}>>;
  userData: any;
}

function PresentingHaikuControl(props: Props) {
  const {id} = useParams();
  const [game, setGame] = useState({});
  const [buzzedIn, setBuzzedIn] = useState(false);

  useEffect(() => {
    getGameList();
  }, []);

  const getGameList = async () => {
    const game = await getData(`/games/${id}`);
    setGame(game);
  };

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  const handleBuzzToggle = () => {
    setBuzzedIn(!buzzedIn);
  };

  const passedInfo ={labelOne: "round", textOne: "*pass round*", labelTwo: "teams left", textTwo:"pass #"};


  if (localStorage.getItem('user')) {
    if (buzzedIn) {
      return (
        <CardTemplate
          content={<ModHandleGuess handleSwitch={handleBuzzToggle} />}
          overlay={<ModOverlay gameData={game} />}
          bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
        />
      );
    } else {
      return (
        <CardTemplate
          content={<ModPresenting handleSwitch={handleBuzzToggle} />}
          overlay={<ModOverlay gameData={passedInfo} />}
          bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
        />
      );
    }
  }
  return <ModLogin setUserData={props.setUserData} userData={props.userData} />;
}

export default PresentingHaikuControl;
