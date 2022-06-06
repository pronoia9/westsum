import { gsap } from 'gsap';
import { ExpoScaleEase, RoughEase, SlowMo } from 'gsap/EasePack';
import { CustomEase } from 'gsap/CustomEase';
import { CSSPlugin } from 'gsap';

export default function animation() {
  gsap.registerPlugin(CustomEase, ExpoScaleEase, RoughEase, SlowMo, CSSPlugin);

  var tl = gsap.timeline({ onComplete: function () { this.restart(); }, });

  gsap.set('#js-hero-kanye-two', { opacity: 0 });
  gsap.set('#js-hero-kanye-three', { opacity: 0 });
  gsap.set('#js-kanye-img-2', { opacity: 1, scale: 1.2, transformOrign: '100% 100%' });
  gsap.set('#js-kanye-img-3', { opacity: 1, scale: 1.2, transformOrign: '100% 100%' });

  tl.delay(2);

  tl.add([
    gsap.to('#js-kanye-img-1', { duration: 0.5, opacity: 0, ease: 'none' }),
    gsap.to('.js-input-bg', { duration: 0.5, backgroundColor: '#6C429B', ease: 'none' }),
    gsap.to('#js-hero-kanye-two', { duration: 1, opacity: 1, ease: 'none' }),
    gsap.to('#js-kanye-img-2', { duration: 5, scale: 1, ease: 'power1.out' }),
  ]);
  tl.add([
    gsap.to('#js-kanye-img-2', { duration: 0.5, opacity: 0, ease: 'none' }),
    gsap.to('.js-input-bg', { duration: 0.5, backgroundColor: '#930560', ease: 'none' }),
    gsap.to('#js-hero-kanye-three', { duration: 1, opacity: 1, ease: 'none' }),
    gsap.to('#js-kanye-img-1', { duration: 0.5, scale: 1.2, ease: 'none' }),
    gsap.to('#js-kanye-img-3', { duration: 5, scale: 1, ease: 'power1.out' }),
  ]);
  tl.add([
    gsap.to('#js-kanye-img-1', { duration: 0.5, opacity: 1, ease: 'none' }),
    gsap.to('#js-hero-kanye-three', { duration: 1, opacity: 0, ease: 'none' }),
    gsap.to('.js-input-bg', { duration: 0.5, backgroundColor: '#0551B4', ease: 'none' }),
    gsap.to('#js-hero-kanye-two', { duration: 0.5, opacity: 0, ease: 'none' }),
    gsap.to('#js-kanye-img-1', { duration: 5, scale: 1, ease: 'power1.out' }),
  ]);
}

// (function ($) {
//   'use strict';
//   var tl = new TimelineLite({ onComplete: function () { this.restart(); }, });
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