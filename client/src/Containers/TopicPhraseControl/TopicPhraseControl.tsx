import React, { useState } from 'react';
import CardTemplate from '../../Components/CardTemplate/CardTemplate';
import ModAddTopic from '../../Components/ModAddTopic/ModAddTopic';
import ModAddPhrase from '../../Components/ModAddPhrase/ModAddPhrase';

function TopicPhraseControl() {
  const [addNewPhrase, setAddNewPhrase] = useState(false);

  const handleAddNewPhrase = () => {
    setAddNewPhrase(!addNewPhrase);
  };

  if (addNewPhrase) {
    return (
      <CardTemplate
        user="moderator"
        content={<ModAddPhrase handleAddNewPhrase={handleAddNewPhrase} />}
      />
    );
  } else {
    return (
      <CardTemplate
        user="moderator"
        content={<ModAddTopic handleAddNewPhrase={handleAddNewPhrase} />}
      />
    );
  }
}
export default TopicPhraseControl;
