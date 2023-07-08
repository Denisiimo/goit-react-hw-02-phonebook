import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import { Component } from 'react';

export class Form extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  handleNameChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ id: nanoid(8), [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();

    const { addToContactList } = this.props;

    addToContactList(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleNameChange}
              autoComplete="off"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </label>

        <button type="submit">add to contacts</button>
      </form>
    );
  }
}

Form.propTypes = {
  addToContactList: PropTypes.func.isRequired,
};