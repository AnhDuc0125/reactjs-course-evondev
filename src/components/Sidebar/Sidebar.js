import { forwardRef } from 'react';

const Sidebar = ({ show }, ref) => {
  return (
    <div
      ref={ref}
      className={`w-[300px] transition-all bg-green-400 fixed top-0 bottom-0 left-0 ${
        show ? '' : '-translate-x-full'
      }`}
    ></div>
  );
};

export default forwardRef(Sidebar);
