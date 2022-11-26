import React, { useState, useEffect } from 'react';
import '../../index.css';
import { deleteData, getData } from '../../ApiHelper';
import CardTemplate from '../../Components/CardTemplate/CardTemplate';
import ModLogin from '../../Components/ModLogin/ModLogin';
import ModGameList from '../../Components/ModGameList/ModGameList';
import ModNewGame from '../../Components/ModNewGame/ModNewGame';
import ModOverlay from '../../Components/ModOverlay/ModOverlay';

const getGames = () => {
  const games = getData('/games');
  return games;
};

const gameList = await getGames();

function ModGameControl() {
  const [login, setLogin] = useState(true);
  const [createNewGameView, setCreateNewGameView] = useState(false);
  const [games, setGames] = useState([]);

	useEffect(() => {
		getGameList();
	}, []);

  const getGameList = async () => {
		const gameList = await getData('/games');
		setGames(gameList);
	}

  const deleteGame = (gameId: any)=> {
    deleteData(`/games/${gameId}`).then(()=> getGameList());
  }

	document.documentElement.style.background = 'url(/images/moderator_background.png)';
  
  const handleLogin = () => {
    setLogin(true);
  };

  const handleLogout = () => {
    setLogin(true);
  };

  const handleCreateNewGame = () => {
    setCreateNewGameView(!createNewGameView);
  };

  if (login) {
    if (!createNewGameView) {
      return (
        <CardTemplate
          user="moderator"
          content={<ModGameList handleDeleteGame ={deleteGame} games= {games} handleCreateNewGame={handleCreateNewGame} />}
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
  return <ModLogin login={handleLogin} />;
}

export default ModGameControl;
