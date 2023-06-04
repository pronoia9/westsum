import styled from 'styled-components';

import { heroImages } from '../utils/data';

export default function HeroImage({ imageRefs }) {
  return (
    <Container>
      {heroImages.map((image, index) => (
        <Image ref={(element) => imageRefs.current.push(element)} key={`image-${index}`} {...image} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 496px;
  height: 622px;
  background: #6fb9e0;
  position: absolute;
  bottom: 0;
  left: -30px;
  top: 0;
  z-index: 5;
  box-shadow: 0 48px 64px -24px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  opacity: 0.4;

  @media (min-width: 992px) {
    opacity: 1;
    top: 60px;
  }
`;

const Image = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
  opacity: 0;

  &:first-child {
    opacity: 1;
  }
`;
