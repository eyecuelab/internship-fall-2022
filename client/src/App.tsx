import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.scss';
import { client_id } from '../endpoints';
import { Moderator } from './Types/Types';

const ModGameControl = lazy(() => import('./Containers/ModGameControl/ModGameControl'))
const TopicPhraseControl=lazy(() => import('./Containers/TopicPhraseControl/TopicPhraseControl'))
const GameControl=lazy(() => import('./Containers/GameControl/GameControl'))
const ModStartRoundControl=lazy(() => import('./Containers/ModStartRoundControl/ModStartRoundControl'))
const PresentingHaikuControl=lazy(() => import('./Containers/PresentingHaikuControl/PresentingHaikuControl'))
const BrainstormingPhaseControl=lazy(() => import('./Containers/BrainstormingPhaseControl/BrainstormingPhaseControl'))
const EndGameControl=lazy(() => import('./Containers/EndGameControl/EndGameControl'))

function App() {
	const [userData, setUserData] = useState<Moderator | undefined>();

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
				<Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
			</Router>
		</GoogleOAuthProvider>
  );
}

export default App;