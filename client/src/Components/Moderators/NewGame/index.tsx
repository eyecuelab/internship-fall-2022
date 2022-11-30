import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Grid } from '@mui/material';
import { greenButton } from '../../componentStyles';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { getData, postData } from '../../../ApiHelper';
import { whiteButton } from '../../componentStyles';
import '../../../index.css';

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

function ModNewGame(props: Props) {
  const { control, handleSubmit, setValue } = useForm<IFormInput>();
	const userData = JSON.parse(localStorage.getItem('user') as string);

	getData(`/moderators/${userData?.email}`).then((response) => {
		setValue('moderatorId', response.id);
	});

	const createNewGame: SubmitHandler<IFormInput> = (data: Data) => {
		postData('/games', data);
		props.handleCreateNewGame();
	}

  greenButton.width = '100%';
	whiteButton.width = '100%';

  return (
    <div style={{ position: 'relative', height: '100%' }}>
		<Grid container>
      <h3>new game name</h3>
			<div className="spacer" />
      <form onSubmit={handleSubmit(createNewGame)}>
			<Controller
				control={control}
				name="name"
				render={({ field }) => (
					<TextField
						{...field}
						fullWidth
						variant="standard"
						multiline
						required
					/>
				)}
			/>
      <label>
        <h5>15 characters max</h5>
      </label>
      <br />
      <Button type="submit" sx={greenButton} >
        <h3>Continue</h3>
      </Button>
			</form>
			<div className="spacer" />
			<Button onClick={props.handleCreateNewGame} className="bottom" sx={whiteButton} >
				<h3>BACK TO GAMES</h3>
			</Button>
		</Grid>
    </div>
  );
}

export default ModNewGame;