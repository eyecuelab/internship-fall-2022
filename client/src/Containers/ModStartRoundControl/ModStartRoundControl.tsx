import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate';
import ModStartRound from '../../Components/Moderators/StartRound';
import { getData, postData } from '../../ApiHelper';
import ModChooseTopic from '../../Components/Moderators/ChooseTopic';
import ModOverlay from '../../Components/Moderators/Overlay';
import ModLogin from '../../Components/Moderators/Login';
import { Game, Topic } from '../../Types/Types';
import { CurrencyYenTwoTone } from '@mui/icons-material';

interface Props {
	setUserData: Dispatch<SetStateAction<{}>>;
	userData: any;
  viewPhrases: boolean;
}

function ModStartRoundControl(props: Props) {
  const {id} = useParams();

  const [game, setGame] = useState<Game>(JSON.parse(localStorage.getItem('game') as string)); 
	const [topic, setTopic] = useState<Topic>(); //JSON.parse(localStorage.getItem('game') as string).Topic.slice(-1)[0]

  const [selectedTopic, setSelectedTopic] = useState(false);

	console.log(JSON.parse(localStorage.getItem('game') as string));

  useEffect(() => {
		getData(`/games/${id}`).then((response) => {
			setGame(response);
			localStorage.setItem('game', JSON.stringify(response));
		});
  }, []);

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  // const handleSelectedTopic = () => {
  //   setSelectedTopic(!selectedTopic);
  // };

  const handleLogout = () => {
		props.setUserData({});
		localStorage.clear();
		window.localStorage.clear();
  };

  const passedInfo ={labelOne: "round", textOne: "1", gameCode: game?.gameCode};
	
  if (localStorage.getItem('user')) {
		if (selectedTopic) {
			return (
				<CardTemplate
				// @ts-ignore
        content={<ModStartRound topic={topic} handleSwitch={setSelectedTopic}/>}
					overlay={<ModOverlay gameData={passedInfo} handleLogout={handleLogout} />}
					bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
				/>
			);
		} else {
			return (
				<CardTemplate
				// @ts-ignore
          content={<ModChooseTopic setTopic={setTopic} handleSwitch={setSelectedTopic}/>}
					overlay={<ModOverlay gameData={passedInfo} handleLogout={handleLogout} />}
					bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
				/>
			);
		}
	}
	return <ModLogin setUserData={props.setUserData} userData={props.userData}/>;
}

export default ModStartRoundControl;
