import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { AppBar, Toolbar } from '@mui/material';

const ApplicationBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          borderBottom: theme => `1px solid ${theme.palette.divider}`,
          backgroundColor: '#c2c9f2',
        }}
      >
        <Toolbar sx={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default ApplicationBar;
