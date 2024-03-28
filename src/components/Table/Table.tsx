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

function Table({
  head,
  body
}: {
  head: { name: string }[];
  body: { name: string; count: number }[];
}) {
  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ width: '100%' }} aria-label="Table of tags">
        <TableHead>
          <TableRow>
            {head.map(({ name }) => (
              <TableCell key={name} align="center" sx={{ cursor: 'pointer', fontWeight: 'bold' }}>
                {name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map(({ name, count }) => (
            <TableRow key={name}>
              <TableCell align="center">{name}</TableCell>
              <TableCell align="center">{count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

export default Table;
