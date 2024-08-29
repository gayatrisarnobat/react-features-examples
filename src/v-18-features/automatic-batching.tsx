import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useCounter } from '../custom-hooks-examples/state-management/counter-state';
import { Stack } from '@mui/material';

export const AutomaticBatchingExample = () => {
  const { count, increment } = useCounter();
  const [text, setText] = useState('');

  const handleClick = () => {
    increment();
    setText('Some Text');
  };

  console.log('Rendering: ~~~~');

  return (
    <div className="counter__container">
      <h6>
        Automatic batching allows React to batch multiple state updates into a
        single re-render. For it to work in development mode, comment out
        React.StrictMode from index.tsx
      </h6>
      <h4>Count: {count}</h4>
      <h4>Text: {text}</h4>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleClick}>
          Increment and Set Text Batching
        </Button>
      </Stack>
    </div>
  );
};
