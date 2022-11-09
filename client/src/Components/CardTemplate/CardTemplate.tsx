import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import FormTemplate from "../FormTemplate/FormTemplate"
import '../../index.css';
import { Overlay, Content, Header } from './styles';

const CardTemplate = () => {

  return (
    <>
      <Header><h4>Eyecue Haicue</h4></Header>
      <Card sx={{ display: 'flex', width: 1376, height: "fit-content", borderRadius: "15px", boxShadow: "0px 0px 75px #000", background: '#f6ede9'}}>
        <div style={{ position: "relative" }}>
        <CardMedia
          component="img"
          sx={{ width: 490, height: 820 }}
          image="./images/blueberries_banner.png"
          alt="an orange"
          style={{ background: "#0C114A"}}
        />
        <Overlay>
          {/* example text, will be dynamically rendered */}
          <h3>Team</h3>
          <h1>BLUEBERRY</h1>
          <br />
          <h3>Points</h3>
          <h1>3</h1>
          <br />
          <h3>Timer</h3>
          <h1>47</h1>
        </Overlay>
        </div>
        <Content>
          <CardContent sx={{ height: '100%' }}>
            {/* example text, will be dynamically rendered */}
            <h3>ROUND 2 - HOLIDAY ACTIVITIES</h3>
            <h1>DECORATING TREE</h1>
            <br />
            <FormTemplate />
          </CardContent>
        </Content>
      </Card>
    </>
  )

}

export default CardTemplate;