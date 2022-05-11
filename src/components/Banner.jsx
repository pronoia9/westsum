import React from 'react';
import './Banner.css';

const Banner = (props) => {
  return <div className='banner-container banner--one u-pos-relative'>{props.children}</div>;
};

export default Banner;