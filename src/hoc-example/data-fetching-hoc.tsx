import { Alert, CircularProgress } from '@mui/material';
import React from 'react';
import { useUsersData } from '../custom-hooks-examples/usersDataFetching/users-data-fetching';

export const withUsersDataFetching = (WrappedComponent: React.FC<any>) => {
  return (props: any) => {
    const { isLoading, usersData, error } = useUsersData();

    if (isLoading) {
      return <CircularProgress />;
    } else if (error) {
      return (
        <Alert variant="filled" severity="error">
          {error}
        </Alert>
      );
    }
    return <WrappedComponent {...props} usersData={usersData} />;
  };
};
