import React from 'react';
import './Header.css';

const Header = ({ title, subtitle }) => {
  return (
    <div className='o-col-10 o-col-offset-1 o-col-9@lg o-col-offset-3@lg'>
      <div className='c-maker'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
};

export default Header;