import React from 'react';
import './Header.css';
import Div from '../../General/Div';

export default function Header({ title, subtitle }) {
  return (
    <Div divs={['o-col-10 o-col-offset-1 o-col-9@lg o-col-offset-3@lg', 'c-maker']}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </Div>
  );
}