import React, { useState } from 'react';
import '../../index.css';
import CardTemplate from '../../Components/CardTemplate/CardTemplate';
import ModLogin from '../../Components/ModLogin/ModLogin';
import ModGameList from '../../Components/ModGameList/ModGameList';
import ModNewGame from '../../Components/ModNewGame/ModNewGame';
import ModOverlay from '../../Components/ModOverlay/ModOverlay';

interface Props {
	setUserData: any;
	userData: any;
}

function ModGameControl(props: Props) {
  const [login, setLogin] = useState(false);
  const [createNewGameView, setCreateNewGameView] = useState(false);

	document.documentElement.style.background = 'url(/images/moderator_background.png)';

  const handleLogin = () => {
    setLogin(true);
  };

  const handleLogout = () => {
    setLogin(false);
  };

  const handleCreateNewGame = () => {
    setCreateNewGameView(!createNewGameView);
  };

  if (login) {
    if (!createNewGameView) {
      return (
        <CardTemplate
          user="moderator"
          content={<ModGameList handleCreateNewGame={handleCreateNewGame} />}
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
