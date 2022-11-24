import React from 'react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { Card, CardContent, Button } from '@mui/material';
import { Content, Header } from './styles';

interface Props {
	login: () => void;
}

function ModLogin(props: Props) {

	const login = useGoogleLogin({
		onSuccess: async (response) => {
			console.log(response);
  		const userData = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
				headers: {
					'Authorization': `Bearer ${response.access_token}`
				},
			});
			console.log(userData);
		}
	})

  return (
    <>
      <Header>
        <h4>Eyecue HaiCue</h4>
      </Header>
      <Card
        sx={{
          width: 1376,
          height: 820,
          minHeight: 'fit-content',
          borderRadius: '15px',
          boxShadow: '0px 0px 75px #000',
          background: '#15586a',
          backgroundImage: 'url(/public/images/moderator_card_background.png)',
        }}
      >
        <Content style={{ color: '#f9f9f9' }}>
          <CardContent
            sx={{
              display: 'flex',
              flexFlow: 'row wrap',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <div>
              <h4>Moderator Login</h4>
              <br />
							<GoogleLogin
								onSuccess={credentialResponse => { 
									let decoded = jwt_decode(credentialResponse.credential);
									console.log('USER: ', decoded.email);
								}}
								onError={() => {
									console.log('Login Failed')
								}}
								useOneTap
							/>
              <Button
								onClick={login}
                sx={{
                  height: '5rem',
                  width: '100%',
                  color: '#363636',
                  border: '1px solid #363636',
                  borderRadius: '10px',
                  background: '#bbb',
                }}
              >
                GOOGLE SIGN IN
              </Button>
            </div>
          </CardContent>
        </Content>
      </Card>
    </>
  );
}

export default ModLogin;
