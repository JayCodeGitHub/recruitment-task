import React from 'react';
import { Stack } from '@mui/material';
import useStore from '../../state';
import Button from '../Button';
import Select from '../Select';

function Navigation() {
  const { items, page, setPage, itemsPerPage } = useStore();

  const pageIncrement = () => {
    items && page < items.length / itemsPerPage && setPage(page + 1);
  };
  const pageDecrement = () => {
    page > 1 && setPage(page - 1);
  };

  return (
    <Stack direction="row" justifyContent="space-around">
      <Select />
      <Stack direction="row" spacing={2}>
        <Button onClick={pageDecrement} disabled={!(page > 1)}>
          Prev
        </Button>
        <Button onClick={pageIncrement} disabled={!(items && page < items.length / itemsPerPage)}>
          Next
        </Button>
      </Stack>
    </Stack>
  );
}

export default Navigation;
