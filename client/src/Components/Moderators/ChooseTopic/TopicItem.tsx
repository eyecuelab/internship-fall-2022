import React, {Dispatch, SetStateAction} from 'react';
import {Link} from 'react-router-dom';
import {Round, Topic} from '../../../Types/Types';
import {Button} from '@mui/material';
import {DogEarButton, whiteButton} from '../../componentStyles';
import { getData, postData, putData } from '../../../ApiHelper';
import { round } from 'corners';

interface Props {
  topic: Topic;
	round: number;
	handleSwitch: Dispatch<SetStateAction<boolean>>;
}

function TopicItem(props: Props) {
  const {topic, round, handleSwitch} = props;

	const selectTopic = () => {
		console.log('GAME ID: ', topic.gameId);
		console.log('TOPIC ID: ', topic.id);
		postData('/addRound', { gameId: topic.gameId, topicId: topic.id}).then(() => {
			getData(`/games/${topic.gameId}`).then((data) => {
				console.log('data: ', data)
				localStorage.setItem('game', data);
				const round = data.Rounds.slice(-1);
				console.log('ROUND?: ', data.Rounds.slice(-1)[0]);
				putData('/topics/', { topicId: topic.id, roundId: data.Rounds.slice(-1)[0].id });
				handleSwitch(true);
			});
		});
	}

	whiteButton.width = '100%';

  return (
    <>
			<DogEarButton style={whiteButton} onClick={selectTopic}>
				<h4 style={{lineHeight: '3.5rem'}}>{topic.name.toString()}</h4>
			</DogEarButton>
    </>
  );
}

export default TopicItem;
