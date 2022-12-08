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
import { User } from './Types/Types';


function App() {
	const [userData, setUserData] = useState<User | undefined>();

	useEffect(() => {
		setUserData(userData);
	}, []);

	const handleLogout = () => {
		setUserData(undefined);
		localStorage.clear();
		window.localStorage.clear();
  };

  return (
		<GoogleOAuthProvider clientId={client_id}>
			<Router>
				<Routes>
					<Route path="/:code" element={<GameControl />} />
					<Route path="/" element={<ModGameControl setUserData={setUserData} logout={handleLogout} userData={userData} />} />
					<Route path="/game/:id" element={<TopicPhraseControl setUserData={setUserData} logout={handleLogout} viewPhrases={false} />} />
					<Route path="/game/:id/topic/:topicId" element={<TopicPhraseControl setUserData={setUserData} logout={handleLogout} viewPhrases={true} />} />
					<Route path="/game/:id/round" element={<ModStartRoundControl setUserData={setUserData} logout={handleLogout} />} />
					<Route path="/game/:id/presenting" element={<PresentingHaikuControl setUserData={setUserData} />} />
					<Route path="/game/:id/brainstorming" element={<BrainstormingPhaseControl setUserData={setUserData} />} />
					<Route path="/game/:id/result" element={<EndGameControl setUserData={setUserData} />} />
				</Routes>
			</Router>
		</GoogleOAuthProvider>
  );
}

export default App;
