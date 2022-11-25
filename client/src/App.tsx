import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ModGameControl from './Containers/ModGameControl/ModGameControl';
import TopicPhraseControl from './Containers/TopicPhraseControl/TopicPhraseControl';
import GameControl from './Containers/GameControl/GameControl';
import './App.scss';
import { client_id } from '../endpoints';

function App() {
	const [userData, setUserData] = useState({});

  return (
		<GoogleOAuthProvider clientId={client_id}>
			<Router>
				<Routes>
					<Route path="/game" element={<GameControl />} />
					<Route path="/" element={<ModGameControl setUserData={setUserData} userData={userData}/>} />
					<Route path="/game/:code" element={<TopicPhraseControl viewPhrases={false}/>} />
					<Route path="/topic/:topicId" element={<TopicPhraseControl viewPhrases={true}/>} />
				</Routes>
			</Router>
		</GoogleOAuthProvider>
  );
}

export default App;
