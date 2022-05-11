import React from 'react';
// components
import Maker from './Maker';
// styles
import './BannerContentWrapper.css';

const BannerContentWrapper = () => {
  return (
    <div className='banner-content-wrapper u-post-relative u-zi-10'>
      <div className='o-row u-pos-relative'>
        <Maker url='https://www.seanhalpin.design/work/jeffsum/' />
        {/* title/header */}
        {/* image */}
      </div>
    </div>
  );
};

export default BannerContentWrapper;
