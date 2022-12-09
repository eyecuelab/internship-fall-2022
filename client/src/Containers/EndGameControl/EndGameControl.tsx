import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import {useParams} from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate';
import { getData, postData } from '../../ApiHelper';
import ModOverlay from '../../Components/Moderators/Overlay';
import EndGame from '../../Components/Moderators/EndGame';
import { Game, Team, Round, User } from '../../Types/Types';
import TeamOverlay from '../../Components/Teams/Overlay';

interface Props {
  setUserData: Dispatch<SetStateAction<User | undefined>>;
}

function EndGameControl(props: Props) {
  const {id, code} = useParams();
  const [team, setTeam] = useState<Team>(JSON.parse(localStorage.getItem('team') as string));
  const [color, setColor] = useState('#888');
  const [submitState, setSubmitState] = useState(true);
	const [presenting, setPresenting] = useState(false);
  const [game, setGame] = useState<Game>(JSON.parse(localStorage.getItem('game') as string));
  const user = JSON.parse(localStorage.getItem('user') as string);

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  useEffect(() => {
		if (!user) {
			swapBanner();
		}
  }, []);

  const passedInfo = {
    labelOne: 'round',
    textOne: game.Rounds.length,
    labelTwo: 'teams left',
    textTwo: 'pass #',
    gameCode: game.gameCode,
  };

	const swapBanner = () => {
		switch(team?.teamName) {
			case("apple"):
				setColor('#0A1031');
				break;
			case("blueberry"):
				setColor('#0c114a');
				break;
			case("cherry"):
				setColor('#C70009');
				break;
			case("kiwi"):
				setColor('#61750D');
				break;
			case("lemon"):
				setColor('#105839');
				break;
			case("peach"):
				setColor('#DF9190');
				break;
			case("pear"):
				setColor('#CDA70D');
				break;		
		}
	}

  const bgUrl = `/images/${team?.teamName}_banner.png`;

  if (user) {
    return (
      <CardTemplate
        content={<EndGame game={game} />}
        overlay={<ModOverlay gameData={passedInfo} setPresenting={setPresenting}/>}
        bgUrl="/images/moderator_card_background_2.png"
        color="#15586a"
      />
    );
  } else {
    return (
      <CardTemplate
        content={<EndGame game={game} />}
        overlay={<TeamOverlay setSubmitState={setSubmitState} />}
        bgUrl={bgUrl}
        color={color}
      />
    );
  }
}

export default EndGameControl;
