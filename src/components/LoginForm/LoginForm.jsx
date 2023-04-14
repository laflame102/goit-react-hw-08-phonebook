import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={({ email, password }, actions) => {
          dispatch(logIn({ email, password }));
          actions.resetForm();
        }}
      >
        <Form>
          <label>
            Name
            <Field type="email" name="email" required />
          </label>

          <label>
            Number
            <Field type="password" name="password" required />
          </label>

          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
