import React, { useEffect } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { DogEarButton, greenButton } from '../../componentStyles';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { getData, postData } from '../../../ApiHelper';
import { whiteButton } from '../../componentStyles';
import '../../../index.css';

interface Props {
	handleCreateNewGame: () => void;
	getGameList: any;
}

interface IFormInput {
  name: string;
	moderatorId: number;
}

type Data = {
	name?: string;
	moderatorId: number;
}

function ModNewGame(props: Props) {
  const { control, handleSubmit, setValue } = useForm<IFormInput>({defaultValues:{name: ""}});
	const userData = JSON.parse(localStorage.getItem('user') as string);

	useEffect(() => {
		props.getGameList();
	}, []);

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
      <form id='form' onSubmit={handleSubmit(createNewGame)}>
			<Controller
				control={control}
				name="name"
				render={({ field }) => (
					<TextField
						{...field}
						fullWidth
						variant="standard"
						required
						inputProps={{maxLength: 15}}
					/>
				)}
			/>
      <label>
        <h5>15 characters max</h5>
      </label>
      <br />
      <DogEarButton type="submit" style={greenButton} >
        <h3>Continue</h3>
      </DogEarButton>
			</form>
			<div className="spacer" />
			<DogEarButton onClick={props.handleCreateNewGame} className="bottom" style={whiteButton} >
				<h3>BACK TO GAMES</h3>
			</DogEarButton>
		</Grid>
    </div>
  );
}

export default ModNewGame;
