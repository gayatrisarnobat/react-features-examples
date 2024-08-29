import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from '@mui/material';
import React, { useState, useTransition } from 'react';

// Simulate long running computation
const generateList = (input: string): string[] => {
  return Array.from({ length: 10000 }, (_, index) => `${input} ${index + 1}`);
};

export const ConcurrentRenderingExample = () => {
  const [list, setList] = useState<string[] | undefined>();
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      setList(generateList('Simulating long computation'));
    });
  };

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <h6>
          Concurrent rendering allows React to pause and resume rendering work,
          making your app more responsive. The following example shows the usage
          of cocurrent rendering in React v18. It is useful for a
          computationally intensive calculation. It prioritises user's input
          over generating an output for a computationally expensive operation.
        </h6>
      </Box>
      <Box sx={{ mb: 1 }}>
        <TextField
          id="filled-basic"
          label="Enter value"
          value={input}
          variant="filled"
          onChange={handleChange}
        />
      </Box>
      {isPending ? (
        <Box sx={{ display: 'flex', mt: '2' }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableBody>
              {list &&
                list.map((listStr: string) => (
                  <TableRow
                    key={listStr}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {listStr}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
