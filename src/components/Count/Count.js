import { useEffect, useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)} className="p-3 bg-blue-400 text-white">
        Increase
      </button>
    </div>
  );
};

export default Count;
