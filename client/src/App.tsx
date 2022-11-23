import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModGameControl from './Containers/ModGameControl/ModGameControl';
import TopicPhraseControl from './Containers/TopicPhraseControl/TopicPhraseControl';
import GameControl from './Containers/GameControl/GameControl';
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/game" element={<GameControl />} />
        <Route path="/mod" element={<ModGameControl />} />
				<Route path="/mod/game/:code" element={<TopicPhraseControl viewPhrases={false}/>} />
				<Route path="/mod/topic/:topicId" element={<TopicPhraseControl viewPhrases={true}/>} />
      </Routes>
    </Router>
  );
}

export default App;
