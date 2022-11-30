import React, {useState, useEffect} from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { postData } from '../../../ApiHelper';
import { findStems, compareWords, haikuCheck } from './validation'
import { whiteButton, greenButton } from '../../componentStyles';

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
	const [submitState, setSubmitState] = useState(true);
  const { control, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data: unknown) => {postData('/haicues', data)};

	const roundNum = '2';
	const topic = 'Holiday Activities';
	const phrase = ['decorating', 'tree'];

	whiteButton.width = '46%';
	greenButton.width = '46%';

	useEffect(() => {
		const stemList: any[] = [];
		phrase.forEach((word, index) => { 
			findStems(word)
			.then((response) => {
				stemList[index] = (response.meta.stems);
				// @ts-ignore
				setStems(stemList);
			});
		});
	}, []);

	const swapLabel = (line: number, status: string) => {
		switch(line) {
			case(1):
				setLineOne(status);
				break;
			case(2):
				setLineTwo(status);
				break;
			case(3):
				setLineThree(status);
				break;
		}
	}

	const displayValidation = ( lineNumber: number, value: string ) => {
		const inputField = document.getElementById('line'+lineNumber);
		const label = document.getElementById('label'+lineNumber);
		const submitButton:HTMLButtonElement = (document.getElementById('submitHaiku') as HTMLButtonElement);

		const validHaiku = haikuCheck(value, lineNumber);
		const validWords = compareWords(stems, value?.toLowerCase().split(' '));

		if (!validHaiku) {
			setSubmitState(true);
			inputField && (inputField.style.color = 'red');
			label && (label.style.color = 'red');
			if (validWords) {
				swapLabel(lineNumber, (lineNumber === 2 ? '7 Syllables' : '5 Syllables'));
			} else {
				swapLabel(lineNumber, 'you may not use words in the phrase');
			}
		} else if (validWords) {
			buttonReady(submitButton);
			swapLabel(lineNumber, (lineNumber === 2 ? '7 Syllables' : '5 Syllables'));
			inputField && (inputField.style.color = '#363636');
			label && (label.style.color = '#363636');
		} else {
			swapLabel(lineNumber, 'you may not use words in the phrase');
			inputField && (inputField.style.color = 'red');
			label && (label.style.color = 'red');
		}
	}

	const buttonReady = (button: HTMLButtonElement) => {
		const line1 = (document.getElementById('line1') as HTMLInputElement).value;
		const line2 = (document.getElementById('line2') as HTMLInputElement).value;
		const line3 = (document.getElementById('line3') as HTMLInputElement).value;
		if (line1 !== '' && line2 !== '' && line3 !== '') {
			setSubmitState(false);
		} else {
			button.setAttribute('disabled', 'true');
		}
	}

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <h3 className="fade-in-down">ROUND {roundNum} - {topic}</h3>
      <h1 className="fade-in-left">{phrase.join(' ')}</h1>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="line1"
          render={({ field: { onChange: rhfOnChange } }) => (
            <TextField
							onChange={(ev) => {
								const { target: { value }} = ev
								rhfOnChange(value.toLowerCase());
								displayValidation(1, value);
							}}
              id="line1"
              type="text"
              fullWidth
              multiline
              variant="standard"
            />
          )}
        />
        <label>
          <h5 id="label1">{lineOne}</h5>
        </label>
        <Controller
          control={control}
          name="line2"
          render={({ field : { onChange: rhfOnChange} }) => (
            <TextField
							onChange={(ev) => {
								const { target: { value }} = ev
								rhfOnChange(value.toLowerCase());
								displayValidation(2, value);
							}}
              id="line2"
              type="text"
              fullWidth
              multiline
              variant="standard"
            />
          )}
        />
        <label>
          <h5 id="label2">{lineTwo}</h5>
        </label>
        <Controller
          control={control}
          name="line3"
          render={({ field : { onChange: rhfOnChange} }) => (
            <TextField
							onChange={(ev) => {
								const { target: { value }} = ev
								rhfOnChange(value.toLowerCase());
								displayValidation(3, value);
							}}
              id="line3"
              type="text"
              fullWidth
              multiline
              variant="standard"
            />
          )}
        />
        <label>
          <h5 id="label3">{lineThree}</h5>
        </label>
        <div style={{ height: '5rem', width: '100%' }} />
				<Button
					id="submitHaiku"
					className="bottom"
					type="submit"
					disabled={submitState}
					sx={submitState ? whiteButton : greenButton}
				>
					<h3>Submit</h3>
				</Button>
      </form>
    </div>
  );
}

export default HaikuForm;