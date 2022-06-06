import React from 'react';
// components
import Maker from './BannerContentWrapper/Maker';
import Header from './BannerContentWrapper/Header';
import Image from './BannerContentWrapper/Image';
import Div from '../../utils/Div';

export default function BannerContentWrapper({ urls }) {
  return (
    <Div divs={['o-container u-post-relative u-zi-10', 'o-row u-pos-relative']}>
      <Maker urls={urls} />
      <Header title='Westsum' subtitle='A little quote generator of Kanye West.' />
      <Image />
    </Div>
  );
}
