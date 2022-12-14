import React, { useState, useEffect } from 'react';
import { Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { DogEarButton, greenButton, whiteButton } from '../../componentStyles';
import { getData, postData, deleteData } from '../../../ApiHelper';
import TopicItem from './TopicItem';
import { Topic } from '../../../Types/Types';

interface Props {
	gameId: number;
}

interface IFormInput {
  name: string;
	gameId: number;
	moderatorId: number;
}

function ModAddTopic(props: Props) {
	const { gameId } = props;
  const {control, handleSubmit, setValue, reset} = useForm<IFormInput>({defaultValues:{name:""}});
  const [topics, setTopics] = useState([]);
	const user = JSON.parse(localStorage.getItem('user') as string);

	getData(`/moderators/${user.email}`).then((moderator) => {
		setValue('moderatorId', moderator.id);
		setValue('gameId', gameId);
	});

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
		getData(`/topics/game/${gameId}`).then((topics) => {
			setTopics(topics);
		});
	};

  greenButton.width = '100%';
  whiteButton.width = '100%';

  return (
    <div style={{ position: 'relative', height: '100%'}}>
      <Grid container>
        <Grid item xs={7} >
          <h3>TOPICS</h3>
        </Grid>
        <Grid container item xs={4} justifyContent='flex-end'>
          <h3>PHRASES</h3>
        </Grid>
      </Grid>
      <hr />
			<Grid container>
				{topics?.map((topic: Topic) => { return <TopicItem key={topic.id} topic={topic} deleteTopic={deleteTopic} /> })}
			</Grid>
      <form onSubmit={handleSubmit(addNewTopic)}>
        <Grid container spacing={3} style={{position: 'relative', top: 20}}>
          <Grid container item xs={9} direction="column">
            <Controller
              control={control}
              name="name"
              render={({field}) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="standard"
									required
									inputProps={{maxLength: 20}}
                />
              )}
            />
            <h5>20 CHARACTERS MAX</h5>
          </Grid>
          <Grid container item xs={3} direction="column">
            <DogEarButton type="submit" style={greenButton} >
              <h3>ADD</h3>
            </DogEarButton>
          </Grid>
        </Grid>
      </form>
			<div className="spacer" />
      <Link to="/" className="bottom">
        <DogEarButton style={whiteButton} >
          <h3>BACK TO GAMES</h3>
        </DogEarButton>
      </Link>
    </div>
  );
}

export default ModAddTopic;
