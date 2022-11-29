import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate/CardTemplate';
import ModAddTopic from '../../Components/ModAddTopic/ModAddTopic';
import { getData } from '../../ApiHelper';
import ModAddPhrase from '../../Components/ModAddPhrase/ModAddPhrase';
import ModOverlay from '../../Components/ModOverlay/ModOverlay';
import ModLogin from '../../Components/ModLogin/ModLogin';

interface Props {
	setUserData: Dispatch<SetStateAction<{}>>;
	userData: any;
  viewPhrases: boolean;
}

function TopicPhraseControl(props: Props) {
  const {id} = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
		getGameList();
	}, []);

  const getGameList = async () => {
		const game = await getData(`/games/${id}`);
		setGame(game);
  }

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  if (localStorage.getItem('user')) {
		if (props.viewPhrases) {
			return (
				<CardTemplate
					content={<ModAddPhrase/>}
					overlay={<ModOverlay gameData={game}/>}
				/>
			);
		} else {
			return (
				<CardTemplate
					overlay={<ModOverlay gameData={game} />}
					content={<ModAddTopic gameId={Number(id)} />}
				/>
			);
		}
	}
	return <ModLogin setUserData={props.setUserData} userData={props.userData}/>;
}

export default TopicPhraseControl;
