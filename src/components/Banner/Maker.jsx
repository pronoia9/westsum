import React from 'react';
import './Maker.css';

const Maker = () => {
  return (
    <div className='maker'>
      <p className='maker__text'>
        <span>I made this?</span>
        <a className='maker__link' href='https://www.seanhalpin.design/work/jeffsum/' target='_blank' rel='noreferer'>
          He made this.
        </a>
      </p>
    </div>
  );
};

export default Maker;
