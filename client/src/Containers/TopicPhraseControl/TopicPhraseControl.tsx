import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CardTemplate from '../../Components/CardTemplate/CardTemplate';
import ModAddTopic from '../../Components/ModAddTopic/ModAddTopic';
import ModAddPhrase from '../../Components/ModAddPhrase/ModAddPhrase';

function TopicPhraseControl() {
	const { code } = useParams();
  const [addNewPhrase, setAddNewPhrase] = useState(false);

  const handleAddNewPhrase = () => {
    setAddNewPhrase(!addNewPhrase);
  };

  // if (addNewPhrase) {
  //   return (
  //     <CardTemplate
  //       user="moderator"
  //       content={<ModAddPhrase handleAddNewPhrase={handleAddNewPhrase} />}
  //     />
  //   );
  // } else {
    return (
      <CardTemplate
        user="moderator"
        content={<ModAddTopic handleAddNewPhrase={handleAddNewPhrase} gameId={Number(code)} />}
      />
    );
  // }
}
export default TopicPhraseControl;
