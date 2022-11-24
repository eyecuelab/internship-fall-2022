import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import dotenv from 'dotenv';
import ModGameControl from './Containers/ModGameControl/ModGameControl';
import TopicPhraseControl from './Containers/TopicPhraseControl/TopicPhraseControl';
import GameControl from './Containers/GameControl/GameControl';
import './App.scss';

// dotenv.config();

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/game" element={<GameControl />} />
        <Route path="/" element={<ModGameControl />} />
				<Route path="/game/:code" element={<TopicPhraseControl viewPhrases={false}/>} />
				<Route path="/topic/:topicId" element={<TopicPhraseControl viewPhrases={true}/>} />
      </Routes>
    </Router>
  );
}

export default App;
