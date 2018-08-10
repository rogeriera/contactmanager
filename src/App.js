import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="John Doe" email="jdoe@mail.com" phone="111-111-111" />
        <Contact
          name="Karen Williams"
          email="kwill@mail.com"
          phone="222-222-222"
        />
      </div>
    );
  }
}

export default App;
