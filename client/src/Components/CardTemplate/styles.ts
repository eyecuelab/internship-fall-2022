import styled from '@emotion/styled';
import {Card, CardContent} from '@mui/material';
import '../../App.scss';

let color = '';
let bgUrl = '';

if (localStorage.getItem('user')) {
	color = '#15586a';
	bgUrl = '/images/moderator_card_background_2.png';
} else {
	const team = JSON.parse(localStorage.getItem('team') as string);
	switch(team) {
		case('blueberry'):
			color = '#0c114a';
			bgUrl = '/images/blueberries_banner.png';
			break;
		default:
			color = '#0c114a';
			bgUrl = '/images/blueberries_banner.png';
			break;
	}
}

export const Overlay = styled.div`
  height: 100%;
  width: 88%;
  padding: 1.85rem;
  padding-top: 2.75rem;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  text-align: left;
`;

export const Content = styled.div`
  color: #363636;
  width: 100%;
  margin: 0%;
  padding: 2.65rem;
  padding-left: 5rem;
  padding-right: 5rem;
  text-align: left;
`;

export const Header = styled.div`
  display: block;
  text-align: right;
  color: #FFF;
`;

export const StyledCard = styled(Card)`
	display: flex;
	width: 1376px;
	min-height: 820px;
	height: fit-content;
	border-radius: 15px;
	box-shadow: 0px 0px 75px #000;
	background: #f6ede9;
`

export const StyledCardMedia = styled.div`
	width: 490px;
	min-height: 101%;
	height: 101%;
	background: ${color};
	background-image: linear-gradient(to bottom, ${color+'ff'}, ${color+'00'}), url(${bgUrl});
	background-attachment: absolute;
	background-position: 16% 95%;
	background-repeat: no-repeat;
`

export const StyledCardContent = styled(CardContent)`
	width: 700px;
	min-height: 101%;
	height: 101%;
`
