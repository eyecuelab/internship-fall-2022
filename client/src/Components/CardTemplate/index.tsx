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
  return (
    <>
		{console.log('width: ', window.outerWidth)}
		{console.log('height: ', window.outerHeight)}
			{/* <ReactConfetti width={window.outerWidth*1.2} height={window.outerHeight*1.2} numberOfPieces={750} gravity={0.15} recycle={false} style={{margin:'auto'}}/> */}
      <Header>
        <h4>Eyecue Haicue</h4>
      </Header>
      <StyledCard>
        <div style={{ position: 'relative' }}>
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

export type{CardTemplateProps}

export default CardTemplate;
