import React from 'react';
import Button from '@mui/material/Button';
import { useCounter } from './counter-state';
import { Stack } from '@mui/material';

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <div className="counter__container">
      <h6>
        The following example of counter shows state reusability using a custom
        hook
      </h6>
      <h2>Count: {count}</h2>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => increment()}>
          Increment
        </Button>
        <Button variant="contained" onClick={() => decrement()}>
          Decrement
        </Button>
        <Button variant="contained" onClick={() => reset()}>
          Reset
        </Button>
      </Stack>
    </div>
  );
};
