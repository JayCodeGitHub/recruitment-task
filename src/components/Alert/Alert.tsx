import React, { useEffect } from 'react';
import { Snackbar, Alert as MuiAlert, Slide } from '@mui/material';
import useStore from '../../state';

function Alert({ message }: { message?: string }) {
  const { alert, setAlert } = useStore();

  useEffect(() => {
    message && setAlert(message);
  }, [message]);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert(false);
  };
  return (
    <Snackbar
      open={alert ? true : false}
      autoHideDuration={6000}
      onClose={handleClose}
      TransitionComponent={Slide}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}>
      <MuiAlert severity="error">{alert}</MuiAlert>
    </Snackbar>
  );
}

export default Alert;
