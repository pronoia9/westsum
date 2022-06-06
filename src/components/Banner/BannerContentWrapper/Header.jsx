import React, { useEffect } from 'react';
import Typed from 'typed.js';
import Div from '../../../utils/Div';
import './Header.scss';

export default function Header({ title, subtitle }) {
  useEffect(() => {
    const typed = new Typed('#typed-strings', {
      strings: ['A little quote generator of Kanye West awesomeness.', subtitle],
      typeSpeed: 40,
      backSpeed: 50,
    });
    return () => typed.destroy(); // Destropying
  }, [subtitle]);

  return (
    <Div divs={['o-col-10 o-col-offset-1 o-col-9@lg o-col-offset-3@lg', 'c-hero__desc']}>
      <h1 className='animate__animated animate__lightSpeedInRight'>{title}</h1>
      <h2 id='typed-strings'>{/* eslint-disable-next-line jsx-a11y/heading-has-content */}</h2>
    </Div>
  );
}