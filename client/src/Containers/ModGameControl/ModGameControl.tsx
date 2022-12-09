import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import '../../index.css';
import CardTemplate from '../../Components/CardTemplate';
import ModLogin from '../../Components/Moderators/Login';
import ModGameList from '../../Components/Moderators/GameList';
import ModNewGame from '../../Components/Moderators/NewGame';
import ModOverlay from '../../Components/Moderators/Overlay';
import { getData } from '../../ApiHelper';
import { Game, User } from '../../Types/Types';

interface Props {
	userData: User | undefined;
	setUserData: Dispatch<SetStateAction<User | undefined>>;
	logout: () => void;
}

function ModGameControl(props: Props) {
	const { userData, setUserData, logout } = props;
  const [createNewGameView, setCreateNewGameView] = useState(false);
	const [presenting, setPresenting] = useState(false);
	const [games, setGames] = useState<Game[]>([]);

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

	useEffect(() => {
		setGames([]);
		const user = JSON.parse(localStorage.getItem('user') as string);
		if (user) {
		getData(`/moderators/${user.email}`)
			.then((response) => {
				setGames([...response.games])
			});
		} else {
			setGames([...[]]);
		}
		setUserData(userData);
	}, [createNewGameView]);

	const getGameList = () => {
		setGames([]);
		const user = JSON.parse(localStorage.getItem('user') as string);
		if (user) {
		getData(`/moderators/${user.email}`)
			.then((response) => {
				setGames([...response.games])
			});
		} else {
			setGames([...[]]);
		}
	}

  const handleCreateNewGame = () => {
    setCreateNewGameView(!createNewGameView);
		getGameList();
  };

  if (localStorage.getItem('user')) {
    if (!createNewGameView) {
      return (
        <CardTemplate
          content={<ModGameList gameList={games} getGameList={getGameList} handleCreateNewGame={handleCreateNewGame} />}
          overlay={<ModOverlay handleLogout={logout} setPresenting={setPresenting}/>}
					bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
        />
      );
    } else {
      return (
        <CardTemplate
          content={<ModNewGame getGameList={getGameList} handleCreateNewGame={handleCreateNewGame} />}
          overlay={<ModOverlay handleLogout={logout} setPresenting={setPresenting}/>}
					bgUrl='/images/moderator_card_background_2.png'
					color='#15586a'
        />
      );
    }
  }
  return <ModLogin setUserData={setUserData} />;
}

export default ModGameControl;