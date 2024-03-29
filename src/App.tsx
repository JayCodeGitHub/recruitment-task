import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { Stack, Typography, Box, CircularProgress } from '@mui/material';
import Table from './components/Table';
import Alert from './components/Alert';
import Navigation from './components/Navigation';
import useStore from './state';
import axios from 'axios';

const tableHead = [{ name: 'Tags' }, { name: 'Amount' }];

function App() {
  const { items, setItems, setAlert } = useStore();
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchData = async () => {
    try {
      // artificial delay
      const [res] = await Promise.allSettled([
        axios.get(
          'https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow'
        ),
        new Promise((resolve) => setTimeout(resolve, 1000))
      ]);

      if (res.status === 'rejected') {
        throw res.reason;
      }

      const { data } = (res.status === 'fulfilled' && res.value) || {};

      setItems(
        data.items.map((item: { name: string; count: number }) => {
          return { name: item.name, count: item.count };
        })
      );
    } catch (error) {
      setAlert('Failed to get data');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxWidth="sm">
      <Stack direction="column" gap="1rem" sx={{ padding: '1rem 0' }}>
        <Typography variant="h1" sx={{ color: '#fff', fontSize: '2rem', margin: '1rem 0.5rem' }}>
          StackOverflow Tags
        </Typography>
        <Navigation />
        <Alert />
        {items ? <Table head={tableHead} body={items} /> : null}
        {isLoading && (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )}
      </Stack>
    </Container>
  );
}

export default App;
