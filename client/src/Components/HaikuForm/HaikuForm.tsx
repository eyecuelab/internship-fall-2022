import React from 'react';
import { TextField, Button } from '@mui/material';
import '../../index.css';

function HaikuForm() {
  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <h3>ROUND 2 - HOLIDAY ACTIVITIES</h3>
      <h1>DECORATING TREE</h1>
      <br />
      <TextField
        fullWidth
        sx={{ mt: 0 }}
        id="standard-basic"
        variant="standard"
        name="FiveSyllables"
        type="text"
        multiline
        InputProps={{
          style: {
            fontFamily: 'LuloCleanOneBold',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '42px',
            lineHeight: '50px',
            color: '#363636',
          },
        }}
      />
      <label>
        <h5>5 Syllables</h5>
      </label>
      <TextField
        fullWidth
        sx={{ mt: 0 }}
        id="standard-basic"
        variant="standard"
        name="SevenSyllables"
        type="text"
        multiline
        InputProps={{
          style: {
            fontFamily: 'LuloCleanOneBold',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '42px',
            lineHeight: '50px',
            color: '#363636',
          },
        }}
      />
      <label>
        <h5>7 Syllables</h5>
      </label>
      <TextField
        fullWidth
        sx={{ mt: 0 }}
        id="standard-basic"
        variant="standard"
        name="FiveSyllables"
        type="text"
        multiline
        InputProps={{
          style: {
            fontFamily: 'LuloCleanOneBold',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '42px',
            lineHeight: '50px',
            color: '#363636',
          },
        }}
      />
      <label>
        <h5>5 Syllables</h5>
      </label>
      <div style={{ height: '5rem', width: '100%' }}>
        <Button
          sx={{
            height: '5rem',
            width: '46%',
            color: '#363636',
            border: '1px solid #363636',
            borderRadius: '10px',
            position: 'absolute',
            bottom: '0',
            left: '0',
            marginBottom: 0,
          }}
          variant="outlined"
        >
          <h3>Submit</h3>
        </Button>
      </div>
    </div>
  );
}

export default HaikuForm;
