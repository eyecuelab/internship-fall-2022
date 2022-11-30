import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate/CardTemplate';
import { getData} from '../../ApiHelper';
import ModPresenting from '../../Components/ModPresenting/ModPresenting';
import ModHandleGuess from '../../Components/ModHandleGuess/ModHandleGuess';
import ModOverlay from '../../Components/ModOverlay/ModOverlay';
import ModLogin from '../../Components/ModLogin/ModLogin';
// do I need ModLogin?

interface Props {
	setUserData: Dispatch<SetStateAction<{}>>;
	userData: any;
  // viewPhrases: boolean;
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
  }

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  const handleBuzzToggle = () => {
		setBuzzedIn(!buzzedIn)
  };

  if (localStorage.getItem('user')) {
		if (buzzedIn) {
			return (
				<CardTemplate
					content={<ModHandleGuess handleSwitch={handleBuzzToggle}/>}
					overlay={<ModOverlay gameData={game} />}
				/>
			);
		} else {
			return (
				<CardTemplate
					content={<ModPresenting handleSwitch={handleBuzzToggle}//>}
					overlay={<ModOverlay gameData={game} />}
				/>
			);
		}
	}
	return <ModLogin setUserData={props.setUserData} userData={props.userData}/>;
}

export default PresentingHaikuControl;