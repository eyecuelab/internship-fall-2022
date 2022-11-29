import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Grid, TextField, Button } from '@mui/material';
import { greenButton, whiteButton } from '../componentStyles';
import { deleteData, getData, postData } from '../../ApiHelper';
import PhraseItem from './PhraseItem';
import { Phrase } from '../../Types/Types';

interface Props {}
interface IFormInput {
  body: string;
	topicId: number;
	moderatorId: number;
}

type Data = {
  body: string;
	topicId: number;
	moderatorId: number;
}

function ModAddPhrase(props: Props) {
	const { topicId } = useParams();
	const navigate = useNavigate();
  const { control, handleSubmit, setValue, reset } = useForm<IFormInput>();
  const [phrases, setPhrases] = useState([]);
	const [topicName, setTopicName] = useState("");	const user = JSON.parse(localStorage.getItem('user') as string);
	getData(`/moderators/${user.email}`).then((moderator) => {
		setValue('moderatorId', moderator.id)
	})
	setValue('topicId', Number(topicId));

	useEffect(() => {
		getPhraseList();
		getTopicName();
	}, [topicName]);

	const addNewPhrase: SubmitHandler<IFormInput> = (data: Data) => {
    postData('/phrases', data).then(() => getPhraseList());
		reset((data) => ({ ...data, body: '' }))
  };

	const deletePhrase = (phraseId: number) => {
		deleteData(`/phrases/${phraseId}`).then(() => getPhraseList());
	}

	const getPhraseList = async () => {
		const phraseList = await getData(`/phrases/${Number(topicId)}`);
		setPhrases(phraseList);
	};

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
          {phrases?.map((phrase: Phrase) => { return (<PhraseItem key={phrase.id} phrase={phrase} deletePhrase={deletePhrase} />) })}
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
      </Grid>
			<div className="spacer" />
			<Button onClick={() => navigate(-1)} sx={whiteButton} style={{ position: 'absolute', bottom: 8, width: '100%' }} >
				<h3>BACK TO TOPICS</h3>
			</Button>
    </div>
  );
}

export default ModAddPhrase;
