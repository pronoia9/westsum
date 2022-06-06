import React from 'react';
import './Header.scss';
import Div from '../../../utils/Div';

export default function Header({ title, subtitle }) {
  return (
    <Div divs={['o-col-10 o-col-offset-1 o-col-9@lg o-col-offset-3@lg', 'c-hero__desc']}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </Div>
  );
}