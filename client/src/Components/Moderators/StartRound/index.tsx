import React, {useState, useEffect} from 'react';
import '../../../index.css';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, ButtonContainer } from './styles';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import { Button } from '@mui/material';
import {Topic} from '../../../Types/Types';
import { whiteButton, greenButton, redButton, DogEarButton } from '../../componentStyles';
import { postData, getData } from '../../../ApiHelper';

interface Props {
  gameId: number;
  topic: Topic;
  handleSwitch: () => void;
}

interface IFormInput {
  name: string;
  gameId: number;
  moderatorId: number;
}

function ModStartRound(props: Props) {
	// const gameId = Number(localStorage.getItem('gameId'));

	// const startRound = () => {
	// 	postData('/start', gameId);
	// }
  const { topicId } = useParams();
  const {setValue} = useForm<IFormInput>();
  const [topics, setTopics] = useState([]);
  const user = JSON.parse(localStorage.getItem('user') as string);

  getData(`/moderators/${user.email}`).then(moderator => {
    setValue('moderatorId', moderator.id);
    setValue('gameId', props.gameId);
  });

  useEffect(() => {
    getTopicList();
  }, []);

  const getTopicList = async () => {
    const topicList = await getData(`/topics/${props.gameId}`);
    setTopics(topicList);
  };

  whiteButton.width = '100%';
  redButton.width = '100%';
  greenButton.width = '100%';

  return (
    <>
      <Container>
        <div>
          <h3>round *insert number* topic</h3>
          <hr />
          <h1>{props.topic.name}</h1>
          <br />
        </div>
        <ButtonContainer>
          <DogEarButton style={greenButton}>
            <h3>start round</h3>
          </DogEarButton>
          <DogEarButton style={whiteButton} onClick={props.handleSwitch}>

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
