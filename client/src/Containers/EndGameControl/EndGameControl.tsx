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
  const [team, setTeam] = useState<Team>();
  const [color, setColor] = useState('#888');
  const [submitState, setSubmitState] = useState(true);
  const [game, setGame] = useState<Game>(JSON.parse(localStorage.getItem('game') as string));
  const [round, setRound] = useState<Round>(
    JSON.parse(localStorage.getItem('game') as string).Rounds.slice(-1)[0]
  );
  const user = JSON.parse(localStorage.getItem('user') as string);

  const colors = {
    apple: '#0A1031',
    blueberry: '#0c114a',
    cherry: '#C70009',
    kiwi: '#61750D',
    lemon: '#105839',
    peach: '#DF9190',
    pear: '#CDA70D',
    strawberry: '#D00D0A',
  };

  document.documentElement.style.background = 'url(/images/moderator_background.png)';

  useEffect(() => {
    getData(`/games/${id}`).then(games => {
      setGame(games);
      setRound(games.Rounds.slice(-1)[0]);
    });
  }, []);

  const passedInfo = {
    labelOne: 'round',
    textOne: game.Rounds.length,
    labelTwo: 'teams left',
    textTwo: 'pass #',
    gameCode: game.gameCode,
    gameRound: round,
  };

  const bgUrl = `/images/${team?.teamName}_banner.png`;

  useEffect(() => {
    getData(`/games/room/${code?.toUpperCase()}`).then(response => {
      if (!localStorage.getItem('team')) {
        postData('/teams', {gameId: response.id}).then(data => {
          setTeam(data);
          localStorage.setItem('team', JSON.stringify(data));
          setColor(eval(`colors.${data.teamName}`));
        });
      } else {
        const teamData = JSON.parse(localStorage.getItem('team') as string);
        setTeam(teamData);
        setColor(eval(`colors.${teamData.teamName}`));
      }
    });
  }, []);

  if (user) {
    return (
      <CardTemplate
        content={<EndGame gameId={game} />}
        overlay={<ModOverlay gameData={passedInfo} />}
        bgUrl="/images/moderator_card_background_2.png"
        color="#15586a"
      />
    );
  } else {
    return (
      <CardTemplate
        content={<EndGame gameId={game} />}
        overlay={<TeamOverlay setSubmitState={setSubmitState} />}
        bgUrl={bgUrl}
        color={color}
      />
    );
  }
}

export default EndGameControl;
