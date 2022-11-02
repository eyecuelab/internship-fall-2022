import LandingPage from "./Containers/LandingPage";
import Portal from './Containers/Portal';
import Game from './Containers/Game';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App
