import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate/CardTemplate';
import ModAddTopic from '../../Components/ModAddTopic/ModAddTopic';
import ModAddPhrase from '../../Components/ModAddPhrase/ModAddPhrase';

interface Props {
	viewPhrases: boolean;
}

function TopicPhraseControl(props: Props) {
	const { code } = useParams();


  if (props.viewPhrases) {
    return (
      <CardTemplate
        user="moderator"
        content={<ModAddPhrase
					/>
				}
      />
    );
  } else {
    return (
      <CardTemplate
        user="moderator"
        content={<ModAddTopic 
					gameId={Number(code)} 
					/>
				}
      />
    );
  }
}
export default TopicPhraseControl;
