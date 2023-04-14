import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome, userName</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
