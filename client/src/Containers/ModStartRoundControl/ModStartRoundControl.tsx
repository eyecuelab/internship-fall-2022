import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import '../../index.css';
import CardTemplate from '../../Components/CardTemplate';
import ModChooseTopic from '../../Components/Moderators/ChooseTopic';
import ModStartRound from '../../Components/Moderators/StartRound';
import ModOverlay from '../../Components/Moderators/Overlay';
import ModLogin from '../../Components/Moderators/Login';
import { getData } from '../../ApiHelper';

interface Props {
	setUserData: Dispatch<SetStateAction<{}>>;
	userData: any;
}

function ModStartRoundControl(props: Props) {
  const [createNewGameView, setCreateNewGameView] = useState(false);
	const [games, setGames] = useState([]);
	localStorage.setItem('gameId', '1');

	useEffect(() => {
		getGameList();
	}, []);

	const getGameList = () => {
		const user = JSON.parse(localStorage.getItem('user') as string);
		if (user) {
		getData(`/moderators/${user.email}`)
			.then((response) => {
				response ? getData(`/games/moderator/${response.id}`).then((data) => {
					setGames(data);
				}) : setGames([]);
			});
		} else {
			setGames([]);
		}
	}

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  const handleLogout = () => {
		props.setUserData({});
		localStorage.clear();
		window.localStorage.clear();
  };

  const handleCreateNewGame = () => {
    setCreateNewGameView(!createNewGameView);
  };

  const passedInfo ={labelOne: "round", textOne: "1"};
	

  if (localStorage.getItem('user')) {
    if (!createNewGameView) {
      return (
        <CardTemplate
          content={<ModChooseTopic gameList={games} getGameList={getGameList} handleCreateNewGame={handleCreateNewGame} />}
          overlay={<ModOverlay gameData={passedInfo} handleLogout={handleLogout} />}
          bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
        />
      );
    } else {
      return (
        <CardTemplate
          content={<ModStartRound />}
          overlay={<ModOverlay handleLogout={handleLogout} />}
          bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
        />
      );
    }
  }
  return <ModLogin setUserData={props.setUserData} userData={props.userData}/>;
}

export default ModStartRoundControl;