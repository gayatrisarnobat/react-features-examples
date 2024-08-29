import React from 'react';
import './App.scss';
import { Counter } from './custom-hooks-examples/state-management/counter';
import { Box } from '@mui/material';
import { Connectivity } from './custom-hooks-examples/effectOnlineOffline/connectivity';
import { EnhancedUsersList } from './hoc-example/users';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ mb: '2rem' }}>
        <Counter />
      </Box>
      <Box sx={{ mb: '2rem' }}>
        <Connectivity />
      </Box>
      <Box sx={{ mb: '2rem' }}>
        <EnhancedUsersList />
      </Box>
    </Box>
  );
}

export default App;
