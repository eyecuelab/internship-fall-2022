import React, {ReactElement} from 'react';
import '../../index.css';
import {Overlay, Content, Header, StyledCard, StyledCardMedia, StyledCardContent} from './styles';

interface Props {
  content: ReactElement<any, any>;
  overlay?: ReactElement<any, any>;
	bgUrl?: string;
	color?: string;
}

function CardTemplate(props: Props) {
  return (
    <>
      <Header>
        <h4>Eyecue Haicue</h4>
      </Header>
      <StyledCard>
        <div style={{ position: 'relative' }}>
					{/* @ts-ignore */}
          <StyledCardMedia bgUrl={props.bgUrl} color={props.color}/>
          <Overlay>
            {props.overlay}
          </Overlay>
        </div>
        <Content>
          <StyledCardContent>
            {props.content}
          </StyledCardContent>
        </Content>
      </StyledCard>
    </>
  );
}

export default CardTemplate;
