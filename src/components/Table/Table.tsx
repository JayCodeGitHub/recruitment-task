import React from 'react';
import {
  TableContainer,
  Paper,
  Table as MuiTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';

const head = [{ name: 'Tags' }, { name: 'Amount' }];

const body = [
  { name: 'React', count: 45345 },
  { name: 'JavaScript', count: 45345 },
  { name: 'TypeScript', count: 45345 }
];

function Table() {
  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ width: '100%' }} aria-label="Table of tags">
        <TableHead>
          <TableRow>
            {head.map((head) => (
              <TableCell
                key={head.name}
                align="center"
                sx={{ cursor: 'pointer', fontWeight: 'bold' }}>
                {head.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

export default Table;
