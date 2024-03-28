import React from 'react';
import { Container } from '@material-ui/core';
import { Typography } from '@mui/material';
import Button from './components/Button';
import Table from './components/Table';
import Select from './components/Select';
import useStore from './state';

const tableHead = [{ name: 'Tags' }, { name: 'Amount' }];

const tableBody = [
  { name: 'React', count: 45345 },
  { name: 'JavaScript', count: 453485 },
  { name: 'TypeScript', count: 45345 }
];

function App() {
  const { count } = useStore();
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" sx={{ color: '#fff', fontSize: '2rem', margin: '1rem 0.5rem' }}>
        StackOverflow Tags
      </Typography>
      <Table head={tableHead} body={tableBody} />
      <Select />
      <Button>Hello World</Button>
      <Button disabled>Hello World</Button>
      {count}
    </Container>
  );
}

export default App;
