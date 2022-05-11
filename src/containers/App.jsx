import React, { Component } from 'react';
// components
import Banner from '../components/Banner';
import Form from '../components/Form';
import Content from '../components/Content';
// styles
import './App.css';

const fetchKanye = async function (number) {
  const data = [];
  while (data.length < number) {
    const response = await fetch('https://api.kanye.rest/');
    const value = await response.json();
    !data.includes(value) ? data.push(value) : data.push().flat();
  }
  return data;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [], // will contain the fetched quotes
      number: 0, // will be the number of quotes the user will choose to display
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    fetchKanye(5).then((data) => this.setState({ number: 5, quotes: data.map((q) => q.quote) }));
  }
  render() {
    return (
      <div className='app-container tx-smooth'>
        <Banner urls={['pronoia9.github.io/ztmtcwd-robofriends/', 'https://www.seanhalpin.design/work/jeffsum/']} />
        <Form onChange={this.onChange} onSubmit={this.onSubmit} number={this.state.number} />
        <Content quotes={this.state.quotes} />
      </div>
    );
  }

  // Other Functions
  onChange(e) {
    this.setState({ number: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    fetchKanye(this.state.number).then((data) => this.setState({ quotes: data.map((q) => q.quote) }));
  }
}

export default App;
