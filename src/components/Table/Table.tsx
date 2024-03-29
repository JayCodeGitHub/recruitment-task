import React, { useState } from 'react';
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
  const { page, itemsPerPage, setPage } = useStore();
  const [items, setItems] = useState(body);
  const [sortType, setSortType] = useState(head[1].name);

  const sort = (type: string) => {
    switch (type) {
      case head[0].name:
        setItems((prevItems) => [...prevItems].sort((a, b) => a.name.localeCompare(b.name)));
        setSortType(head[0].name);
        break;
      case head[1].name:
        setItems((prevItems) => [...prevItems].sort((a, b) => b.count - a.count));
        setSortType(head[1].name);
        break;
      default:
        break;
    }
    setPage(1);
  };

  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ width: '100%' }} aria-label="Table of tags">
        <TableHead>
          <TableRow>
            {head.map(({ name }) => (
              <TableCell
                key={name}
                onClick={() => sort(name)}
                align="center"
                sx={{
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  textDecoration: sortType === name ? 'underline' : 'none',
                  '&:hover': { textDecoration: 'underline' }
                }}>
                {name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(({ name, count }, i) =>
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
