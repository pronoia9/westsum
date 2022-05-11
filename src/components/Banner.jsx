import React from 'react';
// components
import './Banner/BannerContentWrapper';
// styles
import './Banner.css';
import BannerContentWrapper from './Banner/BannerContentWrapper';

const Banner = (props) => {
  return (
    <div className='c-hero c-hero--one u-pos-relative'>
      <BannerContentWrapper />
      <div className='c-hero__kanye c-hero__kanye--two js-hero-kanye-two'></div>
      <div className='c-hero__kanye c-hero__kanye--three js-hero-kanye-three'></div>
    </div>
  );
};

export default Banner;
