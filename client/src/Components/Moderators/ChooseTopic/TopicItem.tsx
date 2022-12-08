import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Round, Topic} from '../../../Types/Types';
import {Button} from '@mui/material';
import {DogEarButton, whiteButton} from '../../componentStyles';
import { getData, postData, putData } from '../../../ApiHelper';
import { round } from 'corners';

interface Props {
  topic: Topic;
  setTopic: Dispatch<SetStateAction<Topic>>;
	selectTopic: () => void;
}


function TopicItem(props: Props) {
  const {topic, selectTopic} = props;

	whiteButton.width = '100%';

  return (
    <>
			<DogEarButton id={`topic${topic.id}`} style={whiteButton} onClick={selectTopic} disabled={topic.roundId ? true : false}>
				<h4 style={{lineHeight: '3.5rem'}}>{topic.name.toString()}</h4>
			</DogEarButton>
    </>
  );
}

export default TopicItem;
