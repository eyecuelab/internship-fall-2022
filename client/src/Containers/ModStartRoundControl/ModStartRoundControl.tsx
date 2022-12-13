import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate';
import ModStartRound from '../../Components/Moderators/StartRound';
import { getData } from '../../ApiHelper';
import ModChooseTopic from '../../Components/Moderators/ChooseTopic';
import ModOverlay from '../../Components/Moderators/Overlay';
import ModLogin from '../../Components/Moderators/Login';
import { Game, Topic, Moderator } from '../../Types/Types';

interface Props {
	setUserData: Dispatch<SetStateAction<Moderator | undefined>>;
	logout: () => void;
}

function ModStartRoundControl(props: Props) {
  const { id } = useParams();
	const { setUserData, logout } = props;
  const [game, setGame] = useState<Game>(JSON.parse(localStorage.getItem('game') as string)); 
	const [topic, setTopic] = useState<Topic>();
  const [selectedTopic, setSelectedTopic] = useState(false);
	const [presenting, setPresenting] = useState(false);

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  useEffect(() => {
		getData(`/game/${id}`).then((response) => {
			setGame(response);
			localStorage.setItem('game', JSON.stringify(response));
		});
  }, []);

	useEffect(() => {
		setSelectedTopic(selectedTopic);
		setTopic(topic);
	}, [topic?.id, selectedTopic]);

  const passedInfo ={labelOne: "round", textOne: "1", gameCode: game?.gameCode};
	
  if (localStorage.getItem('user')) {
		if (selectedTopic) {
			return (
				<CardTemplate
				// @ts-ignore
        content={<ModStartRound topic={topic} handleSwitch={setSelectedTopic}/>}
					overlay={<ModOverlay gameData={passedInfo} handleLogout={logout} setPresenting={setPresenting}/>}
					bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
				/>
			);
		} else {
			return (
				<CardTemplate
				// @ts-ignore
          content={<ModChooseTopic setTopic={setTopic} handleSwitch={setSelectedTopic}/>}
					overlay={<ModOverlay gameData={passedInfo} handleLogout={logout} setPresenting={setPresenting}/>}
					bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
				/>
			);
		}
	}
	return <ModLogin setUserData={setUserData} />;
}

export default ModStartRoundControl;
