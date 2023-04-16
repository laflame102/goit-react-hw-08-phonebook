import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUserEmail } from 'redux/auth/selectors';
import { Container, Text } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);

  return (
    <Container>
      <Text>Welcome, {email}</Text>
      <Button
        type="button"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </Container>
  );
};

export default UserMenu;
