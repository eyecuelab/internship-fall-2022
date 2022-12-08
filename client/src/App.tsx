import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.scss';
import { client_id } from '../endpoints';

const ModGameControl = lazy(() => import('./Containers/ModGameControl/ModGameControl'))
const TopicPhraseControl=lazy(() => import('./Containers/TopicPhraseControl/TopicPhraseControl'))
const GameControl=lazy(() => import('./Containers/GameControl/GameControl'))
const ModStartRoundControl=lazy(() => import('./Containers/ModStartRoundControl/ModStartRoundControl'))
const PresentingHaikuControl=lazy(() => import('./Containers/PresentingHaikuControl/PresentingHaikuControl'))
const BrainstormingPhaseControl=lazy(() => import('./Containers/BrainstormingPhaseControl/BrainstormingPhaseControl'))
const EndGameControl=lazy(() => import('./Containers/EndGameControl/EndGameControl'))

function App() {
	const [userData, setUserData] = useState({});

	useEffect(() => {
		setUserData(userData);
	}, []);

  return (
		<GoogleOAuthProvider clientId={client_id}>
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/:code" element={<GameControl />} />
						<Route path="/" element={<ModGameControl setUserData={setUserData} userData={userData}/>} />
						<Route path="/game/:id" element={<TopicPhraseControl setUserData={setUserData} userData={userData} viewPhrases={false}/>} />
						<Route path="/game/:id/topic/:topicId" element={<TopicPhraseControl setUserData={setUserData} userData={userData} viewPhrases={true}/>} />
						<Route path="/game/:id/round" element={<ModStartRoundControl setUserData={setUserData} userData={userData} viewPhrases={false}/>} />
						<Route path="/game/:id/presenting" element={<PresentingHaikuControl setUserData={setUserData} userData={userData} />} />
						<Route path="/game/:id/brainstorming" element={<BrainstormingPhaseControl setUserData={setUserData} userData={userData} />} />
						<Route path="/game/:id/result" element={<EndGameControl setUserData={setUserData} userData={userData} />} />
					</Routes>
				</Suspense>
			</Router>
		</GoogleOAuthProvider>
  );
}

export default App;