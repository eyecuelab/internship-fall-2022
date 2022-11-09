import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import '../../index.css';

// import { Overlay } from './styles';
// import { Lefty } from './styles';

const FormTemplate = () => {

  return (
    <div style={{ position: 'relative', height: '76%' }}>
      <TextField fullWidth sx={{ mt: 0 }}
        id="standard-basic"
        variant="standard"
        name="FiveSyllables"
        type="text"
      />
      <label><h5>5 Syllables</h5></label>
      <TextField fullWidth sx={{ mt: 2 }} 
        id="standard-basic"
        variant="standard"
        name="SevenSyllables"
        type="text"
      />
      <label><h5>7 Syllables</h5></label>
      <TextField fullWidth sx={{ mt: 2 }} 
        id="standard-basic"
        variant="standard"
        name="FiveSyllables"
        type="text"
      />
      <label><h5>5 Syllables</h5></label>
        
        <Button
          sx={{
            height: '95px',
            width: '46%',
            color: '#363636',
            border: '1px solid #363636',
            borderRadius: '10px',
            position: 'absolute',
            bottom: '0',
            left: '0'}}
          variant="outlined" 
        >
          <h3>Submit</h3>
        </Button>
    </div>
  )

}

export default FormTemplate;