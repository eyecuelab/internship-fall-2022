import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { greenButton, whiteButton } from '../componentStyles';
import { getData } from '../../ApiHelper';
import Phrase from './Phrase';

interface Props {
	topicName: String,
	topicId: Number,
	handleAddNewPhrase: () => void;
}

const renderPhrase = (phrase: any) => {
  return (
		<Phrase name={phrase.name} />
  );
};

function ModAddPhrase(props: Props) {
  const [phrases, setPhrases] = useState([]);

	useEffect(() => {
		getPhraseList();
	}, []);

	const getPhraseList = async () => {
		const phraseList = await getData(`/phrases?topicId=${ props.topicId ? props.topicId : '' }`);
		setPhrases(phraseList);
	}

  greenButton.width = '100%';
  whiteButton.width = '100%';

  return (
    <>
      <Grid container spacing={33}>
        <Grid container item xs={12} direction="column">
          <h3>
            TOPIC:
            <span className="topicName">{props.topicName}</span>
          </h3>
        </Grid>
      </Grid>
      <hr />
			{/* @ts-ignore */}
			{phrases?.map(phrase => renderPhrase(phrase))}
      <Grid container spacing={2} style={{ position: 'relative', top: 20 }}>
        <Grid container item xs={9} direction="column">
          <TextField
            fullWidth
            id="standard-basic"
            variant="standard"
            name="phrase"
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
          <h5>20 CHARACTERS MAX</h5>
        </Grid>
        <Grid container item xs={3} direction="column">
          <Button sx={greenButton} variant="outlined">
            <h3>ADD</h3>
          </Button>
        </Grid>
      </Grid>
      <Button sx={whiteButton} onClick={props.handleAddNewPhrase} style={{ position: 'relative', top: 345 }} variant="outlined">
        <h3>BACK TO TOPICS</h3>
      </Button>
    </>
  );
}

export default ModAddPhrase;
