import React, {useState, useEffect} from 'react';
import {Grid, TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {getData} from '../../../ApiHelper';
import TopicItem from './TopicItem';
import {Topic} from '../../../Types/Types';
import { Container, ButtonContainer } from './styles';
import { whiteButton, redButton, DogEarButton } from '../../componentStyles';


interface Props {
  gameId: number;
  handleSwitch: () => void;
}

interface IFormInput {
  name: string;
  gameId: number;
  moderatorId: number;
}

function ModChooseTopic(props: Props) {
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

  redButton.width = '100%';
  whiteButton.width = '100%';

  return (
    <div style={{position: 'relative', height: '100%'}}>
      <Container>
        <div>
          <h3>choose a new round topic</h3>
          <hr />

          {
            <Grid container>
              {topics?.map((topic: Topic) => {
                return <TopicItem key={topic.name} topic={topic} handleSwitch={props.handleSwitch}/>;
              })}
            </Grid>
          }
        </div>
      </Container>
      <div className="spacer" />
      <Link to="/" className="bottom">
        {' '}
        {/* FIX THIS ROUTE */}
        <DogEarButton style={redButton}>
          <h3>end game</h3>
        </DogEarButton>
      </Link>
    </div>
  );
}

export default ModChooseTopic;
