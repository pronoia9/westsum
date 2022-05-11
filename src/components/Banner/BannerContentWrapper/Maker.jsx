import React from 'react';
import './Maker.css';

const Maker = ({ url1, url2 }) => {
  return (
    <div className='maker'>
      <p className='maker__text'>
        <a className='maker__link strike' href={url2} target='_blank' rel='noreferer'>He made this.</a>
        <span><a className='maker__link' href={url1} target='_blank' rel='noreferer'> I</a> made this?</span>
      </p>
    </div>
  );
};

export default Maker;
