import React, { useState } from 'react';
import { Backdrop, Box, Modal, Fade, Button, Typography } from '@mui/material';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';

const style = {
  position: 'absolute',
  color: 'black',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function InfoText() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
      {/* <Button sx={{ color: 'white', fontSize: '3rem', padding: '0' }} onClick={handleOpen}>❓</Button> */}
      <HelpOutlineRoundedIcon sx={{ fontSize: '2.5rem' }}onClick={handleOpen}></HelpOutlineRoundedIcon>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* <Typography id="transition-modal-title"> */}
              <h4 style={{textAlign: "center"}}>Moderator Instructions 👀</h4>
            {/* </Typography> */}
            {/* <Typography id="transition-modal-description" sx={{ mt: 2 }}> */}
              <ol>
                <li>Create a Game, Topic, and Phrases.</li>
                <li>Publish the Game.</li>
                <li>Click on the Game Name.</li>
                <li>Choose a Topic from the Topic List.</li>
                <li>Click the <b>Player URL</b> button and send link to Team Leaders.</li>
                <li>Wait for Team Leaders to join Game and Team.</li>
                <li>Click <b>Start Round</b>.</li>
                <li>Wait for Teams to Write Haikus.</li>
                <li>When the status for all players has changed to DONE press the <b>Start Reading</b> button</li>
                <li>Wait for Teams to click Buzzer.</li>
                <li>Reward points for correct guess or dismiss guess.</li>
                <li>Click <b>Advance HaiCue Clue</b> to advace to next line of Haiku.</li>
                <li>Repeat step 10, 11, 12 until the last line of the Haiku has been read.</li>
                <li>Click <b>End Round</b> to return to Topic List and select new Topic.</li>
                <li>If there are no more Topics, Click <b>End Game</b> to return to game list.</li>
              </ol>
            {/* </Typography> */}
          </Box>
        </Fade>
      </Modal>
    </div>
    </>
  );

}

export default InfoText;