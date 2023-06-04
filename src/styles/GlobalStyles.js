import { createGlobalStyle } from 'styled-components';

import { resetCSS } from './ResetCSS';

export const GlobalStyles = createGlobalStyle`
  ${resetCSS}

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

