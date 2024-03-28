import React from 'react';
import Button from './components/Button';
import { Container } from '@material-ui/core';
import { Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" sx={{ color: '#fff', fontSize: '2rem', padding: '1rem 0.5rem' }}>
        StackOverflow Tags
      </Typography>
      <Button>Hello World</Button>
      <Button disabled>Hello World</Button>
    </Container>
  );
}

export default App;
