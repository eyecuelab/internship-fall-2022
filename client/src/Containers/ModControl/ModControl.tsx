import React from 'react';
import '../../index.css';
import { Card, CardContent, Button } from '@mui/material';
import { Header, Content } from './styles';

const ModControl = () => {

  return (
    <>
      <Header><h4>Eyecue Haicue</h4></Header>
      <Card sx={{ width: 1376, height: 820, minHeight: "fit-content", borderRadius: "15px", boxShadow: "0px 0px 75px #000", background: '#15586a', backgroundImage: 'url(./public/images/moderator_card_background.png)'}}>
        <Content style={{ color: '#f9f9f9' }}>
          <CardContent sx={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            {/* example text, will be dynamically rendered */}
            <div>
            <h4>Moderator Login</h4>
            <br />
            <Button 
              sx={{
                height: '75px',
                width: '100%',
                color: '#363636',
                border: '1px solid #363636',
                borderRadius: '10px',
            }}>
              GOOGLE SIGN IN
          </Button>
          </div>
          </CardContent>
        </Content>
      </Card>
    </>
  );
}

export default ModControl