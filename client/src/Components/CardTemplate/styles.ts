import styled from '@emotion/styled';
import {Card, CardContent} from '@mui/material';
import '../../App.scss';

let img = '';
let bg_color = '';

if (localStorage.getItem('user')) { 
	img = '/images/moderator_card_background_2.png';
	bg_color = '#15586A';
} else {
	img = '/images/blueberries_banner.png';
	bg_color = '#0c114a';
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
	background: ${localStorage.getItem('user') ? '#15586a' : '#0c114a'};
	background-image: url(${localStorage.getItem('user') ? '/images/moderator_card_background_2.png' : '/images/blueberries_banner.png'});
	background-attachment: absolute;
	background-position: 16% 95%;
	background-repeat: no-repeat;
`

export const StyledCardContent = styled(CardContent)`
	width: 700px;
	min-height: 101%;
	height: 101%;
`
