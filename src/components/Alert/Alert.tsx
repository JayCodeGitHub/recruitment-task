import React from 'react';
import { Snackbar, Alert as MuiAlert, Slide } from '@mui/material';

const message = 'This is an error Alert.';

function Alert() {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      TransitionComponent={Slide}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}>
      <MuiAlert severity="error">{message}</MuiAlert>
    </Snackbar>
  );
}

export default Alert;
