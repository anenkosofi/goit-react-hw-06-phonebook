import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box.styled';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { PhonebookBox, ContactBox } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <Box>
      <GlobalStyle />
      <PhonebookBox>
        <h1>Phonebook</h1>
        <ContactForm />
      </PhonebookBox>
      <ContactBox>
        <h2>Contacts</h2>
        {contacts.length !== 0 && <Filter />}
        <ContactList />
      </ContactBox>
    </Box>
  );
}
