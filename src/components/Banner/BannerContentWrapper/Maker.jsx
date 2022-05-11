import React from 'react';
import './Maker.css';

const Maker = ({ url }) => {
  return (
    <div className='maker'>
      <p className='maker__text'>
        <span>I made this?</span>
        <a className='maker__link' href={url} target='_blank' rel='noreferer'>He made this.</a>
      </p>
    </div>
  );
};

export default Maker;
