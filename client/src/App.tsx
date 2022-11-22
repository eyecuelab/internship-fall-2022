import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Containers/LandingPage';
import Portal from './Containers/Portal';
// import Game from './Containers/Game';
import ModGameControl from './Containers/ModGameControl/ModGameControl';
import TopicPhraseControl from './Containers/TopicPhraseControl/TopicPhraseControl';
import GameControl from './Containers/GameControl/GameControl';
import ModNewGame from './Components/ModNewGame/ModNewGame';
import CardTemplate from './Components/CardTemplate/CardTemplate';
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/game" element={<GameControl />} />
        <Route path="/mod" element={<ModGameControl />} />
				<Route path="/mod/game/:code" element={<TopicPhraseControl viewPhrases={false}/>} />
				<Route path="/mod/topic/:topicId" element={<TopicPhraseControl viewPhrases={true}/>} />
      </Routes>
    </Router>
  );
}

export default App;
