import React, {Dispatch, SetStateAction} from 'react';
import {Link} from 'react-router-dom';
import {Round, Topic} from '../../../Types/Types';
import {Button} from '@mui/material';
import {DogEarButton, whiteButton} from '../../componentStyles';
import { putData } from '../../../ApiHelper';
import { round } from 'corners';

interface Props {
  topic: Topic;
	round: number;
	handleSwitch: Dispatch<SetStateAction<boolean>>;
}

function TopicItem(props: Props) {
  const {topic, round, handleSwitch} = props;

	const selectTopic = () => {
		putData('/topics/', { topicId: topic.id, roundId: round });
		handleSwitch;
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
