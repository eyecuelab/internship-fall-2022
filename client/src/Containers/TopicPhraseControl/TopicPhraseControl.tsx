import React from 'react';
import { useParams } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate/CardTemplate';
import ModAddTopic from '../../Components/ModAddTopic/ModAddTopic';
import ModAddPhrase from '../../Components/ModAddPhrase/ModAddPhrase';

interface Props {
	viewPhrases: boolean;
}

function TopicPhraseControl(props: Props) {
	const { code } = useParams();

	document.documentElement.style.background = 'url(/images/moderator_background.png)';

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
