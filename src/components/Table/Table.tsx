import React from 'react';
import useStore from '../../state';
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
  const { page, itemsPerPage } = useStore();
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
          {body.map(({ name, count }, i) =>
            i <= page * itemsPerPage && i >= page * itemsPerPage - itemsPerPage ? (
              <TableRow key={name}>
                <TableCell align="center" sx={{ width: '50%' }}>
                  {name}
                </TableCell>
                <TableCell align="center" sx={{ width: '50%' }}>
                  {count}
                </TableCell>
              </TableRow>
            ) : null
          )}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

export default Table;
