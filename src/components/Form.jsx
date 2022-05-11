import React from 'react';
import './Form.css';
import Div from './General/Div';

const Form = () => {
  return (
    <Div divs={['form-container', 'o-container', 'o-row', 'o-col-8@lg o-col-offset-4@lg']}>
      <form action='/' method='POST'>
        <Div divs={['o-flexy@lg o-flexy--top form__bar']}>
          <Div divs={['o-flexy__block form__block tx-center', 'o-inline']}>
            <Div divs={['o-inline__item u-mrg-r-1', 'c-input-static c-input-static--lg']}>Gimme like </Div>
            <Div divs={['o-inline__item u-mrg-r-1']}>
              <input
                className='c-input c-input-static--lg form-input__mini'
                name='numberOfQuotes'
                value='5'
                type='number'
                max='101'
                min='1'
              />
            </Div>
            <Div divs={['o-inline__item', 'c-input-static c-input-static--lg']}>quotes of that Kanye West.</Div>
          </Div>
          <input type='submit' value='Receive the West' className='o-flexy__item form__button js-input-bg generate-button' />
        </Div>
      </form>
    </Div>
  );
};

export default Form;
