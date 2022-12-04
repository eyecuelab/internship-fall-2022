import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import '../../../index.css';
import { useParams, useNavigate } from 'react-router-dom';
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
	const { topic, handleSwitch} = props;
  const { id } = useParams();
  const {setValue} = useForm<IFormInput>();
  const [topics, setTopics] = useState([]);
  const user = JSON.parse(localStorage.getItem('user') as string);

  useEffect(() => {
    getTopicList();
  }, []);

  const getTopicList = async () => {
    getData(`/topics/game/${id}`).then((response) => {
			setTopics(response);
		});
  };

	const selectTopic = () => {
		postData('/addRound', { gameId: id, topicId: topic.id}).then(() => {
			getData(`/games/${id}`).then((data) => {
				localStorage.setItem('game', data);
				putData('/topics/', { topicId: topic.id, roundId: data.Rounds.slice(-1)[0].id });
				postData('/startGame', { gameId: id });
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
