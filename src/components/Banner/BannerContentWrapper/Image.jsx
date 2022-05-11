import React from 'react';
import './Image.css';

const Image = () => {
  return (
    <div className='image-container'>
      <img src={require('../../../images/6.png')} className='u-width-12 js-jeff-img-1 u-zi-10' alt='Kanye YEAH' />
    </div>
  );
};

export default Image;
