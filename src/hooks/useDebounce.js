import { useEffect, useState } from 'react';

export default function useDebounce(initialVal, delay = 1000) {
  const [debounceVal, setDebounceVal] = useState();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceVal(initialVal);
    }, delay);
    return () => clearTimeout(timerId);
  }, [initialVal, delay]);

  return debounceVal;
}
