import styled from 'styled-components';

import { HeroMaker, HeroBackground, HeroPortrait } from './';

export default function Hero() {
  return (
    <CHero>
      <OContainer>
        <ORow>
          <HeroMaker />

          {/* Gradient Background */}
          <OCol></OCol>

          {/* Portrait */}
          <CHeroImage></CHeroImage>
        </ORow>
      </OContainer>
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

const OCol = styled.div`
  width: 83.33333%;
  margin-left: 8.33333%;
`;

const CHeroImage = styled.div``;
