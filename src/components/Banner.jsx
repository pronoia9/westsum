import React from 'react';
// components
import './Banner/BannerContentWrapper';
// styles
import './Banner.css';
import BannerContentWrapper from './Banner/BannerContentWrapper';

const Banner = (props) => {
  return (
    <div className='banner-container banner-container--one u-pos-relative'>
      <BannerContentWrapper />
    </div>
  );
};

export default Banner;
