import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import '../../index.css';
import CardTemplate from '../../Components/CardTemplate/CardTemplate';
import ModLogin from '../../Components/ModLogin/ModLogin';
import ModGameList from '../../Components/ModGameList/ModGameList';
import ModNewGame from '../../Components/ModNewGame/ModNewGame';
import ModOverlay from '../../Components/ModOverlay/ModOverlay';
import { getData } from '../../ApiHelper';

interface Props {
	setUserData: Dispatch<SetStateAction<{}>>;
	userData: any;
}

function ModGameControl(props: Props) {
  const [createNewGameView, setCreateNewGameView] = useState(false);
	const [games, setGames] = useState([]);

	useEffect(() => {
		props.setUserData(props.userData);
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

  if (localStorage.getItem('user')) {
    if (!createNewGameView) {
      return (
        <CardTemplate
          content={<ModGameList gameList={games} getGameList={getGameList} handleCreateNewGame={handleCreateNewGame} />}
          overlay={<ModOverlay handleLogout={handleLogout} />}
        />
      );
    } else {
      return (
        <CardTemplate
          content={<ModNewGame handleCreateNewGame={handleCreateNewGame} />}
          overlay={<ModOverlay handleLogout={handleLogout} />}
        />
      );
    }
  }
  return <ModLogin setUserData={props.setUserData} userData={props.userData}/>;
}

export default ModGameControl;