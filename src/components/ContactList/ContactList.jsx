import { List, ListItem } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            {name}: {number}
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContactList;
