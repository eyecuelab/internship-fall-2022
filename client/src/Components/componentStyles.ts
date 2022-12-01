import corners, { chamfer, chamfered, round } from "corners";

export const whiteButton = {
  height: '5rem',
  width: '',
  marginBottom: '',
	padding: '',
  color: '#363636',
  border: '1px solid #363636',
  background: '#e2ddd9',
	display: 'flex',
	alignItems: 'center'
};

export const redButton = {
  height: '5rem',
  width: '',
  marginBottom: '',
	padding: '',
  color: '#FFFFFF',
  border: '1px solid #363636',
  background: '#FC3911',
};

export const greenButton = {
  height: '5rem',
  width: '',
  marginBottom: '',
	padding: '',
  color: '#fff',
  background: '#61C14A',
};

export const blackButton = {
  height: '5rem',
  width: '',
  marginBottom: '',
	padding: '',
  color: '#FFFFFF',
  border: '1px solid #363636',
  background: '#61C14A',
};

const dogEared = corners(round, round, round, chamfer).size(25);
export const DogEarButton = dogEared.button;