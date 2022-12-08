import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import '../../../index.css';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, ButtonContainer } from './styles';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import { Button } from '@mui/material';
import {Topic} from '../../../Types/Types';
import { whiteButton, greenButton, redButton, DogEarButton } from '../../componentStyles';
import { postData, getData, putData } from '../../../ApiHelper';
import socket from '../../../Hooks/WebsocketHook';

interface Props {
  topic: Topic;
  handleSwitch: Dispatch<SetStateAction<boolean>>;
}

function ModStartRound(props: Props) {
	const { topic, handleSwitch } = props;
  const { id } = useParams();
	const [round, setRound] = useState(JSON.parse(localStorage.getItem('game') as string).Rounds.slice(-1)[0]);
  const [topics, setTopics] = useState([]);
  const user = JSON.parse(localStorage.getItem('user') as string);

  useEffect(() => {
    getData(`/topics/game/${id}`).then((response) => {
			setTopics(response);
		});
  }, []);

	console.log('ROUND: ', round);

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
					console.log("handleSetTopic");
					getData(`/teams/game/${id}`).then((teams) => {
						console.log('teams:', teams)
						getData(`/phrases/${topic.id}`).then((phrases) => {
							console.log("phrases:", phrases)
							for (let i=0; i<teams.length; i++) {
								putData('/team/addPhrase', { teamId: teams[i].id, phraseId: phrases[i].id}).then(() => {
									console.log('ADDED PHRASE: ', phrases[i].body, " TO TEAM: ", teams[i].teamName);
								});
								if (i === teams.length - 1) {
									console.log('i = teams length');
									props.handleSwitch(true);
									postData('/startGame', { gameId: id });
									console.log('NEW ROUND: ', newRound);
								}
							}
						});
					});
				});
			});
		});
	}

	const handleSetTopic = () => {
		console.log("handleSetTopic");
		getData(`/teams/game/${id}`).then((teams) => {
			console.log('teams:', teams)
			getData(`/phrases/${topic.id}`).then((phrases) => {
				console.log("phrases:", phrases)
				for (let i=0; i<teams.length; i++) {
					putData('/team/addPhrase', { teamId: teams[i].id, phraseId: phrases[i].id}).then(() => {
						console.log('ADDED PHRASE: ', phrases[i].body, " TO TEAM: ", teams[i].teamName);
					});
					if (i === teams.length) {
						// setTopic(topic);
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
          <h3>round *insert number* topic</h3>
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
          <DogEarButton style={redButton}>
            <h3>end game</h3>
          </DogEarButton>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default ModStartRound;
