import React, { Component } from 'react';
import './App.css';

async function fetchKanye(array, number) {
  for (let i = 0; i < number; i++) {
    const response = await fetch('https://api.kanye.rest/');
    array.push(await response.json());
  }
  console.log(array);
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [], // will contain the fetched quotes
      number: 0, // will be the number of quotes the user will choose to display
    };
  }
  render() {
    return <div className='app-container u-pos-relative'></div>;
  }
}

export default App;
