import React from 'react';
import './Banner.css';

const Banner = (props) => {
  return <div className='banner-container banner-container--one u-pos-relative'>{props.children}</div>;
};

export default Banner;