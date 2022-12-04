import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate';
import ModStartRound from '../../Components/Moderators/StartRound';
import { getData, putData} from '../../ApiHelper';
import ModChooseTopic from '../../Components/Moderators/ChooseTopic';
import ModOverlay from '../../Components/Moderators/Overlay';
import ModLogin from '../../Components/Moderators/Login';

interface Props {
	setUserData: Dispatch<SetStateAction<{}>>;
	userData: any;
  viewPhrases: boolean;
}

function ModStartRoundControl(props: Props) {

  const {id} = useParams();
  const [game, setGame] = useState({});
  const [selectedTopic, setSelectedTopic] = useState(false)
	localStorage.setItem('gameId', '1');


  useEffect(() => {
		getData(`/games/${id}`).then((response) => {
			console.log('GAME: ', response);
			setGame(response);
			localStorage.setItem('game', JSON.stringify(response));
		});
		
  }, []);

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  const handleSelectedTopic = () => {
    setSelectedTopic(!selectedTopic);
  };

	const [topic, setTopic] = useState();

  const handleLogout = () => {
		props.setUserData({});
		localStorage.clear();
		window.localStorage.clear();
  };

  const passedInfo ={labelOne: "round", textOne: "1"};
	
  if (localStorage.getItem('user')) {
		if (selectedTopic) {
			return (
				<CardTemplate
        content={<ModStartRound topic={topic} gameId={Number(id)} handleSwitch={handleSelectedTopic}/>}
					overlay={<ModOverlay gameData={game} handleLogout={handleLogout} />}
					bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
				/>
			);
		} else {
			return (
				<CardTemplate
          content={<ModChooseTopic setTopic={setTopic} gameId={Number(id)} handleSwitch={handleSelectedTopic}/>}
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
