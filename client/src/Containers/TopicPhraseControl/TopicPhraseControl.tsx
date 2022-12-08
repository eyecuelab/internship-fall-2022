import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate';
import ModAddTopic from '../../Components/Moderators/AddTopic';
import { getData} from '../../ApiHelper';
import ModAddPhrase from '../../Components/Moderators/AddPhrase';
import ModOverlay from '../../Components/Moderators/Overlay';
import ModLogin from '../../Components/Moderators/Login';
import { Game, User } from '../../Types/Types';

interface Props {
	setUserData: Dispatch<SetStateAction<User | undefined>>;
	logout: () => void;
  viewPhrases: boolean;
}

function TopicPhraseControl(props: Props) {
  const { id } = useParams();
	const { setUserData, logout, viewPhrases } = props;
  const [game, setGame] = useState<Game>();

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  useEffect(() => {
    getGameList();
  }, []);

  const getGameList = async () => {
		const game = await getData(`/games/${id}`);
		setGame(game);
  }

	const passedInfo ={labelOne: "game", textOne: game?.name};
	
  if (localStorage.getItem('user')) {
		if (viewPhrases) {
			return (
				<CardTemplate
					content={<ModAddPhrase/>}
					overlay={<ModOverlay gameData={passedInfo} handleLogout={logout} />}
					bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
				/>
			);
		} else {
			return (
				<CardTemplate
					content={<ModAddTopic gameId={Number(id)} />}
					overlay={<ModOverlay gameData={passedInfo}  handleLogout={logout} />}
					bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
				/>
			);
		}
	}
	return <ModLogin setUserData={setUserData} />;
}

export default TopicPhraseControl;
