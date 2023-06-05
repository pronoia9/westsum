import styled from 'styled-components';

export default function HeroTitle() {
  return (
    <Container>
      <Wrapper>
        <h1>Westsum.</h1>
        <h2>A little quote generator of Kanye West...</h2>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 75%;
  margin-left: 20%;
  float: left;

  @media (min-width: 992px) {
    margin-left: 2.5%;
  }

  @media (min-width: 1024px) {
    margin-left: 10%;
  }

  @media (min-width: 1280px) {
    margin-left: 20%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 10;

  h1 {
    font-size: 70px;
    letter-spacing: -2px;
    /* color: #fff; */
    color: ${({ theme }) => theme.fontTitle};
    margin: 1.5em 0 0;
    font-weight: 600;
    text-align: right;
  }

  h2 {
    font-weight: 500;
    font-size: 24px;
    /* color: #fff; */
    color: ${({ theme }) => theme.fontTitle};
    margin: 0.3em 0 4em;
    text-align: right;
  }

  @media (min-width: 992px) {
    h1 {
      margin: 0.6em 0 0;
      text-align: left;
      font-size: 212px;
      letter-spacing: -6px;
    }

    h2 {
      /* color: #fff; */
      text-align: left;
      font-size: 39px;
      margin: 0 0 110px;
      letter-spacing: -1px;
      padding-left: 5.5em;
      opacity: 0.7;
    }
  }
`;