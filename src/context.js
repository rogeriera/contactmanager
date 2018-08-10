import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
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
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
