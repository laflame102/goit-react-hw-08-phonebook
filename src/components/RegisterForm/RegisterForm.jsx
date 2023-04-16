import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Avatar,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
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
              <Field
                as={TextField}
                type="text"
                name="name"
                label="Username"
                margin="normal"
                fullWidth
                required
              />

              <Field
                as={TextField}
                type="email"
                name="email"
                label="Email"
                margin="normal"
                fullWidth
                required
              />

              <Field
                as={TextField}
                type="password"
                name="password"
                label=" Password"
                margin="normal"
                fullWidth
                required
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
            </Form>
          </Formik>
        </Box>
      </Container>
    </div>
  );
};

export default RegisterForm;
