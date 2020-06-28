import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import FilterValue from '../Filter/FilterValue';
import findContactsItem from '../Filter/findContactsItem';
import filterContacts from '../Filter/filterContacts';
import { save, get } from '../../utils/localStorageMethods';
import {
  PhonebookBlock,
  PhonebookMainTitle,
  PhonebookTitle,
} from './Phonebook.styled';

const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const persistedContacts = get('contacts');
    if (persistedContacts) {
      setContacts(persistedContacts);
    }
  }, []);

  useEffect(() => {
    save('contacts', contacts);
  }, [contacts]);

  const changeFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const isValidContact = ({ name, number }) => {
    if (name.length <= 1 || name.trim() === 0) {
      alert(`Your name is not valid. Please enter correct information.`);
      return false;
    }
    if (!number) {
      alert(`Your number is not valid. Please enter correct information.`);
      return false;
    }
    return true;
  };

  const addContact = contact => {
    const contactToAdd = {
      ...contact,
      id: uuidv4(),
    };

    if (isValidContact(contact)) {
      const stateContact = findContactsItem(contacts, contact);
      if (stateContact) {
        alert(`${contact.name} is already in contacts.`);
        return;
      }

      setContacts([...contacts, contactToAdd]);
    }
  };

  const deleteContact = id => {
    const filtered = contacts.filter(contact => contact.id !== id);
    setContacts(filtered);
  };

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <PhonebookBlock>
      <PhonebookMainTitle>Phonebook</PhonebookMainTitle>
      <ContactForm onAddContact={addContact} />

      <PhonebookTitle>Contacts</PhonebookTitle>
      {contacts.length >= 2 && (
        <FilterValue value={filter} onChangeFilter={changeFilter} />
      )}
      <ContactList items={filteredContacts} onDeleteContact={deleteContact} />
    </PhonebookBlock>
  );
};

export default Phonebook;
