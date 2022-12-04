import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import '../../../index.css';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, ButtonContainer } from './styles';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import { Button } from '@mui/material';
import {Topic} from '../../../Types/Types';
import { whiteButton, greenButton, redButton, DogEarButton } from '../../componentStyles';
import { postData, getData, putData } from '../../../ApiHelper';

interface Props {
  gameId: number;
  topic: Topic;
  handleSwitch: Dispatch<SetStateAction<boolean>>;
}

interface IFormInput {
  name: string;
  gameId: number;
  moderatorId: number;
}

function ModStartRound(props: Props) {
	const { gameId, topic, handleSwitch} = props;
  const { topicId } = useParams();
  const {setValue} = useForm<IFormInput>();
  const [topics, setTopics] = useState([]);
  const user = JSON.parse(localStorage.getItem('user') as string);

  getData(`/moderators/${user.email}`).then(moderator => {
    setValue('moderatorId', moderator.id);
    setValue('gameId', gameId);
  });

  useEffect(() => {
    getTopicList();
  }, []);

  const getTopicList = async () => {
    getData(`/topics/game/${gameId}`).then((response) => {
			setTopics(response);
		});
  };

	const selectTopic = () => {
		console.log('GAME ID: ', topic.gameId);
		console.log('TOPIC ID: ', topic.id);
		postData('/addRound', { gameId: topic.gameId, topicId: topic.id}).then(() => {
			getData(`/games/${topic.gameId}`).then((data) => {
				console.log('data: ', data)
				localStorage.setItem('game', data);
				const round = data.Rounds.slice(-1);
				console.log('ROUND?: ', data.Rounds.slice(-1)[0]);
				putData('/topics/', { topicId: topic.id, roundId: data.Rounds.slice(-1)[0].id });
				handleSwitch(true);
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
          <DogEarButton style={greenButton} onClick={selectTopic}>
            <h3>start round</h3>
          </DogEarButton>
          <DogEarButton style={whiteButton} onClick={handleSwitch}>
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
