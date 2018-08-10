import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@mail.com',
        phone: '555-555-555'
      },
      {
        id: 2,
        name: 'Karen Williams',
        email: 'kwill@mail.com',
        phone: '222-222-222'
      },
      {
        id: 3,
        name: 'James Smith',
        email: 'james@mail.com',
        phone: '666-666-666'
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
