import useClickOutside from '../../hooks/useClickOutside';

const Dropdown = () => {
  const { show, setShow, nodeRef } = useClickOutside();
  return (
    <div className="w-[400px]" ref={nodeRef}>
      <div
        onClick={() => setShow(!show)}
        className="select-none relative border-2 border-gray-400 p-5 w-full cursor-pointer rounded-lg"
      >
        DROPDOWN
        {show && (
          <div className="absolute top-full mt-2 left-0 w-full border-2 border-gray-400">
            <div className="p-2 border-b-2">Javascript</div>
            <div className="p-2 border-b-2">ReactJS</div>
            <div className="p-2">VueJS</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
