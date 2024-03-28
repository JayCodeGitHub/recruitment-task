import React from 'react';
import { Container } from '@material-ui/core';
import { Typography } from '@mui/material';
import Button from './components/Button';
import Table from './components/Table';
import Select from './components/Select';

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" sx={{ color: '#fff', fontSize: '2rem', margin: '1rem 0.5rem' }}>
        StackOverflow Tags
      </Typography>
      <Table />
      <Select />
      <Button>Hello World</Button>
      <Button disabled>Hello World</Button>
    </Container>
  );
}

export default App;
