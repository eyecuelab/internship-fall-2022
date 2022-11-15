import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { postData } from '../../ApiHelper';

interface IFormInput {
	line1: string;
	line2: string;
	line3: string;
}

function FormTemplate() {
	const { control, handleSubmit } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data: any) => postData('/haicues', data); 

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <h3>ROUND 2 - HOLIDAY ACTIVITIES</h3>
      <h1>DECORATING TREE</h1>
      <br />
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
				  control={control}
					name="line1"
					render={({field}) => (
      			<TextField
						{...field}
						fullWidth
						sx={{ mt: 0 }}
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
				)} />
				<label>
					<h5>5 Syllables</h5>
				</label>
				<Controller
				  control={control}
					name="line2"
					render={({field}) => (
      			<TextField
						{...field}
						fullWidth
						sx={{ mt: 0 }}
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
				)} />
      <label>
        <h5>7 Syllables</h5>
      </label>
			<Controller
				  control={control}
					name="line3"
					render={({field}) => (
      			<TextField
						{...field}
						fullWidth
						sx={{ mt: 0 }}
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
				)} />
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
            bottom: '0',
            left: '0',
            marginBottom: 0,
          }}
          variant="outlined"
					type='submit'
        >
          <h3>Submit</h3>
        </Button>
      </div>
			</form>
    </div>
  );
}

export default HaikuForm;
