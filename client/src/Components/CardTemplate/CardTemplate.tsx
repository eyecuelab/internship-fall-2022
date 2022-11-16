import React, { useState } from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
import HaikuForm from '../HaikuForm/HaikuForm';
import TeamOverlay from '../TeamOverlay/TeamOverlay';
import ModGameList from '../ModGameList/ModGameList';
import ModOverlay from '../ModOverlay/ModOverlay';
import ModTeamList from '../ModTeamList/ModTeamList';
import TeamLobby from '../TeamLobby/TeamLobby';
import '../../index.css';
import { Overlay, Content, Header } from './styles';

function CardTemplate() {
  return (
    <>
      <Header>
        <h4>Eyecue Haicue</h4>
      </Header>
      <Card
        sx={{
          display: 'flex',
          width: 1376,
          minHeight: 820,
          height: 'fit-content',
          borderRadius: '15px',
          boxShadow: '0px 0px 75px #000',
          background: '#f6ede9',
        }}
      >
        <div style={{ position: 'relative' }}>
          <CardMedia
            component="div"
            sx={{ width: 490, minHeight: '101%', height: '101%' }}
            style={{
              background: '#15586A',
              minHeight: '101%',
              backgroundImage: `url(${'./images/moderator_card_background_2.png'})`,
            }}
          />
          <Overlay>
            {/* Components in the Overlay tag will likely be rendered with a switch statement */}
            {/* <TeamOverlay /> */}
            <ModOverlay />
          </Overlay>
        </div>
        <Content>
          <CardContent sx={{ height: '100%' }}>
            {/* Components in the CardContent tag will likely be rendered with switch statement */}
            {/* <HaikuForm /> */}
            <ModGameList />
            {/* <ModTeamList /> */}
            {/* <TeamLobby /> */}
          </CardContent>
        </Content>
      </Card>
    </>
  );
}

export default CardTemplate;
