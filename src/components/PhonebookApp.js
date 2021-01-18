import React, { useState, useEffect } from 'react';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import PhonebookAppWrapper from './syledPhonebookApp';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', contact: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', contact: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', contact: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', contact: '227-91-26' },
  ],
  filter: '',
};

const PhonebookApp = () => {
  const [state, setState] = useState({ ...initialState });

  const getUser = person => {
    const { contacts } = state;

    if (contacts.some(elem => elem.name === person.name)) {
      alert(`${person.name} is already in contacts`);
      return;
    }
    if (!person.name.length) {
      alert('Please enter a name');
      return;
    }
    if (!person.contact.length) {
      alert('Please enter a number');
      return;
    }
    setState(prev => ({
      ...prev,
      contacts: [...prev.contacts, { ...person }],
    }));
  };

  const onHandleInputChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onHandleDeleteContact = e => {
    const id = e.target.dataset.id;
    setState(prev => ({
      ...prev,
      contacts: [...prev.contacts.filter(item => item.id !== id)],
    }));
  };
  useEffect(() => {
    console.log('componentDidMount');
    if (localStorage.getItem('contacts')) {
      const contactsFromLS = JSON.parse(localStorage.getItem('contacts'));
      contactsFromLS.length &&
        setState(prev => ({ ...prev, contacts: [...contactsFromLS] }));
    }
  }, []);

  useEffect(() => {
    console.log('componentDidUpdate');
    localStorage.setItem('contacts', JSON.stringify(state.contacts));
  }, [state.contacts]);

  return (
    <>
      <PhonebookAppWrapper>
        <h1 className="page-title">Phonebook</h1>
        <ContactForm getUser={getUser} />
        <h2 className="contacts-title">Contacts</h2>
        <Filter onChange={onHandleInputChange} filter={state.filter} />
        <ContactList
          contacts={state.contacts}
          filter={state.filter}
          onBtnClick={onHandleDeleteContact}
        />
      </PhonebookAppWrapper>
    </>
  );
};

export default PhonebookApp;
