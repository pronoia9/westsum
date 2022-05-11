import React from 'react';
import './Maker.css';

const Maker = ({ url1, url2 }) => {
  return (
    <div className='maker'>
      <p className='maker__text'>
        <span><a href={url1} target='_blank' rel='noreferer'>I</a> made this? </span>
        <a className='maker__link' href={url2} target='_blank' rel='noreferer'>He made this.</a>
      </p>
    </div>
  );
};

export default Maker;
