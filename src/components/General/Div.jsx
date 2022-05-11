import React from 'react';

export default function Div({ children, divs, idx = 0 }) {
  return <div className={divs[idx]}>{idx < divs.length - 1 ? <Div children={children} divs={divs} idx={idx + 1} /> : children}</div>;
}
