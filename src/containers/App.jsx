import React, { useState, useEffect } from 'react';
// components
import Banner from '../components/Banner';
import Form from '../components/Form';
import Content from '../components/Content';
// styles
import './App.scss';

const fetchKanye = async function (number) {
  const data = [];
  while (data.length < number) {
    const response = await fetch('https://api.kanye.rest/');
    const value = await response.json();
    !data.includes(value) ? data.push(value) : data.push().flat();
  }
  return data;
};

export default function App() {
  // will contain the fetched quotes and the number of quotes the user will choose to display
  const [state, setState] = useState({ quotes: [], number: 0 });
  const { quotes, number } = state;
  useEffect(
    () => async () => {
      const data = await fetchKanye(5);
      setState((state) => ({ ...state, number: 5, quotes: data.map((q) => q.quote) }));
    },
    []
  );

  const onChange = (e) => setState((state) => ({ ...state, number: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    fetchKanye(number).then((data) => setState((state) => ({ ...state, quotes: data.map((q) => q.quote) })));
  };

  return (
    <div className='app-container tx-smooth'>
      <Banner urls={['https://pronoia9.github.io/westsum/', 'https://www.seanhalpin.design/work/jeffsum/']} />
      <Form onChange={onChange} onSubmit={onSubmit} number={number} />
      <Content quotes={quotes} />
    </div>
  );
}
