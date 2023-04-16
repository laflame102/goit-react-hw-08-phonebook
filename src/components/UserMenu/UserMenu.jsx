import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUserEmail } from 'redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);

  return (
    <div>
      <p>Welcome, {email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
