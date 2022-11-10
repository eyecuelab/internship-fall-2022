import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import HaikuForm from "../HaikuForm/HaikuForm";
import TeamOverlay from '../TeamOverlay/TeamOverlay';
import '../../index.css';
import { Overlay, Content, Header } from './styles';

const CardTemplate = () => {

  return (
    <>
      <Header><h4>Eyecue Haicue</h4></Header>
      <Card sx={{ display: 'flex', width: 1376, height: "fit-content", borderRadius: "15px", boxShadow: "0px 0px 75px #000", background: '#f6ede9' }}>
        <div style={{ position: "relative" }}>
        <CardMedia
          component="img"
          sx={{ width: 490 }}
          image="./images/blueberries_banner.png"
          alt="blueberry"
          style={{ background: "#0C114A" }}
        />
        <Overlay>
          {/* Components in the Overlay tag will likely be rendered with a switch statement */}
          {/* <TeamOverlay /> */}
        </Overlay>
        </div>
        <Content>
          <CardContent sx={{ height: '100%' }}>
            {/* Components in the CardContent tag will likely be rendered with a switch statement */}
            {/* <HaikuForm /> */}
          </CardContent>
        </Content>
      </Card>
    </>
  );
}

export default CardTemplate;