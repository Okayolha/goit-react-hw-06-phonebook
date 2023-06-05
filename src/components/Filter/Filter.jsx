import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/store';

export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const contactsFilter = useSelector(state => state.myContacts.filter);

  const filterChange = e => {
    const newFilter = e.currentTarget.value;
    setFilter(newFilter);
    dispatch(filterContacts(newFilter));
  };

  return (
    <label>
      find contacts by name{' '}
      <input type="text" value={filter} onChange={filterChange} />
      <div>Current filter: {contactsFilter}</div>
    </label>
  );
};
