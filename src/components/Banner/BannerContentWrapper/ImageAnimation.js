import { gsap } from 'gsap';
// import { ExpoScaleEase, RoughEase, SlowMo } from 'gsap/EasePack';
// import { Flip } from 'gsap/Flip';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Observer } from 'gsap/Observer';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import { Draggable } from 'gsap/Draggable';
// import { EaselPlugin } from 'gsap/EaselPlugin';
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
// import { PixiPlugin } from 'gsap/PixiPlugin';
// import { TextPlugin } from 'gsap/TextPlugin';
// import { CustomEase } from 'gsap/CustomEase';

export default function animation() {
// gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, EaselPlugin, MotionPathPlugin, PixiPlugin, TextPlugin, CustomEase, ExpoScaleEase, RoughEase, SlowMo);

  var t1 = gsap.timeline({ repeat: -1, onComplete: function () { this.restart(); } });
  
  gsap.set('#js-hero-kanye-two', { opacity: 0 });
  gsap.set('#js-hero-kanye-three', { opacity: 0 });

  // gsap.set('#js-kanye-img-2', { scale: 1.2, transformOrign: '100% 100%' });
  // gsap.set('#js-kanye-img-3', { scale: 1.2, transformOrign: '100% 100%' });

  // t1.delay(2);

  // t1.add([
  //   gsap.to('#js-kanye-img-1', 0.5, { opacity: 0, ease: 'power0.easeNone' }),
  //   gsap.to('.js-input-bg', 0.5, { backgroundColor: '#6C429B', ease: 'power0.easeNone' }),
  //   gsap.to('#js-hero-kanye-two', 1, { opacity: 1, ease: 'power0.easeNone' }),
  //   gsap.to('#js-kanye-img-2', 5, { scale: 1, ease: 'power1.easeOut' }),
  // ]);
  // t1.add([
  //   gsap.to('#js-kanye-img-2', 0.5, { opacity: 0, ease: 'power0.easeNone' }),
  //   gsap.to('.js-input-bg', 0.5, { backgroundColor: '#930560', ease: 'power0.easeNone' }),
  //   gsap.to('#js-hero-kanye-three', 1, { opacity: 1, ease: 'power0.easeNone' }),
  //   gsap.to('#js-kanye-img-1', 0.5, { scale: 1.2, ease: 'power0.easeNone' }),
  //   gsap.to('#js-kanye-img-3', 5, { scale: 1, ease: 'power1.easeOut' }),
  // ]);
  // t1.add([
  //   gsap.to('#js-kanye-img-1', 0.5, { opacity: 1, ease: 'power0.easeNone' }),
  //   gsap.to('#js-hero-kanye-three', 1, { opacity: 0, ease: 'power0.easeNone' }),
  //   gsap.to('.js-input-bg', 0.5, { backgroundColor: '#0551B4', ease: 'power0.easeNone' }),
  //   gsap.to('#js-hero-kanye-two', 0.5, { opacity: 0, ease: 'power0.easeNone' }),
  //   gsap.to('#js-kanye-img-1', 5, { scale: 1, ease: 'power1.easeOut' }),
  // ]);
}
