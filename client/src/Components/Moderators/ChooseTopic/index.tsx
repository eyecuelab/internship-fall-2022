import React, {useState, useEffect} from 'react';
import {Grid, TextField, Button} from '@mui/material';
import {Link, useParams} from 'react-router-dom';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {getData} from '../../../ApiHelper';
import TopicItem from './TopicItem';
import {Topic} from '../../../Types/Types';
import { Container, ButtonContainer } from './styles';
import { whiteButton, redButton, DogEarButton } from '../../componentStyles';


interface Props {
  gameId: number;
  setTopic: () => void;
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
	const [round, setRound] = useState(localStorage.getItem('round'));
  const user = JSON.parse(localStorage.getItem('user') as string);

  useEffect(() => {

    getData(`/topics/game/${props.gameId}`).then((response) => {
			setTopics(response);
			for(let i=0; i<response.length; i++) {
				document.getElementById(`topic${response[i].id}`)?.setAttribute('disabled', 'true');
			}
		});

		getData(`/moderators/${user.email}`).then(moderator => {
			setValue('moderatorId', moderator.id);
			setValue('gameId', props.gameId);
			// console.log('ROUND: ', JSON.parse(localStorage.getItem('game') as string).Rounds.slice(-1));
		});

  }, []);

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
                return <TopicItem key={topic.id} topic={topic} setTopic={props.setTopic} handleSwitch={props.handleSwitch}/>;
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
