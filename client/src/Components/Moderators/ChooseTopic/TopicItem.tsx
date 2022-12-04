import React, {Dispatch, SetStateAction} from 'react';
import {Link} from 'react-router-dom';
import {Round, Topic} from '../../../Types/Types';
import {Button} from '@mui/material';
import {DogEarButton, whiteButton} from '../../componentStyles';
import { getData, postData, putData } from '../../../ApiHelper';
import { round } from 'corners';

interface Props {
  topic: Topic;
  setTopic: Dispatch<SetStateAction<Topic>>;
	handleSwitch: Dispatch<SetStateAction<boolean>>;
}


function TopicItem(props: Props) {
  const {topic, setTopic, handleSwitch} = props;

  const handleSetTopic = () => {
    setTopic(topic);
    handleSwitch(true);
  }

	whiteButton.width = '100%';

  return (
    <>
        <DogEarButton style={whiteButton} onClick={handleSetTopic}>
          <h4 style={{lineHeight: '3.5rem'}}>{topic.name.toString()}</h4>
        </DogEarButton>
    </>
  );
}

export default TopicItem;
