import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { Card, CardContent, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { Content, Header } from './styles';
import { whiteButton } from '../componentStyles';

interface Props {
	login: () => void;
	setUserData: (data: any) => void;
	userData: any;
}

function ModLogin(props: Props) {
	whiteButton.width = '100%';
	whiteButton.padding = '1rem';

	const login = useGoogleLogin({
		onSuccess: (response) => {
			console.log(response);
  		fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
				headers: {
					'Authorization': `Bearer ${response.access_token}`
				},
			})
			.then(response => response.json())
			.then(data => {
				console.log('DATA: ', data)
				props.setUserData(data);
			});
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
              <h4 style={{textAlign: 'center'}}>Moderator Login</h4>
              <br />
              <Button
								onClick={login}
                sx={whiteButton}
              >
                <GoogleIcon sx={{fontSize:'3rem'}} /><h3 style={{marginLeft: '2rem', marginTop: '0.5rem'}}>SIGN IN WITH GOOGLE</h3>
              </Button>
							<br />
							<br />
							<button onClick={() => console.log(props.userData)} style={{width: '100%'}}>check user data?</button>
							<br />
							<br />
							<button onClick={props.login} style={{width: '100%'}}>login hook</button>
            </div>
          </CardContent>
        </Content>
      </Card>
    </>
  );
}

export default ModLogin;
