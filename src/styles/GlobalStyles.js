import { createGlobalStyle } from 'styled-components';

import { resetCSS } from './ResetCSS';

export const GlobalStyles = createGlobalStyle`
  ${resetCSS}

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;

    -moz-osx-font-smoothing: antialiased !important;
    -webkit-font-smoothing: antialiased !important;  
  }
`;

