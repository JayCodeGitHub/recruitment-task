import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { Typography, Box, CircularProgress } from '@mui/material';
import Button from './components/Button';
import Table from './components/Table';
import Select from './components/Select';
import useStore from './state';
import axios from 'axios';

const tableHead = [{ name: 'Tags' }, { name: 'Amount' }];

function App() {
  const { count } = useStore();
  const [tableBody, setTableBody] = useState<false | { name: string; count: number }[]>(false);

  const fetchData = async () => {
    const res = await axios.get(
      'https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow'
    );
    setTableBody(
      res.data.items.map((item: { name: string; count: number }) => {
        return { name: item.name, count: item.count };
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" sx={{ color: '#fff', fontSize: '2rem', margin: '1rem 0.5rem' }}>
        StackOverflow Tags
      </Typography>
      <Select />
      <Button>Hello World</Button>
      <Button disabled>Hello World</Button>
      {count}
      {tableBody ? (
        <Table head={tableHead} body={tableBody} />
      ) : (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
}

export default App;
