import React, { useState } from 'react';
import { Backdrop, Box, Modal, Fade, Button, Typography } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  color: 'black',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
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
      <Button sx={{ color: 'white', fontSize: '3rem', padding: '0' }} onClick={handleOpen}>❓</Button>
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              HaiCue Rules
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Instructions go here.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
    </>
  );

}

export default InfoText;