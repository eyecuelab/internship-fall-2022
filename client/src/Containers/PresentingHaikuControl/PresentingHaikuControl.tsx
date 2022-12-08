import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate';
import { getData, putData } from '../../ApiHelper';
import ModPresenting from '../../Components/Moderators/Presenting';
import ModHandleGuess from '../../Components/Moderators/HandleGuess';
import ModOverlay from '../../Components/Moderators/Overlay';
import ModLogin from '../../Components/Moderators/Login';
import { Game, Haicue, Round, Team, Topic, Turn, User } from '../../Types/Types';
import socket from '../../Hooks/WebsocketHook';


interface Props {
  setUserData: Dispatch<SetStateAction<User | undefined>>;
}

function PresentingHaikuControl(props: Props) {
  const { id } = useParams();
	const { setUserData } = props;
  const [game, setGame] = useState<Game>(JSON.parse(localStorage.getItem('game') as string));
  const [haiku, setHaiku] = useState<Haicue>();
  const [team, setTeam] = useState<Team>(JSON.parse(localStorage.getItem('presenting-team') as string));
	const [guessingTeam, setGuessingTeam] = useState<Team>();
  const [round, setRound]= useState<Round>(JSON.parse(localStorage.getItem('game') as string).Rounds.slice(-1)[0]);
	const [turn, setTurn] = useState<Turn>(JSON.parse(localStorage.getItem('turn') as string));
  const [topic, setTopic]= useState<Topic>(JSON.parse(localStorage.getItem('game') as string).Topic.filter((topic: Topic) => topic.roundId === round.id));
  const [buzzedIn, setBuzzedIn] = useState(false);
	const [lineNumber, setLineNumber] = useState(1);

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

	useEffect(() => {
		socket.on('connection', () => {
			console.log('socket open');
		});

		socket.on('buzz', (team: Team) => {
			setGuessingTeam(team);
			setBuzzedIn(true);
		});

		return () => {
			socket.off('connection');
			socket.off('buzz');
		}
	}, []);

  useEffect(() => {
    getData(`/games/${id}`).then((games) => {
			setGame(games);
			setRound(games.Rounds.slice(-1)[0]);
		});

		getData(`/turns/presentingTeam/${round.id}`).then((turn) => {
			setTurn(turn);
			setTeam(turn.performingTeam);
		});

  }, []);

  console.log(team);

  useEffect(() => {
		getData(`/topic/${round.topicId}`).then((topic) => {
			setTopic(topic);
		});

    getData(`/haicues/round/${round.id}`).then((haikus) => {
			setHaiku(haikus);
		});

  }, [round]);

  const lineAdvancer = () => {
    if (lineNumber < 3) {
      setLineNumber(lineNumber + 1);
    } else {
      setLineNumber(1);
    }
  };

	const assignPoints = () => {
		let guessingTeamScore = guessingTeam?.teamScore;
		let presentingTeamScore = team.teamScore
		switch (lineNumber) {
			case(1):
				(guessingTeamScore as number) += 5;
				presentingTeamScore += 1;
				break;
			case(2):
				(guessingTeamScore as number) += 3;
				presentingTeamScore += 3;
				break;
			case(3):
				(guessingTeamScore as number) += 1;
				presentingTeamScore += 5;
				break;
			default:
				(guessingTeamScore as number) += 0;
				presentingTeamScore += 0;
		}
		putData('/team/addPoints', {teamId: guessingTeam?.id, points: (guessingTeamScore)});
		putData('/team/addPoints', {teamId: team.id, points: presentingTeamScore});
	}

  const handleBuzzToggle = () => {
		socket.emit('buzzer_refresh');
    setBuzzedIn(false);
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
							assignPoints={assignPoints}
							// @ts-ignore
							guessingTeam={guessingTeam}
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
							lineAdvancer={lineAdvancer}
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
  return <ModLogin setUserData={setUserData} />;
}

export default PresentingHaikuControl;
