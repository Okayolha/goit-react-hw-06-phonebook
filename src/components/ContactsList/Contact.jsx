import css from './ContactsList.module.css';
import { deleteContact } from 'redux/store';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';


export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contact__item}>
      <p>
        {name}: {number}
      </p>
      <button
        className={css.contact__btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delet
      </button>
    </li>
  );
};

Contact.propTypes = {
   name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
