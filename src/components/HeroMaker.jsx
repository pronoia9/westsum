import styled from "styled-components";

export default function HeroMaker() {
  return (
    <CMaker>
      <p>
        <span>I made this?</span>{' '}
        <a href='https://jeffsum.com/' target='_blank' rel='noreferrer'>
          He made this.
        </a>
      </p>
    </CMaker>
  );
}

const CMaker = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 1.5em;
  z-index: 100;

  p,
  a {
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