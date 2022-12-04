import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate';
import { getData } from '../../ApiHelper';
import ModPresenting from '../../Components/Moderators/Presenting';
import ModHandleGuess from '../../Components/Moderators/HandleGuess';
import ModOverlay from '../../Components/Moderators/Overlay';
import ModLogin from '../../Components/Moderators/Login';
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

  useEffect(() => {
    getGameList();
    // I guess I need this for the gameCode Id link
    getHaikuInfo();
    getTeam();
  }, []);

  const getHaikuInfo = async () => {
    const haikus = await getData('/haicues/1/1');
    // hardcoded-should be `/haicues/${roundId}/${teamId }`: data should be in db/Turns/roundID & performingTeamID.
    setHaiku(haikus);
  };

  const getGameList = async () => {
    const game = await getData(`/games/${id}`);
    setGame(game);
  };

  const getTeam = async () => {
    const currentTeam = await getData('/teams/1');
    // hardcoded- should be `/teams/${teamId }`. Where am I geting the teamID from? should match db/Turns/peformingTeamId.
    setTeam(currentTeam);
  };

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  const handleBuzzToggle = () => {
    setBuzzedIn(!buzzedIn);
  };

  const passedInfo = {
    labelOne: 'round',
    textOne: 'pass #',
    labelTwo: 'teams left',
    textTwo: 'pass #',
    gameCode: game.gameCode,
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
            <ModPresenting handleSwitch={handleBuzzToggle} haikuData={haiku} gameData={game} />
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
