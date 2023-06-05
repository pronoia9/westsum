import styled from 'styled-components';

import { HeroMaker, HeroTitle, HeroImage, HeroBackground } from './';

export default function Hero({ imageRefs, backgroundRefs, theme, setTheme }) {
  return (
    <>
      <CHero>
        <OContainer>
          <ORow>
            <HeroMaker theme={theme} setTheme={setTheme} />
            <HeroTitle />
            <HeroImage imageRefs={imageRefs} />
          </ORow>
        </OContainer>
        <HeroBackground backgroundRefs={backgroundRefs} />
      </CHero>
    </>
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
`;

const ORow = styled.div`
  position: relative !important;
  box-sizing: border-box;
  margin-left: -15px;
  margin-right: -15px;

  &::after {
    clear: both;
    content: '';
    display: table;
  }
`;
