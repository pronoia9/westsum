import React from 'react';
// components
import Maker from './BannerContentWrapper/Maker';
import Header from './BannerContentWrapper/Header';
import Image from './BannerContentWrapper/Image';

const BannerContentWrapper = () => {
  return (
    <div className='o-container u-post-relative u-zi-10'>
      <div className='o-row u-pos-relative'>
        <Maker url1='' url2='https://www.seanhalpin.design/work/jeffsum/' />
        <Header title='Westsum' subtitle='A little quote generator of Kanye West.' />
        <Image />
      </div>
    </div>
  );
};

export default BannerContentWrapper;
