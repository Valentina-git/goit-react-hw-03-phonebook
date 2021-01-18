import React, { useState } from 'react';
import WrapperContactForm from './StyledConactForm';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  name: '',
  contact: '',
};

const ContactForm = ({ getUser }) => {
  const [person, setPerson] = useState({ ...initialState });

  const onHandleChange = event => {
    const { value, name } = event.target;
    setPerson({ ...person, [name]: value });
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    getUser({
      ...person,
      id: uuidv4(),
      name: person.name,
      contact: person.contact,
    });
  };

  return (
    <WrapperContactForm>
      <form onSubmit={onHandleSubmit}>
        <label className="form-label">
          Name:
          <input
            className="form-input"
            type="text"
            name="name"
            value={person.name}
            onChange={onHandleChange}
          />
        </label>
        <label className="form-label">
          Contact:
          <input
            className="form-input"
            type="text"
            name="contact"
            value={person.contact}
            onChange={onHandleChange}
          />
        </label>

        <button className="form-btn" type="submit">
          Add contact
        </button>
      </form>
    </WrapperContactForm>
  );
};

export default ContactForm;
