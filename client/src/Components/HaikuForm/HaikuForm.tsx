import React, {useState, useEffect} from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { postData } from '../../ApiHelper';
import { findStems, compareWords } from './wordValidation'

interface IFormInput {
  line1: string;
  line2: string;
  line3: string;
}

function HaikuForm() {
	const [stems, setStems] = useState([]);
	const [lineOne, setLineOne] = useState('5 Syllables');
	const [lineTwo, setLineTwo] = useState('7 Syllables');
	const [lineThree, setLineThree] = useState('5 Syllables');
  const { control, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data: unknown) => postData('/haicues', data);

	const phrase = ['decorating', 'tree'];

	useEffect(() => {
		const stemList: any[] = [];
		phrase.forEach((word, index) => { 
			findStems(word)
			.then((response) => {
				console.log('response: ', response);
				stemList[index] = (response.meta.stems);
				// @ts-ignore
				setStems(stemList);
				console.log("stems:", stems);
			});
		});
	}, []);

	const displayValidation = ( lineNumber, statusText, color ) => {
		document.getElementById(lineNumber).style.color = color; 
		document.getElementById('label'+lineNumber).style.color = color;
		switch(lineNumber) {
			case('line1'):
				setLineOne(statusText);
				break;
			case('line2'):
				setLineTwo(statusText);
				break;
			case('line3'):
				setLineThree(statusText);
				break;
		}
	}

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <h3>ROUND 2 - HOLIDAY ACTIVITIES</h3>
      <h1>{phrase.join(' ')}</h1>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="line1"
          render={({ field: { onChange: rhfOnChange } }) => (
            <TextField
							onChange={(ev) => {
								const { target: { value }} = ev
								rhfOnChange(value);
								compareWords(stems, value?.split(' ')) ? 
									displayValidation('line1', '5 Syllables', '#363636') :
									displayValidation('line1', 'you may not use words in the phrase', 'red')
							}}
              fullWidth
              id="line1"
              variant="standard"
              name="FiveSyllables"
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
        <label>
          <h5 id="labelline1">{lineOne}</h5>
        </label>
        <Controller
          control={control}
          name="line2"
          render={({ field : { onChange: rhfOnChange} }) => (
            <TextField
							onChange={(ev) => {
								const { target: { value }} = ev
								rhfOnChange(value);
								compareWords(stems, value?.split(' ')) ? 
									displayValidation('line2', '7 Syllables', '#363636') :
									displayValidation('line2', 'you may not use words in the phrase', 'red')
							}}
              fullWidth
              id="line2"
              variant="standard"
              name="FiveSyllables"
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
        <label>
          <h5 id="labelline2">{lineTwo}</h5>
        </label>
        <Controller
          control={control}
          name="line3"
          render={({ field : { onChange: rhfOnChange} }) => (
            <TextField
							onChange={(ev) => {
								const { target: { value }} = ev
								rhfOnChange(value);
								compareWords(stems, value?.split(' ')) ? 
									displayValidation('line3', '5 Syllables', '#363636') :
									displayValidation('line3', 'you may not use words in the phrase', 'red')
							}}
              fullWidth
              id="line3"
              variant="standard"
              name="FiveSyllables"
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
        <label>
          <h5 id="labelline3">{lineThree}</h5>
        </label>
        <div style={{ height: '5rem', width: '100%' }}>
          <Button
            sx={{
              height: '5rem',
              width: '46%',
              color: '#363636',
              border: '1px solid #363636',
              borderRadius: '10px',
              position: 'absolute',
              bottom: 8,
              left: '0',
            }}
            variant="outlined"
            type="submit"
          >
            <h3>Submit</h3>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default HaikuForm;
