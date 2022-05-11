import React from 'react';
import Container from './Container';

const Form = () => {
  return (
    <Container divs={['form-container', 'o-container', 'o-row', 'o-col-8@lg o-col-offset-4@lg']}>
      <form action='/' method='POST'>
        <Container
          divs={['o-flexy@lg o-flexy--top form-container__bar', 'o-flexy__block form-container__block tx-center', 'o-inline']}>
          <Container divs={['o-inline__item u-mrg-r-1', 'c-input-static c-input-static--lg']}>Gimme like</Container>
          <Container divs={['o-inline__item u-mrg-r-1']}>
            <input
              class='c-input c-input-static--md form-input__mini'
              name='numberOfQuotes'
              value='5'
              type='number'
              max='101'
              min='1'></input>
          </Container>
          <Container divs={['o-inline__item', 'c-input-static c-input-static--lg']}>quotes of that Kanye West.</Container>
        </Container>
      </form>
    </Container>
  );
};

export default Form;
