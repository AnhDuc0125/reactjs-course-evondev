import { useEffect, useRef, useState } from 'react';

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const elmRef = useRef(null);

  useEffect(() => {
    const handleMouseOver = () => {
      setHovered(true);
    };

    const handleMouseOut = () => {
      setHovered(false);
    };

    const elmDom = elmRef.current;
    if (elmDom) {
      elmDom.addEventListener('mouseover', handleMouseOver);
      elmDom.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      elmDom.removeEventListener('mouseover', handleMouseOver);
      elmDom.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return {
    hovered,
    elmRef,
  };
}
