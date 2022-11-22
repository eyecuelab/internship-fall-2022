import React, {useState, useEffect} from 'react';
import {Grid, TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {greenButton, whiteButton} from '../componentStyles';
import {getData, postData} from '../../ApiHelper';
import Topic from './Topic';

interface Props {
	gameId: number;
}

interface IFormInput {
  name: string;
	gameId: number;
}

function ModAddTopic(props: Props) {
  const {control, handleSubmit, setValue, reset} = useForm<IFormInput>();
  const [topics, setTopics] = useState([]);
	setValue('gameId', props.gameId);

	const renderTopic = (topic: any) => {
		return (
			<Topic name={topic.name} phrases={topic.phrases} gameId={topic.gameId} id={topic.id} />
		);
	};

	useEffect(() => {
		getTopicList();
	}, []);

  const addNewTopic: SubmitHandler<IFormInput> = (data: unknown) => {
    postData('/topics', data).then(() => getTopicList());
		reset((data) => ({ ...data, name: '' }))
  };

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
          {/* @ts-ignore */}
          {topics?.map(topic => renderTopic(topic))}
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
                  InputProps={{
                    style: {
                      fontFamily: 'LuloCleanOneBold',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '42px',
                      lineHeight: '50px',
                      color: '#363636',
                    },
                  }}
                />
              )}
            />
            <h5>20 CHARACTERS MAX</h5>
          </Grid>
          <Grid container item xs={3} direction="column">
            <Button type="submit" sx={greenButton} variant="outlined">
              <h3>ADD</h3>
            </Button>
          </Grid>
        </Grid>
      </form>
			<div style={{ height: '5rem' }} />
      <Link to="/mod" style={{ position: 'absolute', bottom: '0', width: '100%' }}>
        <Button sx={whiteButton} variant="outlined">
          <h3>BACK TO GAMES</h3>
        </Button>
      </Link>
    </div>
  );
}

export default ModAddTopic;