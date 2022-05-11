import React from 'react';
import './Image.css';

const Image = () => {
  return (
    <div className='image-container'>
      <img src={require('../../../images/1.jpg')} className='u-width-12 js-kanye-img-1 u-zi-10' alt='Kanye YEAH' />
    </div>
  );
};

export default Image;
