import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate';
import ModAddTopic from '../../Components/Moderators/AddTopic';
import { getData} from '../../ApiHelper';
import ModAddPhrase from '../../Components/Moderators/AddPhrase';
import ModOverlay from '../../Components/Moderators/Overlay';
import ModLogin from '../../Components/Moderators/Login';
import { Game } from '../../Types/Types';

interface Props {
	setUserData: Dispatch<SetStateAction<{}>>;
	userData: any;
  viewPhrases: boolean;
}

function TopicPhraseControl(props: Props) {
  const {id} = useParams();
  const [game, setGame] = useState<Game>();

  useEffect(() => {
    getGameList();
  }, []);

  const getGameList = async () => {
		const game = await getData(`/games/${id}`);
		setGame(game);
  }

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  const handleLogout = () => {
		props.setUserData({});
		localStorage.clear();
		window.localStorage.clear();
  };

	const passedInfo ={labelOne: "game", textOne: game?.name};
	
  if (localStorage.getItem('user')) {
		if (props.viewPhrases) {
			return (
				<CardTemplate
					content={<ModAddPhrase/>}
					overlay={<ModOverlay gameData={passedInfo}  gameId={Number(id)} handleLogout={handleLogout} />}
					bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
				/>
			);
		} else {
			return (
				<CardTemplate
					content={<ModAddTopic gameId={Number(id)} />}
					overlay={<ModOverlay gameData={passedInfo}  handleLogout={handleLogout}  gameId={Number(id)} />}
					bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
				/>
			);
		}
	}
	return <ModLogin setUserData={props.setUserData} userData={props.userData}/>;
}

export default TopicPhraseControl;
