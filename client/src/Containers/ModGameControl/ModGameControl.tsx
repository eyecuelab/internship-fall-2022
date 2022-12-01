import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import '../../index.css';
import CardTemplate from '../../Components/CardTemplate';
import ModLogin from '../../Components/Moderators/Login';
import ModGameList from '../../Components/Moderators/GameList';
import ModNewGame from '../../Components/Moderators/NewGame';
import ModOverlay from '../../Components/Moderators/Overlay';
import { getData } from '../../ApiHelper';
import { Game } from '../../Types/Types';

interface Props {
	setUserData: Dispatch<SetStateAction<{}>>;
	userData: any;
}

function ModGameControl(props: Props) {
  const [createNewGameView, setCreateNewGameView] = useState(false);
	const [games, setGames] = useState<Game[]>([]);

	useEffect(() => {
		getGameList();
		props.setUserData(props.userData);
	}, []);

	const getGameList = () => {
		const user = JSON.parse(localStorage.getItem('user') as string);
		if (user) {
		getData(`/moderators/${user.email}`)
			.then((response) => {
				console.log(response);
				setGames([...response.games])
			});
		} else {
			setGames([...[]]);
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

  if (localStorage.getItem('user')) {
    if (!createNewGameView) {
      return (
        <CardTemplate
          content={<ModGameList gameList={games} getGameList={getGameList} handleCreateNewGame={handleCreateNewGame} />}
          overlay={<ModOverlay handleLogout={handleLogout} />}
					bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
        />
      );
    } else {
      return (
        <CardTemplate
          content={<ModNewGame getGameList={getGameList} handleCreateNewGame={handleCreateNewGame} />}
          overlay={<ModOverlay handleLogout={handleLogout} />}
					bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
        />
      );
    }
  }
  return <ModLogin setUserData={props.setUserData} userData={props.userData}/>;
}

export default ModGameControl;