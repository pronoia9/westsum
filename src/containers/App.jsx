import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [], // will contain the fetched quotes
      number: 0, // will be the number of quotes the user will choose to display
    };
  }
  render() {
    return <div className='tx-smooth'></div>;
  }
}

export default App;
