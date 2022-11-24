import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { Card, CardContent, Button } from '@mui/material';
import { Content, Header } from './styles';

interface Props {
	login: () => void;
}

function ModLogin(props: Props) {
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
									console.log(credentialResponse);
									let decoded = jwt_decode(credentialResponse.credential);
									console.log(decoded);
								}}
								onError={() => {
									console.log('Login Failed')
								}}
								useOneTap
							/>
              <Button
								onClick={props.login}
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
