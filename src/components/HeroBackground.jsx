import styled from 'styled-components';

export default function HeroBackground() {
  return (
    <>
      <Background className={`one`} />
    </>
  );
}

const Background = styled.div`
  pointer-events: none;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  &.one {
    background-image: -webkit-linear-gradient(152deg, #61bfd9 16%, #0551b4 67%);
    background-image: -o-linear-gradient(152deg, #61bfd9 16%, #0551b4 67%);
    background-image: linear-gradient(242deg, #61bfd9 16%, #0551b4 67%);
  }

  &.two {
    background-image: -webkit-linear-gradient(152deg, #15af88 16%, #6c429a 67%);
    background-image: -o-linear-gradient(152deg, #15af88 16%, #6c429a 67%);
    background-image: linear-gradient(242deg, #15af88 16%, #6c429a 67%);
  }

  &.three {
    background-image: -webkit-linear-gradient(152deg, #eea031 18%, #930560 67%);
    background-image: -o-linear-gradient(152deg, #eea031 18%, #930560 67%);
    background-image: linear-gradient(242deg, #eea031 18%, #930560 67%);
  }
`;
