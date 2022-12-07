import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate';
import { getData, postData } from '../../ApiHelper';
import ModPresenting from '../../Components/Moderators/Presenting';
import ModHandleGuess from '../../Components/Moderators/HandleGuess';
import ModOverlay from '../../Components/Moderators/Overlay';
import ModLogin from '../../Components/Moderators/Login';
import { Game, Haicue, Round, Team, Topic, Turn } from '../../Types/Types';
import socket from '../../Hooks/WebsocketHook';


interface Props {
  setUserData: Dispatch<SetStateAction<{}>>;
  userData: any;
}

function PresentingHaikuControl(props: Props) {
  const { id } = useParams();
  const [game, setGame] = useState<Game>(JSON.parse(localStorage.getItem('game') as string));
  const [haiku, setHaiku] = useState<Haicue>({id: 0, roundId: 0, teamId: 0, lineGuessed: 0, correctTeam: 0, line1: '', line2: '', line3: ''});
  const [team, setTeam] = useState<Team>(JSON.parse(localStorage.getItem('presenting-team') as string));
  const [round, setRound]= useState<Round>(JSON.parse(localStorage.getItem('game') as string).Rounds.slice(-1)[0]);
	const [turn, setTurn] = useState<Turn>(JSON.parse(localStorage.getItem('turn') as string));
  const [topic, setTopic]= useState<Topic>(JSON.parse(localStorage.getItem('game') as string).Topic.filter((topic: Topic) => topic.roundId === round.id));
  const [buzzedIn, setBuzzedIn] = useState(false);
  // const [teamsLeft, setTeamsLeft] = useState(0);

	console.log('INITIAL GAME: ', game);
	console.log('INITIAL ROUND: ', round);
	// console.log('INITIAL ',);
	// console.log('INITIAL ',);

	useEffect(() => {
		socket.on('connection', () => {
			console.log('socket open');
		});

		socket.on('buzz', (team: Team) => {
			console.log('a team buzzed in: ', team.teamName);
		});

		return () => {
			socket.off('connection');
			socket.off('buzz');
		}
	}, [])

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
		console.log('ROUND TOPIC ID', round.topicId);
		getData(`/topic/${round.topicId}`).then((topic) => {
			setTopic(topic);
		});

    getData(`/haicues/round/${round.id}`).then((haikus) => {
			setHaiku(haikus);
		});

  }, [round]);

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
							// teamData={team} 
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
