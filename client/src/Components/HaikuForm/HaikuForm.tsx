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
				setStems(stemList);
				console.log("stems:", stems);
			});
		});
	}, []);

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
								compareWords(stems, value?.split(' '));
							}}
              fullWidth
              id="standard-basic"
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
          <h5>5 Syllables</h5>
        </label>
        <Controller
          control={control}
          name="line2"
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              id="standard-basic"
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
          <h5>7 Syllables</h5>
        </label>
        <Controller
          control={control}
          name="line3"
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              id="standard-basic"
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
          <h5>5 Syllables</h5>
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
