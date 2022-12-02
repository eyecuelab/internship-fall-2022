import React, {Dispatch, SetStateAction} from 'react';
import {Link} from 'react-router-dom';
import {Topic} from '../../../Types/Types';
import {Button} from '@mui/material';
import {DogEarButton, whiteButton} from '../../componentStyles';

interface Props {
  topic: Topic;
	handleSwitch: Dispatch<SetStateAction<boolean>>;
}

function TopicItem(props: Props) {
  const {topic, handleSwitch} = props;

	whiteButton.width = '100%';

  return (
    <>
        <DogEarButton style={whiteButton} onClick={handleSwitch}>
          <h4 style={{lineHeight: '3.5rem'}}>{topic.name.toString()}</h4>
        </DogEarButton>
    </>
  );
}

export default TopicItem;
