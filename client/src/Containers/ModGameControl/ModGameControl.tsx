import React, { useState } from 'react';
import '../../index.css';
import CardTemplate from '../../Components/CardTemplate/CardTemplate';
import ModLogin from '../../Components/ModLogin/ModLogin';
import ModGameList from '../../Components/ModGameList/ModGameList';
import ModNewGame from '../../Components/ModNewGame/ModNewGame';
import ModOverlay from '../../Components/ModOverlay/ModOverlay';

const getGames = () => {
  // return games;
};

// const gameList = await getGames();

interface Props {
	setUserData: any;
	userData: any;
}

function ModGameControl(props: Props) {
  // const [login, setLogin] = useState(false);
  const [createNewGameView, setCreateNewGameView] = useState(false);
  // const [games, setGames] = useState([]);

  // useEffect(() => {
  //   getGameList();
  // }, []);

  // const getGameList = async () => {
	// 	const moderator = JSON.parse(localStorage.getItem('user') as string);
	// 	if (moderator) {
	// 	const moderatorId = await getData(`/moderators/${moderator.email}`);
	// 	const gameList = await getData(`/games/${moderatorId}`);
  //   setGames(gameList);
	// 	} else {
	// 		setGames([]);
	// 	}
  // };

  // const deleteGame = (gameId: any) => {
  //   deleteData(`/games/${gameId}`).then(() => getGameList());
  // };

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  const handleLogin = () => {
    console.log(JSON.parse(localStorage.getItem('user') as string));
  };

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
          user="moderator"
          content={
            <ModGameList
              handleCreateNewGame={handleCreateNewGame}
            />
          }
          overlay={<ModOverlay handleLogout={handleLogout} />}
        />
      );
    } else {
      return (
        <CardTemplate
          user="moderator"
          content={<ModNewGame handleCreateNewGame={handleCreateNewGame} />}
          overlay={<ModOverlay handleLogout={handleLogout} />}
        />
      );
    }
  }
  return <ModLogin login={handleLogin} setUserData={props.setUserData} userData={props.userData}/>;
}

export default ModGameControl;
