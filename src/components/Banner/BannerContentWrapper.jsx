import React from 'react';
// components
import Maker from './BannerContentWrapper/Maker';
import Header from './BannerContentWrapper/Header';
// styles
import './BannerContentWrapper.css';

const BannerContentWrapper = () => {
  return (
    <div className='banner-content-wrapper u-post-relative u-zi-10'>
      <div className='o-row u-pos-relative'>
        <Maker url1='' url2='https://www.seanhalpin.design/work/jeffsum/' />
        {/* title/header */}
        <Header title='Westsum' subtitle='A little quote generator of Kanye West.' />
        {/* image */}
      </div>
    </div>
  );
};

export default BannerContentWrapper;
