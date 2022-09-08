import { useLayoutEffect, useRef, useState } from 'react';

const TextareaResize = () => {
  const [content, setContent] = useState('');
  const [height, setHeight] = useState('auto');
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setHeight('auto');
    setContent(e.target.value);
  };

  useLayoutEffect(() => {
    setHeight(`${textareaRef.current?.scrollHeight}px`);
  }, [content]);

  return (
    <textarea
      ref={textareaRef}
      value={content}
      onChange={handleChange}
      className="p-3 overflow-hidden rounded-lg min-w-[350px] outline-none border-2 border-gray-400 focus:border-blue-400 resize-none"
      style={{ height: height }}
    ></textarea>
  );
};

export default TextareaResize;
