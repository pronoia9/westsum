import styled from 'styled-components';

export default function HeroBackground({ backgroundRefs }) {
  return (
    <>
      {[...Array(3)].map((d, index) => (
        <Background ref={(ref) => backgroundRefs.current.push(ref)} key={`background-${index}`} className={`bg-${index + 1}`} />
      ))}
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

  &.bg-1 {
    background-image: -webkit-linear-gradient(152deg, #61bfd9 16%, #0551b4 67%);
    background-image: -o-linear-gradient(152deg, #61bfd9 16%, #0551b4 67%);
    background-image: linear-gradient(242deg, #61bfd9 16%, #0551b4 67%);
  }

  &.bg-2 {
    opacity: 0;
    background-image: -webkit-linear-gradient(152deg, #15af88 16%, #6c429a 67%);
    background-image: -o-linear-gradient(152deg, #15af88 16%, #6c429a 67%);
    background-image: linear-gradient(242deg, #15af88 16%, #6c429a 67%);
  }

  &.bg-3 {
    opacity: 0;
    background-image: -webkit-linear-gradient(152deg, #eea031 18%, #930560 67%);
    background-image: -o-linear-gradient(152deg, #eea031 18%, #930560 67%);
    background-image: linear-gradient(242deg, #eea031 18%, #930560 67%);
  }
`;
