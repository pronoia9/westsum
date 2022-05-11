import React, { Component } from 'react';
// components
import Banner from '../components/Banner';
import Form from '../components/Form';
// styles
import './App.css';

const fetchKanye = async function (number) {
  const data = [];
  for (let i = 0; i < number; i++) {
    const response = await fetch('https://api.kanye.rest/');
    data.push(await response.json());
  }
  return data;
};
fetchKanye(3).then((data) => console.log(data.map((q) => q.quote)));

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
    this.setState({ number: 5 });
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
        <Form onChange={this.onChange} onSubmit={this.onSubmit} number={this.state.number} />
      </div>
    );
  }

  onChange(e) {
    this.setState({ number: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`onSubmit: ${e}`);
  }
}

export default App;
