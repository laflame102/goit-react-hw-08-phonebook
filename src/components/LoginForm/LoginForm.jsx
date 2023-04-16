import {
  Button,
  TextField,
  Box,
  Avatar,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
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
            Sign in
          </Typography>
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
              <Field
                as={TextField}
                type="email"
                name="email"
                required
                label="Email"
                margin="normal"
                fullWidth
              />

              <Field
                as={TextField}
                type="password"
                name="password"
                required
                margin="normal"
                label="Password"
                fullWidth
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
            </Form>
          </Formik>
        </Box>
      </Container>
    </div>
  );
};

export default LoginForm;
