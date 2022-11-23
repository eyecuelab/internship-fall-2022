import React, {ReactElement, useState} from 'react';
import HaikuForm from '../HaikuForm/HaikuForm';
import TeamOverlay from '../TeamOverlay/TeamOverlay';
import ModGameList from '../ModGameList/ModGameList';
import ModOverlay from '../ModOverlay/ModOverlay';
import ModTeamList from '../ModTeamList/ModTeamList';
import TeamLobby from '../TeamLobby/TeamLobby';
import '../../index.css';
import {Overlay, Content, Header, StyledCard, StyledCardMedia, StyledCardContent} from './styles';

interface Props {
  user: string;
  content: ReactElement<any, any>;
  overlay: ReactElement<any, any>;
}

function CardTemplate(props: Props) {
  return (
    <>
      <Header>
        <h4>Eyecue Haicue</h4>
      </Header>
      <StyledCard>
        <div style={{ position: 'relative' }}>
          <StyledCardMedia
            style={{
              background: props.user === 'moderator' ? '#15586A' : '#0c114a',
              backgroundImage:
                props.user === 'moderator'
                  ? `url(${'/images/moderator_card_background_2.png'})`
                  : `url(${'/images/blueberries_banner.png'})`,
							backgroundAttachment: 'absolute',
							backgroundPosition: '16% 95%',
							backgroundRepeat: 'no-repeat',
            }}
          />
          <Overlay>
            {/* Components in the Overlay tag will likely be rendered with a switch statement */}
            {props.overlay}
          </Overlay>
        </div>
        <Content>
          <StyledCardContent>
            {/* previously sx={{ width: 100%}} */}
            {/* Components in the CardContent tag will likely be rendered with switch statement */}
            {/* <HaikuForm /> */}
            {/* <ModGameList /> */}
            {/* <ModTeamList /> */}
            {/* <TeamLobby /> */}
            {props.content}
          </StyledCardContent>
        </Content>
      </StyledCard>
    </>
  );
}

export default CardTemplate;
