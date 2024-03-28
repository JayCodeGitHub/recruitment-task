import React, { useState } from 'react';
import { FormControl, MenuItem, Select as MuiSelect, SelectChangeEvent } from '@mui/material';

const values = [10, 15, 20];

function Select() {
  const [value, setValue] = useState<number>(values[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(Number(event.target.value));
  };
  return (
    <FormControl>
      <MuiSelect
        id="demo-simple-select"
        value={value.toString()}
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
