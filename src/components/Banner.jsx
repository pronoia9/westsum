import React from 'react';
// components
import './Banner/BannerContentWrapper';
// styles
import './Banner.css';

const Banner = (props) => {
  return <div className='banner-container banner-container--one u-pos-relative'>{props.children}</div>;
};

export default Banner;
