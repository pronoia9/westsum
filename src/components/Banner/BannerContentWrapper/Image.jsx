import React from 'react';
import './Image.css';
import './Image.js';

const Image = () => {
  return (
    <div className='image-container'>
      <img src={require('../../../images/kanye_1.png')} className='u-width-12 js-kanye-img-1 u-zi-10' alt='Kanye YEAH' />
    </div>
  );
};

export default Image;
