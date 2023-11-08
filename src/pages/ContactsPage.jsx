import React from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { requestContacts, addContact, deleteContact } from 'redux/thunks';
import {
  selectContacts,
  selectError,
  selectFilterValue,
  selectIsLoading,
} from 'redux/selectors';
import { useEffect } from 'react';
import { onFilterChange } from 'redux/contactsSlice';
import { Container } from '@mui/material';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilterValue);

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    const contactsLists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (contactsLists) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));
  };

  const handleDelete = contactName => {
    dispatch(deleteContact(contactName));
  };

  const handleChangeFilter = filter => {
    dispatch(onFilterChange(filter));
  };

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleAddContact} />
      <h2> Contacts</h2>
      <Filter filter={filter} handleChange={handleChangeFilter} />
      {isLoading && <p>Loading contacts ... </p>}
      {error && <p>{error}</p>}
      <ContactList
        contacts={contacts}
        filter={filter}
        handleDelete={handleDelete}
      />
    </Container>
  );
};
export default ContactsPage;
