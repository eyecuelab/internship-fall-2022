import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate';
import ModStartRound from '../../Components/Moderators/StartRound';
import { getData, postData } from '../../ApiHelper';
import ModChooseTopic from '../../Components/Moderators/ChooseTopic';
import ModOverlay from '../../Components/Moderators/Overlay';
import ModLogin from '../../Components/Moderators/Login';
import { Game, Topic } from '../../Types/Types';

interface Props {
	setUserData: Dispatch<SetStateAction<{}>>;
	userData: any;
  viewPhrases: boolean;
}

function ModStartRoundControl(props: Props) {
  const {id} = useParams();
  const [game, setGame] = useState<Game>(JSON.parse(localStorage.getItem('game') as string));
	const [topic, setTopic] = useState<Topic>(JSON.parse(localStorage.getItem('game') as string).Topic.slice(-1)[0]);
  const [selectedTopic, setSelectedTopic] = useState(false)

  useEffect(() => {
		getData(`/games/${id}`).then((response) => {
			setGame(response);
			localStorage.setItem('game', JSON.stringify(response));
		});
  }, []);

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  const handleSelectedTopic = () => {
    setSelectedTopic(!selectedTopic);
  };

  const handleLogout = () => {
		props.setUserData({});
		localStorage.clear();
		window.localStorage.clear();
  };

	// const setNewTurns = () => {
	// 	getData(`/rounds/game/${game.id}`).then((rounds) => {
	// 		const thisRound = rounds.split(-1)[0];
	// 		for (let i=0; i<thisRound.Haicues.length; i++) {
	// 			postData('/turns', {roundId: thisRound.id, presentingTeamId: thisRound.Haicues[i].teamId, haicueId: thisRound.Haicues[i].id})
	// 		}
	// 	})
	// }

  const passedInfo ={labelOne: "round", textOne: "1"};
	
  if (localStorage.getItem('user')) {
		if (selectedTopic) {
			return (
				<CardTemplate
        content={<ModStartRound topic={topic} handleSwitch={handleSelectedTopic}/>}
					overlay={<ModOverlay gameData={game} handleLogout={handleLogout} />}
					bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
				/>
			);
		} else {
			return (
				<CardTemplate
          content={<ModChooseTopic setTopic={setTopic} handleSwitch={handleSelectedTopic}/>}
					overlay={<ModOverlay gameData={game} handleLogout={handleLogout} />}
					bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
				/>
			);
		}
	}
	return <ModLogin setUserData={props.setUserData} userData={props.userData}/>;
}

export default ModStartRoundControl;
