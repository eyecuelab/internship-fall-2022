import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { greenButton } from '../componentStyles';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { getData, postData } from '../../ApiHelper';
import { whiteButton } from '../componentStyles';
import '../../index.css';

interface Props {
	handleCreateNewGame: () => void;
}

interface IFormInput {
  name: string;
	moderatorId: number;
}

type Data = {
	name: string;
	moderatorId: number;
}

const userData = JSON.parse(localStorage.getItem('user') as string);
const moderator = userData ? await getData(`/moderators/${userData?.email}`) : null;

function ModNewGame(props: Props) {
  const { control, handleSubmit, setValue } = useForm<IFormInput>();
	setValue('moderatorId', moderator.id);

	const createNewGame: SubmitHandler<IFormInput> = (data: Data) => {
		data.name ?
		postData('/games', data) : console.log('error: no game name');
		props.handleCreateNewGame();
	}

  greenButton.width = '100%';
	whiteButton.width = '100%';

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <h3>new game name</h3>
      <br />
      <form onSubmit={handleSubmit(createNewGame)}>
			<Controller
				control={control}
				name="name"
				render={({ field }) => (
					<TextField
						{...field}
						fullWidth
						id="standard-basic"
						variant="standard"
						name="game title"
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
								color: '#363636',
							},
						}}
					/>
				)}
			/>
      <label>
        <h5>15 characters max</h5>
      </label>
      <br />
      <Button type="submit" sx={greenButton} variant="outlined">
        <h3>Continue</h3>
      </Button>
			</form>
			<div style={{ height: '5rem', bottom: 8 }} />
			<Button onClick={props.handleCreateNewGame} style={{position: 'absolute', bottom: 8, width: '100%'}} sx={whiteButton} variant="outlined">
				<h3>BACK TO GAMES</h3>
			</Button>
    </div>
  );
}

export default ModNewGame;
