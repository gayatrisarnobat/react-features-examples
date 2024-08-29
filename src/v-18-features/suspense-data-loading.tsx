import React, { lazy, Suspense, useState } from 'react';
import Button from '@mui/material/Button';
import { Box, CircularProgress, Stack } from '@mui/material';
import { EnhancedUsersList } from '../hoc-example/users';

const LazyUsersComponent = lazy(async () => {
  return { default: () => <EnhancedUsersList showDefaultMsg={false} /> };
});

export const SuspenseDataLoadingExample = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h6>
        React v18's Suspense improvements include support for data fetching,
        making it easier to handle asynchronous operations.
      </h6>
      <Box
        sx={{
          display: 'inline-flex',
          flexDirection: 'column',
          paddingTop: '1.5rem',
        }}
      >
        <Button
          variant="contained"
          sx={{ width: '8rem', maxWidth: '8rem' }}
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? 'Hide Data' : 'Show Data'}
        </Button>
        <Box sx={{ mt: '2rem' }}>
          {show && (
            <Suspense fallback={<CircularProgress />}>
              <LazyUsersComponent />
            </Suspense>
          )}
        </Box>
      </Box>
    </>
  );
};
