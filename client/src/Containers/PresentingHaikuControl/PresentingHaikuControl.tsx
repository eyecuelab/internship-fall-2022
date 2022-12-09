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
	// @ts-ignore
  const [haiku, setHaiku] = useState<Haicue>({ Phrase: { body: '' }});
  const [team, setTeam] = useState<Team>(JSON.parse(localStorage.getItem('presenting-team') as string));
	const [guessingTeam, setGuessingTeam] = useState<Team>();
  const [round, setRound]= useState<Round>(JSON.parse(localStorage.getItem('game') as string).Rounds.slice(-1)[0]);
	const [turn, setTurn] = useState(0);
	const [turns, setTurns] = useState<Turn[]>();
	const [presenting, setPresenting] = useState(true);
	// @ts-ignore
	const [thisTurn, setThisTurn] = useState<Turn>({ id: 0 });
  const [topic, setTopic]= useState<Topic>(JSON.parse(localStorage.getItem('game') as string).Topic.filter((topic: Topic) => topic.roundId === round.id));
  const [buzzedIn, setBuzzedIn] = useState(false);
	const [lineNumber, setLineNumber] = useState(1);

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

	useEffect(() => {
		socket.on('connection', () => {
			console.log('socket open');
		});

		socket.on('buzz', (team: Team) => {
			console.log('buzzed team: ', team);
			setGuessingTeam(team);
			setBuzzedIn(true);
		});

		return () => {
			socket.off('connection');
			socket.off('buzz');
		}
	}, []);

  useEffect(() => {
		setTurn(turn);
		setRound(game.Rounds.slice(-1)[0]);
		console.log('ROUND: ', game.Rounds.slice(-1)[0]);
		getData(`/rounds/${game.Rounds.slice(-1)[0].id}`).then((round) => {
			console.log('GET ROUND: ', round);
			setTurns(round.Turns);
			setThisTurn(round.Turns[turn]);
			console.log('ROUND TURNS', round.Turns);
			getData(`/turns/presentingTeam/${round.Turns[turn].id}`).then((turn) => {
				console.log('GET TURN: ', turn);
				setTeam(turn.performingTeam);
				setHaiku(turn.Haicue);
			});
		});
  }, []);

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
			setTurn(turn+1);
      setLineNumber(1);
    }
		socket.emit('buzzer_refresh');
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
		socket.emit('buzzer_refresh');
		setTurn(turn+1);
		setLineNumber(1);
		setBuzzedIn(false);
	}

  const handleBuzzToggle = () => {
		socket.emit('buzzer_refresh');
    setBuzzedIn(!buzzedIn);
  };

	const handleEndRound = () => {
		socket.emit('view_score');
	}

  const passedInfo = {
    labelOne: 'round',
    textOne: game.Rounds.length,
    labelTwo: 'teams left',
    textTwo: 'pass #',
    gameCode: game.gameCode,
    gameRound: round,
  };

  if (localStorage.getItem('user')) {
		if (thisTurn) {
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
							// @ts-ignore
							turnData={thisTurn}
							teamData={team}
            />}
          overlay={<ModOverlay gameData={passedInfo} setPresenting={setPresenting}/>}
          bgUrl="/images/moderator_card_background_2.png"
          color="#15586a"
        />
      );
    } else {
      return (
        <CardTemplate
          content={
            <ModPresenting 
              handleSwitch={handleEndRound} 
							lineAdvancer={lineAdvancer}
              gameData={game}
              topicData={topic}
							// @ts-ignore
							turnData={thisTurn}
							teamData={team}
							turn={turn}
							lineNumber={lineNumber}
            />
          }
          overlay={<ModOverlay gameData={passedInfo} setPresenting={setPresenting}/>}
          bgUrl="/images/moderator_card_background_2.png"
          color="#15586a"
        />
      );
    }
		} else {
			<></>
		}
  }
  return <ModLogin setUserData={setUserData} />;
}

export default PresentingHaikuControl;
