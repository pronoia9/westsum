import React from 'react';
import Div from './General/Div';

export default function Content({ quotes }) {
  return (
    <Div divs={['c-content', 'o-container', 'o-row', 'o-col-10 o-col-offset-1 o-col-8@md o-col-offset-2@md', 'generated-text']}>
      {quotes.map(q => <p>q</p>)}
    </Div>
  );
}
