import React, { useEffect, useState } from 'react';
import './App.scss';
import { Counter } from './custom-hooks-examples/state-management/counter';
import { Box, CssBaseline } from '@mui/material';
import { Connectivity } from './custom-hooks-examples/effectOnlineOffline/connectivity';
import { EnhancedUsersList } from './hoc-example/users';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider } from '@emotion/react';

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
          <Counter />
        </Box>
        <Box sx={{ mb: '2rem' }}>
          <Connectivity />
        </Box>
        <Box sx={{ mb: '2rem' }}>
          <EnhancedUsersList />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
