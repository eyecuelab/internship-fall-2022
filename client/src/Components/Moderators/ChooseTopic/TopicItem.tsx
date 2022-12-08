import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Topic } from '../../../Types/Types';
import { DogEarButton, whiteButton } from '../../componentStyles';
import { getData } from '../../../ApiHelper';

interface Props {
  topic: Topic;
  setTopic: Dispatch<SetStateAction<Topic>>;
	selectTopic: () => void;
}


function TopicItem(props: Props) {
  const {topic, setTopic, selectTopic} = props;

	useEffect(() => {
		getData(`/topics/${topic.id}`).then((topic) => {
			setTopic(topic)
		});
	}, [topic.id]);

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
