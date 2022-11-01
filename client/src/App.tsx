import LandingPage from "./Components/LandingPage";
import NewGame from './Components/NewGame';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/newgame" element={<NewGame />} />
      </Routes>
    </Router>
  );
}

export default App
