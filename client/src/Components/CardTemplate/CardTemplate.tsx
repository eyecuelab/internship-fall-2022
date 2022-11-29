import React, {ReactElement} from 'react';
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
          <StyledCardMedia />
          <Overlay>
            {props.overlay}
          </Overlay>
        </div>
        <Content>
          <StyledCardContent>
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
