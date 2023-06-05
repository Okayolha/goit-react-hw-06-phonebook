import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/slice';
import { useState } from 'react';
import css from './Form.module.css';


export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.myContacts.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;

      case 'number':
        setNumber(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const contactExists = contacts.some(
    (contact) =>
      contact.name.toLowerCase() === name.toLowerCase() ||
      contact.number === number
  );

  if (contactExists) {
    alert(`${name} or number is already in contacts`);
    return;
  }

  dispatch(
    addContact({
      id: nanoid(),
      name: name,
      number: number,
    })
  );

  setName("");
  setNumber("");
};



  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="name" className={css.label}>
        Name
        <input
          id="name"
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="tel" className={css.label}>
        Phone
        <input
          id="tel"
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={inputChange}
        />
      </label>
      <button className={css.form__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

