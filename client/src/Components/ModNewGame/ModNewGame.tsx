import React from 'react';
import { TextField, Button } from '@mui/material';
import { greenButton } from '../componentStyles';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { postData } from '../../ApiHelper';
import '../../index.css';

interface Props {
	handleCreateNewGame: () => void;
}

interface IFormInput {
  name: string;
}

function ModNewGame(props: Props) {
  const { control, handleSubmit } = useForm<IFormInput>();

	const createNewGame: SubmitHandler<IFormInput> = (data: unknown) => {
		postData('/games', data);
		console.log(data);
		props.handleCreateNewGame();
	}

  greenButton.width = '100%';

  return (
    <div style={{ position: 'relative', height: '95%' }}>
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
    </div>
  );
}

export default ModNewGame;
