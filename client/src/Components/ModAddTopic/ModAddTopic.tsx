import React, {useState, useEffect} from 'react';
import {Grid, TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {greenButton, whiteButton} from '../componentStyles';
import {getData, postData, deleteData} from '../../ApiHelper';
import TopicItem from './TopicItem';
import { Topic } from '../../Types/Types';

interface Props {
	gameId: number;
}

interface IFormInput {
  name: string;
	gameId: number;
	moderatorId: number;
}

function ModAddTopic(props: Props) {
  const {control, handleSubmit, setValue, reset} = useForm<IFormInput>();
  const [topics, setTopics] = useState([]);
	const moderator = JSON.parse(localStorage.getItem('user') as string);
	console.log('MODERATOR: ', moderator)
	setValue('gameId', props.gameId);
	setValue('moderatorId', moderator.id);

	useEffect(() => {
		getTopicList();
	}, []);

  const addNewTopic: SubmitHandler<IFormInput> = (data: unknown) => {
    postData('/topics', data).then(() => getTopicList());
		reset((data) => ({ ...data, name: '' }))
  };

	const deleteTopic = (topicId: any) => {
		deleteData(`/topics/${topicId}`).then(() => getTopicList());
	}

	const getTopicList = async () => {
		const topicList = await getData(`/topics/${props.gameId}`);
		setTopics(topicList);
	};

  greenButton.width = '100%';
  whiteButton.width = '100%';

  return (
    <div style={{ position: 'relative', height: '100%'}}>
      <Grid container>
        <Grid container item xs={7} >
          <h3>TOPICS</h3>
        </Grid>
        <Grid container item xs={4} justifyContent='flex-end'>
          <h3>PHRASES</h3>
        </Grid>
      </Grid>
      <hr />
      {
        <Grid container>
          {topics?.map((topic: Topic) => { return <TopicItem key={topic.id} topic={topic} deleteTopic={deleteTopic} /> })}
        </Grid>
      }
      <form onSubmit={handleSubmit(addNewTopic)}>
        <Grid container spacing={2} style={{position: 'relative', top: 20}}>
          <Grid container item xs={9} direction="column">
            <Controller
              control={control}
              name="name"
              render={({field}) => (
                <TextField
                  {...field}
                  fullWidth
									id="topic-input"
                  variant="standard"
                  type="text"
                  multiline
									required
                  InputProps={{
                    style: {
                      fontFamily: 'LuloCleanOneBold',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '42px',
                      lineHeight: '50px',
											height: '5rem',
											width: '95%',
                      color: '#363636',
                    },
                  }}
                />
              )}
            />
            <h5>20 CHARACTERS MAX</h5>
          </Grid>
          <Grid container item xs={3} direction="column">
            <Button type="submit" sx={greenButton} >
              <h3>ADD</h3>
            </Button>
          </Grid>
        </Grid>
      </form>
			<div className="spacer" />
      <Link to="/" className="bottom">
        <Button sx={whiteButton} >
          <h3>BACK TO GAMES</h3>
        </Button>
      </Link>
    </div>
  );
}

export default ModAddTopic;
