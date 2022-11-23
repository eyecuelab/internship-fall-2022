import React, { useState } from 'react';
import '../../index.css';
import CardTemplate from '../../Components/CardTemplate/CardTemplate';
import ModLogin from '../../Components/ModLogin/ModLogin';
import ModGameList from '../../Components/ModGameList/ModGameList';
import ModNewGame from '../../Components/ModNewGame/ModNewGame';
import ModOverlay from '../../Components/ModOverlay/ModOverlay';

function ModGameControl() {
  const [login, setLogin] = useState(false);
  const [createNewGameView, setCreateNewGameView] = useState(false);

  const handleLogin = () => {
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
          content={<ModGameList handleCreateNewGame={handleCreateNewGame} />}
          overlay={<ModOverlay />}
        />
      );
    } else {
      return (
        <CardTemplate
          user="moderator"
          content={<ModNewGame handleCreateNewGame={handleCreateNewGame} />}
          overlay={<ModOverlay />}
        />
      );
    }
  }
  return <ModLogin login={handleLogin} />;
}

export default ModGameControl;
