import { useState } from 'react';

export default function useOnChange(initialValue) {
  const [state, setState] = useState(initialValue);

  const handleOnChange = (e) => {
    const elm = e.target;
    setState((prev) => ({
      ...prev,
      [elm.name]: elm.type === 'checkbox' ? elm.checked : elm.value,
    }));
  };

  return {
    state,
    handleOnChange,
  };
}
