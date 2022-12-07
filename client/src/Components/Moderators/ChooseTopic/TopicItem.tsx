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
	handleSwitch: () => void;
}


function TopicItem(props: Props) {
	const { id } = useParams();
  const {topic, setTopic, handleSwitch} = props;

  const handleSetTopic = () => {
		// console.log("handleSetTopic");
		// getData(`/teams/game/${id}`).then((teams) => {
		// 	console.log('teams:', teams)
		// 	getData(`/phrases/${topic.id}`).then((phrases) => {
		// 		console.log("phrases:", phrases)
		// 		for (let i=0; i<teams.length; i++) {
		// 			putData('/team/addPhrase', { teamId: teams[i].id, phraseId: phrases[i].id}).then(() => {
		// 				console.log('ADDED PHRASE: ', phrases[i].body, " TO TEAM: ", teams[i].teamName);
		// 			});
		// 			if (i === teams.length) {
		setTopic(topic);
		handleSwitch();
		// 			}
		// 		}
		// 	});
		// });
  }

	whiteButton.width = '100%';

  return (
    <>
			<DogEarButton id={`topic${topic.id}`} style={whiteButton} onClick={() => handleSetTopic()} disabled={topic.roundId ? true : false}>
				<h4 style={{lineHeight: '3.5rem'}}>{topic.name.toString()}</h4>
			</DogEarButton>
    </>
  );
}

export default TopicItem;
