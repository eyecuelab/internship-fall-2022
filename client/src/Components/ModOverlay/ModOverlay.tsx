import '../../index.css';
import { Button } from '@mui/material';
import { Container, FlexItem } from './styles';

const ModOverlay = () => {
  return (
    <>
      <Container>
        <FlexItem style={{ alignSelf: 'flex-start' }}>
          <h3>Team</h3>
          <h1>MODS</h1>
          <br />
{/* render when editing topics/phrases for a game */}
          {/* <h3>Name</h3>
          <h1>{game name}</h1>
          <br /> */}
{/* render while game is in progress */}
          {/* <h3>Round</h3>
          <h1>{round number}</h1> 
          <br /> */}
{/* render during brainstorming phase each round */}
          {/* <h3>Timer</h3>
          <h1>{timer}</h1>
          <br /> */}
{/* render during guessing phase */}
          {/* <h3>Teams left</h3>
          <h1>{number of teams left to present}</h1>
          <br /> */}
        </FlexItem>
        </Container>
        <Container>
        <FlexItem style={{ alignSelf: 'flex-end' }}>
          <Button
            sx={{
              height: '5rem',
              width: '100%',
              color: '#363636',
              border: '1px solid #363636',
              borderRadius: '10px',
              background: '#bbb',
              mt: 3,
            }}>
            <h3>{'some text'}</h3>
          </Button>
          <br />
          <Button
            sx={{
              height: '5rem',
              width: '100%',
              color: '#363636',
              border: '1px solid #363636',
              borderRadius: '10px',
              background: '#bbb',
              mt: 3,
            }}>
              <h3>{'some text'}</h3>
          </Button>
        </FlexItem>
      </Container>
    </>
  );
}

export default ModOverlay