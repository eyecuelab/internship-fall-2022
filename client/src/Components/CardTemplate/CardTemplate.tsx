import React, { ReactElement, useState } from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
import HaikuForm from '../HaikuForm/HaikuForm';
import TeamOverlay from '../TeamOverlay/TeamOverlay';
import ModGameList from '../ModGameList/ModGameList';
import ModOverlay from '../ModOverlay/ModOverlay';
import ModTeamList from '../ModTeamList/ModTeamList';
import TeamLobby from '../TeamLobby/TeamLobby';
import '../../index.css';
import { Overlay, Content, Header } from './styles';

interface Props {
	user: string,
	content: ReactElement<any, any>,
}

function CardTemplate(props: Props) {

	const overlaySwitch = (user: string) => {
		switch(user) {
			case("moderator"):
				return <ModOverlay />;
			case("player"):
				return <TeamOverlay />;
			default:
				return <TeamOverlay />;
		}
	}

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
              minHeight: '101%',
              background: props.user === "moderator" ? '#15586A' : '#0c114a',
              backgroundImage: props.user === "moderator" ? `url(${'/images/moderator_card_background_2.png'})` : `url(${'/images/blueberries_banner.png'})`,
            }}
          />
          <Overlay>
            {/* Components in the Overlay tag will likely be rendered with a switch statement */}
						{ overlaySwitch(props.user) }
          </Overlay>
        </div>
        <Content>
          <CardContent sx={{ height: '100%' }}>
            {/* Components in the CardContent tag will likely be rendered with switch statement */}
            {/* <HaikuForm /> */}
            {/* <ModGameList /> */}
            {/* <ModTeamList /> */}
            {/* <TeamLobby /> */}
						{props.content}
          </CardContent>
        </Content>
      </Card>
    </>
  );
}

export default CardTemplate;
