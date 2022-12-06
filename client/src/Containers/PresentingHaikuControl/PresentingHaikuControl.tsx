import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate';
import { getData, postData } from '../../ApiHelper';
import ModPresenting from '../../Components/Moderators/Presenting';
import ModHandleGuess from '../../Components/Moderators/HandleGuess';
import ModOverlay from '../../Components/Moderators/Overlay';
import ModLogin from '../../Components/Moderators/Login';
import { Games } from '@mui/icons-material';
import { Topic } from '../../Types/Types';
// do I need ModLogin?

interface Props {
  setUserData: Dispatch<SetStateAction<{}>>;
  userData: any;
}

function PresentingHaikuControl(props: Props) {
  const { id } = useParams();
  const [game, setGame] = useState(JSON.parse(localStorage.getItem('game') as string));
  const [haiku, setHaiku] = useState();
  const [team, setTeam] = useState(JSON.parse(localStorage.getItem('presenting-team') as string));
  const [round, setRound]= useState(JSON.parse(localStorage.getItem('game') as string).Rounds.slice(-1)[0]);
	const [turn, setTurn] = useState(JSON.parse(localStorage.getItem('turn') as string));
  const [topic, setTopic]= useState(JSON.parse(localStorage.getItem('game') as string).Topic.filter((topic: Topic) => topic.roundId === round.id));
  const [buzzedIn, setBuzzedIn] = useState(false);
  const [teamsLeft, setTeamsLeft] = useState(0);

  useEffect(() => {
    getData(`/games/${id}`).then((games) => {
			setGame(games);
			setRound(games.Rounds.slice(-1)[0]);
		});

		getData(`/turns/presentingTeam/${round.id}`).then((turn) => {
			console.log('TURN DATA: ', turn);
			setTurn(turn);
			setTeam(turn.performingTeam);
		});

  }, []);

  useEffect(() => {
		getData(`/topic/${round.topicId}`).then((topic) => {
			setTopic(topic);
		});

    getData(`/haicues/rounds/${round.id}`).then((haikus) => {
			setHaiku(haikus);
		});

  }, [round]);

	const setNewTurn = () => {
		postData('/turns', {roundId: round.id, presentingTeamId: 1, haicueId: 1});
	}

  console.log('GAME: ', game);

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  const handleBuzzToggle = () => {
    setBuzzedIn(!buzzedIn);
  };

  const passedInfo = {
    labelOne: 'round',
    textOne: game.Rounds.length,
    labelTwo: 'teams left',
    textTwo: 'pass #',
    gameCode: game.gameCode,
    gameRound: round,
  };

  if (localStorage.getItem('user')) {
    if (buzzedIn) {
      return (
        <CardTemplate
          content={
            <ModHandleGuess 
              handleSwitch={handleBuzzToggle} 
              haikuData={haiku} 
              gameData={game}
              topicData={topic}
            />}
          overlay={<ModOverlay gameData={passedInfo} />}
          bgUrl="/images/moderator_card_background_2.png"
          color="#15586a"
        />
      );
    } else {
      return (
        <CardTemplate
          content={
            <ModPresenting 
              handleSwitch={handleBuzzToggle} 
              haikuData={haiku} 
              gameData={game}
              topicData={topic}
            />
          }
          overlay={<ModOverlay gameData={passedInfo} />}
          bgUrl="/images/moderator_card_background_2.png"
          color="#15586a"
        />
      );
    }
  }
  return <ModLogin setUserData={props.setUserData} userData={props.userData} />;
}

export default PresentingHaikuControl;
