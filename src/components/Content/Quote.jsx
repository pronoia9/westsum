import React from 'react';
import './Quote.scss';

export default function Quote({ quote, index }) {
  return (
    <div className='c-quotes'>
      {index === 0 ? <hr /> : null}
      <div className={`c-quote-group animate__animated animate__${index % 2 ? 'bounceInRight right' : 'bounceInLeft'} animate__delay-${index}s`}>
        <img src={require(`../../images/kanyemoji_${index.toString().charAt(index.toString().length - 1)}.png`)} alt='' />
        <div className='c-quote__container'>
          <blockquote>
            <p className='c-quote__quote'>{quote}</p>
          </blockquote>
          <cite>
            <span>Kanye West</span>
            <br />
            American rapper.
            <br />
            Also record producer, entrepreneur, and fashion designer.
          </cite>
        </div>
      </div>
      <hr />
    </div>
  );
}