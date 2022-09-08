import { useEffect, useRef, useState } from 'react';

export default function useClickOutside() {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (nodeRef.current && !nodeRef.current.contains(e.target) && !e.target.matches('button')) {
        setShow(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return {
    show,
    setShow,
    nodeRef,
  };
}
