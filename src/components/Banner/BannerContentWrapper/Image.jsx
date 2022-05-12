import React, { useEffect } from 'react';
import animation from './ImageAnimation';
import './Image.css';

export default function Image() {
  // wait until DOM has been rendered
  useEffect(() => {
    animation();
  });

  return (
    <div className='c-hero__image'>
      <img src={require('../../../images/kanye_1.png')} id='js-kanye-img-1' className='u-width-12 u-zi-10' alt='Kanye YEAH' />
      <img src={require('../../../images/kanye_2.png')} id='js-kanye-img-2' className='u-width-12 u-zi-5' alt='Kanye Again' />
      <img src={require('../../../images/kanye_3.png')} id='js-kanye-img-3' className='u-width-12 u-zi-1' alt={`It's all Kanye`} />
    </div>
  );
}
