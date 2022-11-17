import React from 'react';
import CardTemplate from '../../Components/CardTemplate/CardTemplate';
import ModAddTopic from '../../Components/ModAddTopic/ModAddTopic';

function TopicPhraseControl () {
	return <CardTemplate user="moderator" content={<ModAddTopic />} />
}

export default TopicPhraseControl;