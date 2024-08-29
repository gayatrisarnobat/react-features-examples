// UserList.js
import React from 'react';
import { withUsersDataFetching } from './data-fetching-hoc';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

// @ts-expect-error: ok to ignore
const UserList = ({ usersData }) => {
  return (
    <>
      <Box sx={{ mb: 2 }}>
        <h6>
          The following example of users data fetching shows the usage of higher
          order components
        </h6>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersData.map((user: any) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {`${user.lastName}, ${user.firstName}`}
                </TableCell>
                <TableCell align="right">{user.gender.toUpperCase()}</TableCell>
                <TableCell align="right">{user.age}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export const EnhancedUsersList = withUsersDataFetching(UserList);
