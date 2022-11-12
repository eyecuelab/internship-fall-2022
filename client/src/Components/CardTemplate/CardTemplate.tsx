import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import HaikuForm from '../HaikuForm/HaikuForm';
import TeamOverlay from '../TeamOverlay/TeamOverlay';
import ModOverlay from '../ModOverlay/ModOverlay';
import '../../index.css';
import { Overlay, Content, Header } from './styles';

function CardTemplate() {
  return (
    <>
      <Header>
        <h4>Eyecue Haicue</h4>
      </Header>
      <Card className="cardBanner">
        <div style={{ position: 'relative' }}>
          <CardMedia
            component="div"
            sx={{ width: '25rem', minHeight: '101%', height: '101%' }}
            style={{
              background: '#0C114A',
              minHeight: '101%',
              backgroundImage: `url(${'./images/blueberries_banner.png'})`,
            }}
          />
          <Overlay>
            {/* Components in the Overlay tag will likely be rendered with a switch statement */}
            {/* <TeamOverlay /> */}
            {/* <ModOverlay /> */}
          </Overlay>
        </div>
        <Content>
          <CardContent sx={{ height: '100%' }}>
            {/* Components in the CardContent tag will likely be rendered with switch statement */}
            {/* <HaikuForm /> */}
          </CardContent>
        </Content>
      </Card>
    </>
  );
}

export default CardTemplate;
