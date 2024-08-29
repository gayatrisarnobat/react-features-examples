import React, { useEffect, useState } from 'react';

export function useUsersData() {
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

  return { isLoading, usersData, error };
}
