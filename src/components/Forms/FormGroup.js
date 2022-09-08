import useOnChange from '../../hooks/useOnChange';

const FormGroup = () => {
  const { state, handleOnChange } = useOnChange({
    fullname: '',
    email: '',
    married: false,
  });

  return (
    <div className="flex items-center gap-5">
      <input
        type="text"
        name="fullname"
        placeholder="Type your fullname..."
        onChange={handleOnChange}
        className="p-5 border-2 border-gray-400 outline-none rounded-lg focus:border-blue-400 transition-all"
      />
      <input
        type="email"
        name="email"
        placeholder="Type your email..."
        onChange={handleOnChange}
        className="p-5 border-2 border-gray-400 outline-none rounded-lg focus:border-blue-400 transition-all"
      />
      <div className="flex items-center gap-2 text-gray-500">
        <input
          type="checkbox"
          name="married"
          onChange={handleOnChange}
          className="w-[15px] h-[15px] cursor-pointer"
        />
        Married
      </div>
    </div>
  );
};

export default FormGroup;
