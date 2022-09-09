import { useFormik } from 'formik';

const Formik = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     name:
  //   }
  // })
  return (
    <div className="max-w-[300px] mx-auto mt-5">
      <div className="mb-3 flex flex-col gap-2">
        <label htmlFor="fullname">Full name</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          className="p-3 border border-gray-300 outline-none"
          placeholder="Type your full name here..."
        />
      </div>
    </div>
  );
};

export default Formik;
