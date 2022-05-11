import React from 'react';
import './Maker.css';

const Maker = ({ url1, url2 }) => {
  return (
    <div className='c-maker'>
      <p className='c-maker__text'>
        <a className='c-maker__link strike' href={url2} target='_blank' rel='noreferer'>He made this.</a>
        <span><a className='c-maker__link' href={url1} target='_blank' rel='noreferer'> I</a> made this?</span>
      </p>
    </div>
  );
};

export default Maker;
