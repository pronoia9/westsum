import React from 'react';
// components
import Maker from './BannerContentWrapper/Maker';
import Header from './BannerContentWrapper/Header';
import Image from './BannerContentWrapper/Image';
import Div from '../General/Div';

export default function BannerContentWrapper({ urls }) {
  return (
    <Div divs={['o-container u-post-relative u-zi-10', 'o-row u-pos-relative']}>
      <Maker url1={urls[0]} url2={urls[1]} />
      <Header title='Westsum' subtitle='A little quote generator of Kanye West.' />
      <Image />
    </Div>
  );
}
