import React from 'react';
import { gsap } from 'gsap';
import './Image.css';

export default function Image() {
  return (
    <div className='image-container'>
      <img src={require('../../../images/kanye_1.png')} className='u-width-12 js-kanye-img-1 u-zi-10' alt='Kanye YEAH' />
      <img src={require('../../../images/kanye_2.png')} className='u-width-12 js-kanye-img-1 u-zi-10' alt='Kanye YEAH' />
      <img src={require('../../../images/kanye_3.png')} className='u-width-12 js-kanye-img-1 u-zi-10' alt='Kanye YEAH' />
    </div>
  );
}

var t1 = gsap.timeline({
  onComplete: function () {
    this.restart();
  },
  // repeat: 2, repeatDelay: 1, yoyo: true
});

// TweenLite.set('.js-jeff-img-2', { scale: 1.2, transformOrign: '100% 100%' });
// TweenLite.set('.js-jeff-img-3', { scale: 1.2, transformOrign: '100% 100%' });

// tl.delay(2);

// tl.add([
//   TweenLite.to('.js-jeff-img-1', 0.5, { opacity: 0, ease: Power0.easeNone }),
//   TweenLite.to('.js-input-bg', 0.5, { backgroundColor: '#6C429B', ease: Power0.easeNone }),
//   TweenLite.to('.js-hero-jeff-two', 1, { opacity: 1, ease: Power0.easeNone }),
//   TweenLite.to('.js-jeff-img-2', 5, { scale: 1, ease: Power1.easeOut }),
// ]);
// tl.add([
//   TweenLite.to('.js-jeff-img-2', 0.5, { opacity: 0, ease: Power0.easeNone }),
//   TweenLite.to('.js-input-bg', 0.5, { backgroundColor: '#930560', ease: Power0.easeNone }),
//   TweenLite.to('.js-hero-jeff-three', 1, { opacity: 1, ease: Power0.easeNone }),
//   TweenLite.to('.js-jeff-img-1', 0.5, { scale: 1.2, ease: Power0.easeNone }),
//   TweenLite.to('.js-jeff-img-3', 5, { scale: 1, ease: Power1.easeOut }),
// ]);
// tl.add([
//   TweenLite.to('.js-jeff-img-1', 0.5, { opacity: 1, ease: Power0.easeNone }),
//   TweenLite.to('.js-hero-jeff-three', 1, { opacity: 0, ease: Power0.easeNone }),
//   TweenLite.to('.js-input-bg', 0.5, { backgroundColor: '#0551B4', ease: Power0.easeNone }),
//   TweenLite.to('.js-hero-jeff-two', 0.5, { opacity: 0, ease: Power0.easeNone }),
//   TweenLite.to('.js-jeff-img-1', 5, { scale: 1, ease: Power1.easeOut }),
// ]);
