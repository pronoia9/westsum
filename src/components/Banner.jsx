import React from 'react';
// components
import './Banner/BannerContentWrapper';
// styles
import './Banner.scss';
import BannerContentWrapper from './Banner/BannerContentWrapper';

const Banner = ({ urls }) => {
  return (
    <div className='c-hero c-hero--one u-pos-relative'>
      <BannerContentWrapper urls={urls} />
      <div id='js-hero-kanye-two' className='c-hero__kanye c-hero__kanye--two'></div>
      <div id='js-hero-kanye-three' className='c-hero__kanye c-hero__kanye--three'></div>
    </div>
  );
};

export default Banner;
