import React, { Component } from 'react';
// components
import Banner from '../components/Banner';
import Form from '../components/Form';
// styles
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
  componentDidCatch() {
    console.log(`Component Did Catch`);
  }
  componentDidMount() {
    console.log(`Component Did Mount`);
  }
  componentDidUpdate() {
    console.log(`Component Did Update`);
  }
  componentWillUnmount() {
    console.log(`Component Will Unmount`);
  }
  render() {
    return (
      <div className='app-container tx-smooth'>
        <Banner />
        <Form onchange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    );
  }

  onChange (e)  {
    //
  }

  onSubmit(e) {
    console.log(e);
  }
}

export default App;
