import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap';

export default function animation() {
  gsap.registerPlugin(CSSPlugin);

  var t1 = gsap.timeline({ repeat: -1 });

  gsap.set('#js-hero-kanye-two',    { opacity: 0 });
  gsap.set('#js-hero-kanye-three',  { opacity: 0 });
  gsap.set('#js-kanye-img-2',       { scale: 1.2, transformOrign: '100% 100%' });
  gsap.set('#js-kanye-img-3',       { scale: 1.2, transformOrign: '100% 100%' });

  t1.delay(2);

  t1.add([
    gsap.to('#js-kanye-img-1',      0.5,  { opacity: 0,                 ease: 'none' }),
    gsap.to('.js-input-bg',         0.5,  { backgroundColor: '#6C429B', ease: 'none' }),
    gsap.to('#js-hero-kanye-two',   1,    { opacity: 1,                 ease: 'none' }),
    gsap.to('#js-kanye-img-2',      5,    { scale: 1,                   ease: 'power1.easeOut' }),
  ]);
  t1.add([
    gsap.to('#js-kanye-img-2',      0.5,  { opacity: 0,                 ease: 'none' }),
    gsap.to('.js-input-bg',         0.5,  { backgroundColor: '#930560', ease: 'none' }),
    gsap.to('#js-hero-kanye-three', 1,    { opacity: 1,                 ease: 'none' }),
    gsap.to('#js-kanye-img-1',      0.5,  { scale: 1.2,                 ease: 'none' }),
    gsap.to('#js-kanye-img-3',      5,    { scale: 1,                   ease: 'power1.easeOut' }),
  ]);
  t1.add([
    gsap.to('#js-kanye-img-1',      0.5,  { opacity: 1,                 ease: 'none' }),
    gsap.to('#js-hero-kanye-three', 1,    { opacity: 0,                 ease: 'none' }),
    gsap.to('.js-input-bg',         0.5,  { backgroundColor: '#0551B4', ease: 'none' }),
    gsap.to('#js-hero-kanye-two',   0.5,  { opacity: 0,                 ease: 'none' }),
    gsap.to('#js-kanye-img-1',      5,    { scale: 1,                   ease: 'power1.easeOut' }),
  ]);
}
