import React from 'react';
import Div from './General/Div';
import Quote from './Content/Quote';
import './Content.css';

export default function Content({ quotes }) {
  return (
    <Div divs={['c-content', 'o-container', 'o-row', 'o-col-10 o-col-offset-1 o-col-8@md o-col-offset-2@md', 'generated-text']}>
      {quotes.map((q, i) => (
        <Quote key={i} quote={q} index={i} />
      ))}
    </Div>
  );
}
