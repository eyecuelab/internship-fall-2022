import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../index.css';

function ModChooseTopic() {
  return (
    <div style={{ position: 'relative', height: '95%' }}>
      <h3>choose a new round topic</h3>
      <hr />
      <Button
        sx={{
          height: '5rem',
          width: '100%',
          color: '#363636',
          border: '1px solid #363636',
          borderRadius: '10px',
        }}
        variant="outlined"
      >
        <h3>value to be passed 1</h3>
      </Button>
      <br/>
      <br/>

      <Button
        sx={{
          height: '5rem',
          width: '100%',
          color: '#363636',
          border: '1px solid #363636',
          borderRadius: '10px',
        }}
        variant="outlined"
      >
        <h3>value to be passed 2</h3>
      </Button>
      <br/>
      <br/>

      <Button
        sx={{
          height: '5rem',
          width: '100%',
          color: '#363636',
          border: '1px solid #363636',
          borderRadius: '10px',
        }}
        variant="outlined"
      >
        <h3>value to be passed 3</h3>
      </Button>
      <br/>
      <br/>

      <Button
        sx={{
          height: '5rem',
          width: '100%',
          color: '#363636',
          border: '1px solid #363636',
          borderRadius: '10px'
        }}
        variant="outlined"
      >
        <h3>value to be passed 4</h3>
      </Button>
      <br/>
      <br/>

      <Button
        sx={{
          height: '5rem',
          width: '100%',
          color: '#363636',
          border: '1px solid #363636',
          borderRadius: '10px'
        }}
        variant="outlined"
      >
        <h3>value to be passed 5</h3>
      </Button>
      <br/>
      <br/>

      <Button
        sx={{
          height: '5rem',
          width: '100%',
          color: '#363636',
          backgroundColor: '#FC3911',
          border: '1px solid #363636',
          borderRadius: '10px',
          position: 'absolute',
          bottom: '0',
          left: '0',
        }}
        variant="outlined"
      >
        <h3>end game</h3>
      </Button>
    </div>
  );
}

export default ModChooseTopic;
