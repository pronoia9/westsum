import styled from 'styled-components';

import Portrait from './Portrait';

export default function Hero() {
  return (
    <CHero>
      <OContainer>
        <ORow>
          <CMaker>
            <p>
              <span>I made this?</span>{' '}
              <a href='https://jeffsum.com/' target='_blank' rel='noreferrer'>
                He made this.
              </a>
            </p>
          </CMaker>
          <OCol></OCol>
          <CHeroImage></CHeroImage>
        </ORow>
      </OContainer>
      <Portrait />
    </CHero>
  );
}

const CHero = styled.div`
  overflow: hidden;
  position: relative;

  @media (min-width: 992px) {
    overflow: visible;
  }
`;

const OContainer = styled.div`
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  padding-left: 15px;
  padding-right: 15px;

  /* &.fluid { max-width: 100%; }
  &.responsive { max-width: 100%; }
  @media (min-width: 544px) { &.responsive {  max-width: 576px; } }
  @media (min-width: 768px) { &.responsive { max-width: 720px; } } 
  @media (min-width: 992px) { &.responsive { max-width: 940px; } } */
`;

const ORow = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-left: -15px;
  margin-right: -15px;

  &::after {
    clear: both;
    content: '';
    display: table;
  }
`;

const CMaker = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 1.5em;
  z-index: 100;

  p, a {
    color: #fff;
  }

  span {
    opacity: 0.7;
  }

  a {
    text-decoration: none;
    position: relative;
    z-index: 10;
    text-decoration: line-through;
    opacity: 0.7;
    font-weight: 500;

    &:hover {
      text-decoration: none;
      opacity: 1;
    }
  }
`;

const OCol = styled.div``;

const CHeroImage = styled.div``;