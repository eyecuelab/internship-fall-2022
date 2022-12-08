import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ModGameControl from './Containers/ModGameControl/ModGameControl';
import TopicPhraseControl from './Containers/TopicPhraseControl/TopicPhraseControl';
import GameControl from './Containers/GameControl/GameControl';
import ModStartRoundControl from './Containers/ModStartRoundControl/ModStartRoundControl';
import PresentingHaikuControl from './Containers/PresentingHaikuControl/PresentingHaikuControl';
import BrainstormingPhaseControl from './Containers/BrainstormingPhaseControl/BrainstormingPhaseControl';
import EndGameControl from './Containers/EndGameControl/EndGameControl';
import './App.scss';
import { client_id } from '../endpoints';


function App() {
	const [userData, setUserData] = useState({});

	useEffect(() => {
		setUserData(userData);
	}, []);

  return (
		<GoogleOAuthProvider clientId={client_id}>
			<Router>
				<Routes>
					<Route path="/game/:code" element={<GameControl />} />
					<Route path="/" element={<ModGameControl setUserData={setUserData} userData={userData}/>} />
					<Route path="/gameinfo/:id" element={<TopicPhraseControl setUserData={setUserData} userData={userData} viewPhrases={false}/>} />
					<Route path="/topic/:topicId" element={<TopicPhraseControl setUserData={setUserData} userData={userData} viewPhrases={true}/>} />
					<Route path="/game/:id/round" element={<ModStartRoundControl setUserData={setUserData} userData={userData} viewPhrases={false}/>} />
					<Route path="/game/:id/presenting" element={<PresentingHaikuControl setUserData={setUserData} userData={userData} />} />
					<Route path="/game/:id/brainstorming" element={<BrainstormingPhaseControl setUserData={setUserData} userData={userData} />} />
					<Route path="/game/:id/result" element={<EndGameControl setUserData={setUserData} userData={userData} />} />
				</Routes>
			</Router>
		</GoogleOAuthProvider>
  );
}

export default App;
