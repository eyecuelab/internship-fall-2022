import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Grid } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { getData } from '../../../ApiHelper';
import TopicItem from './TopicItem';
import { Topic } from '../../../Types/Types';
import { Container } from './styles';
import { whiteButton, redButton, DogEarButton } from '../../componentStyles';


interface Props {
  setTopic: Dispatch<SetStateAction<Topic>>;
  handleSwitch: Dispatch<SetStateAction<boolean>>;
}

function ModChooseTopic(props: Props) {
	const { id } = useParams();
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getData(`/topics/game/${id}`).then((response) => {
			setTopics(response);
			for(let i=0; i<response.length; i++) {
				document.getElementById(`topic${response[i].id}`)?.setAttribute('disabled', 'true');
			}
		});
  }, []);

	const selectTopic = (topic: Topic) => {
		props.setTopic(topic);
		props.handleSwitch(true);
		console.log('ChooseTopic index selectTopic');
	}

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
                return <TopicItem key={topic.id} topic={topic} setTopic={props.setTopic} selectTopic={() => selectTopic(topic)}/>;
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
