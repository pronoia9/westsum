import React from 'react';

export default function Container({ children, divs, idx = 0 }) {
  return (
    <div className={divs[idx]}>{idx < divs.length - 1 ? <Container children={children} divs={divs} idx={idx + 1} /> : children}</div>
  );
}
