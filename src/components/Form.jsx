import React from 'react';
import './Form.css';
import Container from './General/Container';

const Form = () => {
  return (
    <Container divs={['form-container', 'o-container', 'o-row', 'o-col-8@lg o-col-offset-4@lg']}>
      <form action='/' method='POST'>
        <Container divs={['o-flexy@lg o-flexy--top form__bar']}>
          <Container divs={['o-flexy__block form__block tx-center', 'o-inline']}>
            <Container divs={['o-inline__item u-mrg-r-1', 'c-input-static c-input-static--lg']}>Gimme like </Container>
            <Container divs={['o-inline__item u-mrg-r-1']}>
              <input
                class='c-input c-input-static--lg form-input__mini'
                name='numberOfQuotes'
                value='5'
                type='number'
                max='101'
                min='1'
              />
            </Container>
            <Container divs={['o-inline__item', 'c-input-static c-input-static--lg']}>quotes of that Kanye West.</Container>
          </Container>
          <input type='submit' className='o-flexy__item form__button js-input-bg generate-button' />
        </Container>
      </form>
    </Container>
  );
};

export default Form;
