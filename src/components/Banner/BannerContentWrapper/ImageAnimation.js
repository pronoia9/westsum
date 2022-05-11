import { gsap } from 'gsap';
export default function animation() {
  var t1 = gsap.timeline({ repeat: -1 });

  gsap.set('.js-kanye-img-2', { scale: 1.2, transformOrigin: '100% 100%' });
  gsap.set('.js-kanye-img-3', { scale: 1.2, transformOrigin: '100% 100%' });

  t1.delay(2);
  t1.add([
    gsap.to('.js-kanye-img-1', 0.5, { opacity: 0, ease: 'power0.easeNone' }),
    gsap.to('.js-input-bg', 0.5, { backgroundColor: '#6C429B', ease: 'Power0.easeNone' }),
    gsap.to('.js-hero-kanye-two', 1, { opacity: 1, ease: 'Power0.easeNone' }),
    gsap.to('.js-kanye-img-2', 5, { scale: 1, ease: 'power1.easeOut' }),
  ]);
  t1.add([
    gsap.to('.js-kanye-img-2', 0.5, { opacity: 0, ease: 'power0.easeNone' }),
    gsap.to('.js-input-bg', 0.5, { backgroundColor: '#930560', ease: 'Power0.easeNone' }),
    gsap.to('.js-hero-kanye-three', 1, { opacity: 1, ease: 'Power0.easeNone' }),
    gsap.to('.js-kanye-img-1', 0.5, { scale: 1.2, ease: 'power0.easeNone' }),
    gsap.to('.js-kanye-img-3', 5, { scale: 1, ease: 'power1.easeOut' }),
  ]);
  t1.add([
    gsap.to('.js-kanye-img-1', 0.5, { opacity: 1, ease: 'power0.easeNone' }),
    gsap.to('.js-hero-kanye-three', 1, { opacity: 0, ease: 'Power0.easeNone' }),
    gsap.to('.js-input-bg', 0.5, { backgroundColor: '#0551B4', ease: 'Power0.easeNone' }),
    gsap.to('.js-hero-kanye-two', 0.5, { opacity: 0, ease: 'Power0.easeNone' }),
    gsap.to('.js-kanye-img-1', 5, { scale: 1, ease: 'power1.easeOut' }),
  ]);
}

// (function ($) {
//   'use strict';

//   var tl = new TimelineLite({
//     onComplete: function () {
//       this.restart();
//     },
//   });

//   TweenLite.set('.js-kanye-img-2', { scale: 1.2, transformOrign: '100% 100%' });
//   TweenLite.set('.js-kanye-img-3', { scale: 1.2, transformOrign: '100% 100%' });

//   tl.delay(2);

//   tl.add([
//     TweenLite.to('.js-kanye-img-1', 0.5, { opacity: 0, ease: Power0.easeNone }),
//     TweenLite.to('.js-input-bg', 0.5, { backgroundColor: '#6C429B', ease: Power0.easeNone }),
//     TweenLite.to('.js-hero-kanye-two', 1, { opacity: 1, ease: Power0.easeNone }),
//     TweenLite.to('.js-kanye-img-2', 5, { scale: 1, ease: Power1.easeOut }),
//   ]);
//   tl.add([
//     TweenLite.to('.js-kanye-img-2', 0.5, { opacity: 0, ease: Power0.easeNone }),
//     TweenLite.to('.js-input-bg', 0.5, { backgroundColor: '#930560', ease: Power0.easeNone }),
//     TweenLite.to('.js-hero-kanye-three', 1, { opacity: 1, ease: Power0.easeNone }),
//     TweenLite.to('.js-kanye-img-1', 0.5, { scale: 1.2, ease: Power0.easeNone }),
//     TweenLite.to('.js-kanye-img-3', 5, { scale: 1, ease: Power1.easeOut }),
//   ]);
//   tl.add([
//     TweenLite.to('.js-kanye-img-1', 0.5, { opacity: 1, ease: Power0.easeNone }),
//     TweenLite.to('.js-hero-kanye-three', 1, { opacity: 0, ease: Power0.easeNone }),
//     TweenLite.to('.js-input-bg', 0.5, { backgroundColor: '#0551B4', ease: Power0.easeNone }),
//     TweenLite.to('.js-hero-kanye-two', 0.5, { opacity: 0, ease: Power0.easeNone }),
//     TweenLite.to('.js-kanye-img-1', 5, { scale: 1, ease: Power1.easeOut }),
//   ]);
// })(jQuery);