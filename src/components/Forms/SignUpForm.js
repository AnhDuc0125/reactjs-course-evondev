import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, 'First name must have 20 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(10, 'Last name must have 10 characters or less')
          .required('Required'),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="max-w-[300px] mx-auto mt-5">
        <div className="mb-3 flex flex-col gap-2">
          <label htmlFor="firstName">First name</label>
          <Field
            name="firstName"
            className="p-3 border border-gray-300 outline-none rounded-lg"
            placeholder="Type your first name here..."
          />
          <p className="text-sm min-h-[20px] text-red-500">
            <ErrorMessage name="firstName" />
          </p>
        </div>
        <div className="mb-3 flex flex-col gap-2">
          <label htmlFor="lastName">Last name</label>
          <Field
            name="lastName"
            className="p-3 border border-gray-300 outline-none rounded-lg"
            placeholder="Type your last name here..."
          />
          <p className="text-sm min-h-[20px] text-red-500">
            <ErrorMessage name="lastName" />
          </p>
        </div>
        <button
          type="submit"
          className="w-full p-3 rounded-lg font-semibold text-white bg-blue-400"
        >
          SUBMIT
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
