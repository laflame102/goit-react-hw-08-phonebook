import { List, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchingContact } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectSearchingContact);

  return (
    <div>
      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </Item>
        ))}
      </List>
    </div>
  );
};
