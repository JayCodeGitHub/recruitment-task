import React from 'react';
import { Button as MuiButton } from '@mui/material';

function Button({
  children,
  onClick,
  disabled
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <MuiButton onClick={onClick} variant="contained" disabled={disabled}>
      {children}
    </MuiButton>
  );
}

export default Button;
