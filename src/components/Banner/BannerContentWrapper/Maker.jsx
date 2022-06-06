import React from 'react';
import './Maker.scss';

const Maker = ({ urls }) => {
  return (
    <div className='c-maker'>
      <p className='c-maker__text'>
        <a className='c-maker__link strike' href={urls[1]} target='_blank' rel='noreferrer'>He made this.</a>
        <span><a className='c-maker__link' href={urls[0]} target='_blank' rel='noreferrer'> I</a> made this?</span>
      </p>
    </div>
  );
};

export default Maker;
