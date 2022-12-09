import React, {ReactElement} from 'react';
import ReactConfetti from 'react-confetti';
import '../../index.css';
import {Overlay, Content, Header, StyledCard, StyledCardMedia, StyledCardContent} from './styles';

type CardTemplateProps = {
  content: ReactElement<any, any>;
  overlay?: ReactElement<any, any>;
	bgUrl?: string;
	color?: string;
}

function CardTemplate(props: CardTemplateProps) {
	const { content, overlay, bgUrl, color } = props;

  // console.log(`bgUrl= ${bgUrl}`);


  return (
    <>
			<Header>
        <h4>Eyecue Haicue</h4>
      </Header>
      <StyledCard>
        <div style={{ position: 'relative' }}>
          <StyledCardMedia id='overlay-bg' bgUrl={bgUrl} color={color}/>
          <Overlay>
            {overlay}
          </Overlay>
        </div>
        <Content>
          <StyledCardContent>
            {content}
          </StyledCardContent>
        </Content>
      </StyledCard>
    </>
  );
}

export type{CardTemplateProps}

export default CardTemplate;
