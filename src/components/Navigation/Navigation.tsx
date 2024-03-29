import React from 'react';
import { Stack } from '@mui/material';
import Button from '../Button';
import Select from '../Select';

function Navigation() {
  return (
    <Stack direction="row" justifyContent="space-around">
      <Select />
      <Stack direction="row" spacing={2}>
        <Button>Prev</Button>
        <Button>Next</Button>
      </Stack>
    </Stack>
  );
}

export default Navigation;
