import React, { useEffect, useState } from 'react';
import './App.scss';
import { Counter } from './custom-hooks-examples/state-management/counter';
import { Box, CssBaseline, Divider } from '@mui/material';
import { Connectivity } from './custom-hooks-examples/effectOnlineOffline/connectivity';
import { EnhancedUsersList } from './hoc-example/users';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider } from '@emotion/react';
import { ConcurrentRenderingExample } from './v-18-features/concurrent-rendering';
import { AutomaticBatchingExample } from './v-18-features/automatic-batching';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const handleThemeChange = (e: any) => {
      setTheme(e.matches ? darkTheme : lightTheme);
    };

    // Check the current system theme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? darkTheme : lightTheme);

    // Add event listener for changes
    mediaQuery.addEventListener('change', handleThemeChange);

    // Cleanup event listener on unmount
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ mb: '2rem' }}>
          <ConcurrentRenderingExample />
        </Box>
        <Divider />
        <Box sx={{ mb: '2rem', mt: '1rem' }}>
          <AutomaticBatchingExample />
        </Box>
        <Divider />
        <Box sx={{ mb: '2rem', mt: '1rem' }}>
          <Counter />
        </Box>
        <Divider />
        <Box sx={{ mb: '2rem', mt: '1rem' }}>
          <Connectivity />
        </Box>
        <Divider />
        <Box sx={{ mb: '2rem', mt: '1rem' }}>
          <EnhancedUsersList />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
