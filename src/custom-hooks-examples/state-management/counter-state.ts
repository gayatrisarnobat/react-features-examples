import { useState } from 'react';

export function useCounter(initialVal = 0) {
  const [count, setCount] = useState(initialVal);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialVal);

  return { count, increment, decrement, reset };
}
