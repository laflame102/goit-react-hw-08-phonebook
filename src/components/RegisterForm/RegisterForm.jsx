import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={({ name, email, password }, actions) => {
          dispatch(register({ name, email, password }));
          actions.resetForm();
        }}
      >
        <Form>
          <label>
            Username
            <Field type="text" name="name" required />
          </label>

          <label>
            Email
            <Field type="email" name="email" required />
          </label>

          <label>
            Password
            <Field type="password" name="password" required />
          </label>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
