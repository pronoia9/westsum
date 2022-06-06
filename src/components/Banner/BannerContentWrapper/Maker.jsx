import React from 'react';
import './Maker.scss';

export default function Maker ({ urls }) {
  return (
    <div className='c-maker'>
      <p className='c-maker__text'>
        <a className='c-maker__link strike' href={urls[1]} target='_blank' rel='noreferrer'>He made this.</a>
        <span className='animate__animated animate__pulse animate__delay-2s'><a className='c-maker__link' href={urls[0]} target='_blank' rel='noreferrer'> I</a> made this?</span>
      </p>
    </div>
  );
};