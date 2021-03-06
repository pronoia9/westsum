import React from 'react';
import './Form.scss';
import Div from '../utils/Div';
import Input from './Form/Input';

const Form = ({ onChange, onSubmit, number }) => {
  return (
    <Div divs={['c-form', 'o-container', 'o-row', 'o-col-8@lg o-col-offset-4@lg']}>
      <form onSubmit={(e) => onSubmit(e)}>
        <Div divs={['o-flexy@lg o-flexy--top c-form__bar']}>
          <Div divs={['o-flexy__block c-form__block tx-center', 'o-inline']}>
            <Div divs={['o-inline__item u-mrg-r-1', 'c-input-static c-input-static--lg']}>Gimme like </Div>
            <Div divs={['o-inline__item u-mrg-r-1']}>
              <Input
                className='c-input c-input-static--lg c-input__mini'
                name='numberOfQuotes'
                value={number}
                type='number'
                max='101'
                min='1'
                onChange={(e) => onChange(e)}
              />
            </Div>
            <Div divs={['o-inline__item', 'c-input-static c-input-static--lg']}>quote{number > 1 ? 's' : ''} of that Kanye West.</Div>
          </Div>
          <Input type='submit' value='Receive the West' className='o-flexy__item c-form__button js-input-bg generate-button' />
        </Div>
      </form>
    </Div>
  );
};

export default Form;
