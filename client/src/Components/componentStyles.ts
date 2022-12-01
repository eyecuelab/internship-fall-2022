import corners, { chamfer, chamfered, round } from "corners";

export const whiteButton = {
  height: '5rem',
  width: '',
  marginBottom: '',
	padding: '',
  color: '#363636',
  border: '1px solid #363636',
  background: '#e2ddd9',
  borderRadius: '10px',
	':hover': {
		background: '#e6ddd9',
		border: '1px solid #262626'
	},
};

export const redButton = {
  height: '5rem',
  width: '',
  marginBottom: '',
	padding: '',
  color: '#FFFFFF',
  border: '1px solid #363636',
  background: '#FC3911',
  borderRadius: '10px',
	':hover': {
		background: '#ec2901',
		border: '1px solid #262626'
	},
};

export const greenButton = {
  height: '5rem',
  width: '',
  marginBottom: '',
	padding: '',
  color: '#fff',
  background: '#61C14A',
	':hover': {
		background: '#51b13a',
		border: '1px solid #262626'
	},
};

export const blackButton = {
  height: '5rem',
  width: '',
  marginBottom: '',
	padding: '',
  color: '#FFFFFF',
  border: '1px solid #363636',
  background: '#61C14A',
  borderRadius: '10px',
	':hover': {
		background: '#51b13a',
		border: '1px solid #262626'
	},
};

const dogEared = corners(round, round, round, chamfer).size(25);
export const DogEarButton = dogEared.button;