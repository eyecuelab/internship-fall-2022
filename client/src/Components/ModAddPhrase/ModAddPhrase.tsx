import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Grid, TextField, Button } from '@mui/material';
import { greenButton, whiteButton } from '../componentStyles';
import { deleteData, getData, postData } from '../../ApiHelper';
import Phrase from './Phrase';

interface Props {}
interface IFormInput {
  body: string;
	topicId: number;
}

function ModAddPhrase(props: Props) {
	const { topicId } = useParams();
	const navigate = useNavigate();
  const { control, handleSubmit, setValue, reset } = useForm<IFormInput>();
  const [phrases, setPhrases] = useState([]);
	const [topicName, setTopicName] = useState("");
	setValue('topicId', Number(topicId));
	console.log(props);

	useEffect(() => {
		getPhraseList();
		getTopicName();
		console.log(topicName);
	}, [topicName]);

	const addNewPhrase: SubmitHandler<IFormInput> = (data: unknown) => {
    postData('/phrases', data).then(() => getPhraseList());
		reset((data) => ({ ...data, body: '' }))
  };

	const deletePhrase = (phraseId: any) => {
		deleteData(`/phrases/${phraseId}`).then(() => getPhraseList());
	}

	const getPhraseList = async () => {
		const phraseList = await getData(`/phrases/${Number(topicId)}`);
		setPhrases(phraseList);
	}; console.log(phrases);

	const getTopicName = async () => {
		const topic = await getData(`/topic/${topicId}`);
		setTopicName(topic.name);
	}

  greenButton.width = '100%';
  whiteButton.width = '100%';

  return (
    <div style={{ position: 'relative', height: '100%'}}>
      <Grid container>
        <Grid container item xs={12}>
          <h3 style={{ display: 'inline' }}>TOPIC: </h3><h4 style={{ display: 'inline' }}>{topicName}</h4>
        </Grid>
      </Grid>
      <hr />
      {
        <Grid container>
          {phrases?.map(phrase => { return (<Phrase key={phrase.id} phrase={phrase} deletePhrase={deletePhrase} />) })}
        </Grid>
      }
      <Grid container>
				<form onSubmit={handleSubmit(addNewPhrase)}>
					<Grid container spacing={2} style={{position: 'relative', top: 20}}>
						<Grid container item xs={9} direction="column">
							<Controller
								control={control}
								name="body"
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
      </Grid>
			<div style={{ height: '5rem' }} />
			<Button onClick={() => navigate(-1)} sx={whiteButton} style={{ position: 'absolute', bottom: 8, width: '100%' }} variant="outlined">
				<h3>BACK TO TOPICS</h3>
			</Button>
    </div>
  );
}

export default ModAddPhrase;
