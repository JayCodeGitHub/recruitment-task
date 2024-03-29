import React from 'react';
import useStore from '../../state';
import { FormControl, MenuItem, Select as MuiSelect, SelectChangeEvent } from '@mui/material';

const values = [10, 15, 20];

function Select() {
  const { itemsPerPage, setItemsPerPage, setPage } = useStore();

  const handleChange = (event: SelectChangeEvent) => {
    setItemsPerPage(Number(event.target.value));
    setPage(1);
  };
  return (
    <FormControl>
      <MuiSelect
        id="demo-simple-select"
        value={itemsPerPage.toString()}
        onChange={handleChange}
        sx={{ backgroundColor: '#fff', fontSize: '1rem', height: '2.5rem', width: '5rem' }}>
        {values.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}

export default Select;
