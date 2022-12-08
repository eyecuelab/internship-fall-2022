import React, { MouseEventHandler } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { Card, CardContent, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { Content, Header } from './styles';
import { DogEarButton, whiteButton } from '../../componentStyles';
import { getData, postData } from '../../../ApiHelper';
import { useNavigate } from 'react-router-dom';

interface Props {
	setUserData: (data: any) => void;
}

function ModLogin(props: Props) {
	const { setUserData } = props;
	const navigate = useNavigate();
	whiteButton.width = '100%';
	whiteButton.padding = '1rem';
	whiteButton.height = '5rem';

	const login = useGoogleLogin({
		onSuccess: (response) => {
  		fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
				headers: {
					'Authorization': `Bearer ${response.access_token}`
				},
			})
			.then(response => response.json())
			.then(data => {
				localStorage.clear();
				localStorage.setItem('user', JSON.stringify(data));
				const user = JSON.parse(localStorage.getItem('user') as string);
				getData(`/moderators/${user.email}`).then((moderator) => {
					!moderator && postData('/moderators', { email: user.email });
				}) ;
				setUserData(data);
				navigate('/');
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
            <div style={{width: '45%'}}>
              <h4 style={{textAlign: 'center'}}>Moderator Login</h4>
              <br />
              <DogEarButton
								onClick={login as MouseEventHandler<any>}
                style={whiteButton}
              >
                <div style={{display: 'flex', alignItems: 'center'}}>
									<GoogleIcon sx={{fontSize:'3rem'}} /><h3 style={{marginLeft: '2rem'}}>SIGN IN WITH GOOGLE</h3>
								</div>
              </DogEarButton>
            </div>
          </CardContent>
        </Content>
      </Card>
    </>
  );
}

export default ModLogin;
