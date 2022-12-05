import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate';
import { getData } from '../../ApiHelper';
import ModPresenting from '../../Components/Moderators/Presenting';
import ModHandleGuess from '../../Components/Moderators/HandleGuess';
import ModOverlay from '../../Components/Moderators/Overlay';
import ModLogin from '../../Components/Moderators/Login';
import { Games } from '@mui/icons-material';
// do I need ModLogin?

interface Props {
  setUserData: Dispatch<SetStateAction<{}>>;
  userData: any;
}

function PresentingHaikuControl(props: Props) {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [buzzedIn, setBuzzedIn] = useState(false);
  const [haiku, setHaiku] = useState({});
  const [team, setTeam] = useState({});
  const [teamsLeft, setTeamsLeft] = useState(0);
  const [round, setRound]= useState({});
  const [topic, setTopic]= useState({});

  useEffect(() => {
    getGameList();
    // I guess I need this for the gameCode Id link
    getHaikuInfo();
  }, []);

  useEffect(() => {
    if(round.topicId){
      getTopicInfo();
    }
  }, [round.topicId]);

  const getHaikuInfo = async () => {
    const haikus = await getData('/haicues/1/1');
    // hardcoded-should be `/haicues/${roundId}/${teamId }`: data should be in db/Turns/roundID & performingTeamID.
    setHaiku(haikus);
  };

  const getGameList = async () => {
    const games = await getData(`/games/${id}`);
    const roundInfo = games.Rounds[0];
    setRound(roundInfo)
    setGame(games);
  };

  const getTopicInfo = async () => {
    if (round.topicId !=null) {
      const topicInfo = await getData(`/topic/${round.topicId}`);
      setTopic(topicInfo)
    } else {null}
  };

  console.log(haiku);

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  const handleBuzzToggle = () => {
    setBuzzedIn(!buzzedIn);
  };

  const passedInfo = {
    labelOne: 'round',
    textOne: 'round',
    labelTwo: 'teams left',
    textTwo: 'pass #',
    gameCode: game.gameCode,
    gameRound: round,
  };

  if (localStorage.getItem('user')) {
    1;
    if (buzzedIn) {
      return (
        <CardTemplate
          content={<ModHandleGuess haikuData={haiku} handleSwitch={handleBuzzToggle} />}
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
