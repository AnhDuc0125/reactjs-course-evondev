import { useEffect, useRef } from 'react';

export default function useLinkBlank() {
  const contentRef = useRef(null);

  useEffect(() => {
    const links = contentRef.current.querySelectorAll('a');
    links.forEach((link) => link.setAttribute('target', '_blank'));
  }, []);

  return {
    contentRef,
  };
}
