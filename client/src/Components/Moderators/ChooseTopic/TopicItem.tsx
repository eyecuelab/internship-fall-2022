import React, {Dispatch, SetStateAction} from 'react';
import {Link} from 'react-router-dom';
import {Grid, Button} from '@mui/material';
import {whiteButton} from '../../componentStyles';
import {Topic} from '../../../Types/Types';

interface Props {
  topic: Topic;
	handleSwitch: Dispatch<SetStateAction<boolean>>;
}

function TopicItem(props: Props) {
  const {topic, handleSwitch} = props;

	whiteButton.width = '100%';

  return (
    <>
        <Button sx={whiteButton} onClick={handleSwitch}>
          <h4 style={{lineHeight: '3.5rem'}}>{topic.name.toString()}</h4>
        </Button>
				<br />
				<br />
    </>
  );
}

export default TopicItem;

{
  /* <Grid container item xs={7}>
<Link to={{ pathname:`/topic/${topic.id}` }}><h4 style={{ lineHeight: '3.5rem' }}>{ topic.name.toString() }</h4></Link>
</Grid> */
}
