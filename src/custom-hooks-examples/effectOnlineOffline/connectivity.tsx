import React from 'react';
import { useConnectivity } from './connectivity-hook';

export const Connectivity = () => {
  const { isOnline } = useConnectivity();
  return (
    <>
      <h6>
        The following example of connectivity status shows the state and effect
        reusability using a custom hook
      </h6>
      <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
    </>
  );
};
