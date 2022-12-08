import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate';
import { getData } from '../../ApiHelper';
import ModOverlay from '../../Components/Moderators/Overlay';
import TeamList from '../../Components/Moderators/TeamList';
import ModLogin from '../../Components/Moderators/Login';
import { User } from '../../Types/Types';

interface Props {
	setUserData: Dispatch<SetStateAction<User | undefined>>;
}

function BrainstormingPhaseControl(props: Props) {
  const { id } = useParams();
	const { setUserData } = props;
  const [game, setGame] = useState(JSON.parse(localStorage.getItem('game') as string));
  const [presenting, setPresenting] = useState(false);
	const [passedInfo, setPassedInfo] = useState({textOne: game.Rounds.length, labelOne: 'round', gameCode: game?.gameCode});

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  useEffect(() => {
    getData(`/games/${ id }`).then((game) => {
			setPassedInfo({textOne: game.Rounds.length, labelOne: 'round', gameCode: game.gameCode});
			setGame(game);
			localStorage.setItem('game', JSON.stringify(game))
		});
  }, [game.id]);

  if (localStorage.getItem('user')) {
		return (
			<CardTemplate
				content={<TeamList gameId={game} presenting={presenting} setPresenting={setPresenting}/>}
				overlay={<ModOverlay gameData={passedInfo} setPresenting={setPresenting} />}
				bgUrl="/images/moderator_card_background_2.png"
				color="#15586a"
			/>
		);
	}
	return <ModLogin setUserData={setUserData} />;
}

export default BrainstormingPhaseControl;
