import styled from 'styled-components';
import ThemeButton from './ThemeButton';

export default function HeroMaker({ theme, setTheme }) {
  return (
    <CMaker>
      <p>
        <span>I made this?</span>{' '}
        <a href='https://jeffsum.com/' target='_blank' rel='noreferrer'>
          He made this.
        </a>
      </p>
      <ThemeButton theme={theme} setTheme={setTheme} />
    </CMaker>
  );
}

const CMaker = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 1.5em;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  p,
  a {
    color: ${({ theme }) => theme.fontMaker};
    margin: 0;
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
