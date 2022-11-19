import React, {useState, useEffect} from 'react';
import {Grid, IconButton, TextField, Button} from '@mui/material';
import {Delete} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {greenButton, whiteButton} from '../componentStyles';
import {getData, postData} from '../../ApiHelper';

interface Props {
  handleAddNewPhrase: () => void;
}

interface IFormInput {
  name: string;
}

// it is important that the following code is written outside of the component function
// returns a promise from the API GET route for the /games endpoint
// const getTopics = async () => {
//   const topics = await getData('/topics');
//   return topics;
// };

// // resolves the promise from getGames()
// const topicList = await getTopics();

const renderTopic = (topic: any) => {
  return (
    <>
      <Grid container item xs={7}>
        <h4 style={{lineHeight: '56px'}}>{topic.name.toString()}</h4>
      </Grid>
      <Grid container item xs={4} justifyContent="flex-end">
        <h3 style={{width: '100%', textAlign: 'right', lineHeight: '56px'}}>
          {topic.publishedAt ? 'published' : '5'}
        </h3>
      </Grid>
      <Grid container item xs={1} justifyContent="flex-end">
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
      </Grid>
    </>
  );
};

function ModAddTopic(props: Props) {
  const {control, handleSubmit} = useForm<IFormInput>();
  const [topicList, setTopics] = useState([]);

  // useEffect(() => {
  //   setTopics(topicList);
  // }, [topicList]);
  console.log(topicList);
  const addNewTopic: SubmitHandler<IFormInput> = (data: unknown) => {
    console.log(data);
    postData('/topics', data);
    // props.handleAddNewPhrase();
  };

  useEffect(() => {
    const unsubscribe = () => {
      try {
        const getTopicList = async () => {
          const topics = await getData('/topics');
          setTopics(topics);
        };
        getTopicList();
      } catch(error: unknown) {
        console.log(error.message);
      }
    }

    return unsubscribe();
  }, []);

  greenButton.width = '100%';
  whiteButton.width = '100%';

  console.log('LINE 26: ', topicList);

  return (
    <>
      <Grid container spacing={33}>
        <Grid container item xs={6} direction="column">
          <h3>TOPICS</h3>
        </Grid>
        <Grid container item xs={5} direction="column">
          <h3>PHRASES</h3>
        </Grid>
      </Grid>
      <hr />

      {
        <Grid container>
          {/* @ts-ignore */}{' '}
          {/* this line ignores errors in the line below and will need to be removed soon*/}
          {topicList?.map(topic => renderTopic(topic))}{' '}
          {/* this line renders each game from the database */}
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
                  id="standard-basic"
                  variant="standard"
                  name="name"
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
      <Link to="/mod">
        <Button sx={whiteButton} style={{position: 'relative', top: 345}} variant="outlined">
          <h3>BACK TO GAMES</h3>
        </Button>
      </Link>
    </>
  );
}

export default ModAddTopic;
