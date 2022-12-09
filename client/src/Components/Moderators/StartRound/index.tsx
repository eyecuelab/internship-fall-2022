import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import '../../../index.css';
import { useParams, Link } from 'react-router-dom';
import { Container, ButtonContainer } from './styles';
import { Topic } from '../../../Types/Types';
import { Game } from '../../../Types/Types';
import { whiteButton, greenButton, redButton, DogEarButton } from '../../componentStyles';
import { postData, getData, putData } from '../../../ApiHelper';

interface Props {
  topic: Topic;
	game: Game;
  handleSwitch: Dispatch<SetStateAction<boolean>>;
}

function ModStartRound(props: Props) {
	const { topic, game, handleSwitch } = props;
  const { id } = useParams();
	const [round, setRound] = useState(JSON.parse(localStorage.getItem('game') as string).Rounds.slice(-1)[0]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getData(`/topics/game/${id}`).then((response) => {
			setTopics(response);
		});
  }, []);

	const doBoth = () => {
		selectTopic();
		handleSetTopic();
	}

	const selectTopic = () => {
		postData('/round', { gameId: id, topicId: topic.id }).then((newRound) => {
			getData(`/games/${id}`).then((data) => {
				localStorage.setItem('game', JSON.stringify(data));
				setRound(newRound);
				putData('/topics/', { topicId: topic.id, roundId: newRound.id }).then(() => {
					getData(`/teams/game/${id}`).then((teams) => {
						getData(`/phrases/${topic.id}`).then((phrases) => {
							for (let i=0; i<teams.length; i++) {
								putData('/team/addPhrase', { teamId: teams[i].id, phraseId: phrases[i].id}).then(() => {
								});
								if (i === teams.length - 1) {
									handleSwitch(true);
									postData('/startGame', { gameId: id });
								}
							}
						});
					});
				});
			});
		});
	}

	const handleSetTopic = () => {
		getData(`/teams/game/${id}`).then((teams) => {
			getData(`/phrases/${topic.id}`).then((phrases) => {
				for (let i=0; i<teams.length; i++) {
					putData('/team/addPhrase', { teamId: teams[i].id, phraseId: phrases[i].id}).then(() => {
					});
					if (i === teams.length) {
						handleSwitch(true);
					}
				}
			});
		});
  }

  whiteButton.width = '100%';
  redButton.width = '100%';
  greenButton.width = '100%';

  return (
    <>
      <Container>
        <div>
          <h3>round {game.Rounds.length} topic</h3>
          <hr />
          <h1>{topic.name}</h1>
          <br />
        </div>
        <ButtonContainer>
					<Link to={{pathname: `/game/${id}/brainstorming`}}>
          <DogEarButton style={greenButton} onClick={doBoth}>
            <h3>start round</h3>
          </DogEarButton>
					</Link>
          <DogEarButton style={whiteButton} onClick={() => handleSwitch(false)}>
            <h3>back to selection</h3>
          </DogEarButton>
					<Link to={{pathname: `/`}}>
						<DogEarButton style={redButton}>
							<h3>end game</h3>
						</DogEarButton>
					</Link>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default ModStartRound;
