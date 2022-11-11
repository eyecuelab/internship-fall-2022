import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Containers/LandingPage';
import Portal from './Containers/Portal';
// import Game from './Containers/Game';
import ModControl from './Containers/ModControl/ModControl';
import GameControl from './Containers/GameControl/GameControl';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/game" element={<GameControl />} />
        <Route path="/mod" element={<ModControl />} />
      </Routes>
    </Router>
  );
}

export default App;
