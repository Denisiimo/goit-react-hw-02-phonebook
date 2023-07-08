import PropTypes from 'prop-types';

export const Filter = ({ filterContacts, filterValue }) => {
  return (
    <label>
      Filter:
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={filterContacts}
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};

Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};