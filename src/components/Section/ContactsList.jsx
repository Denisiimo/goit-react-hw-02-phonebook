import PropTypes from 'prop-types';

export const ContactsList = ({ foundContact, deleteContact }) => {
  return (
    <ul>
      {foundContact.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>

            <button type="button" onClick={() => deleteContact(id)}>
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  foundContact: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};