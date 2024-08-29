import { Alert, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';

export const withUsersDataFetching = (WrappedComponent: React.FC<any>) => {
  return (props: any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [usersData, setUsersData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
      setIsLoading(true);
      fetch('https://dummyjson.com/users')
        .then((res) => res.json())
        .then((data) => {
          setUsersData(data.users);
          setIsLoading(false);
        })
        .catch((e) => {
          setError(e);
          setIsLoading(false);
        });
    }, []);

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
