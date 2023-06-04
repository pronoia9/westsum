import { createGlobalStyle } from 'styled-components';

import { JeffsumStyles } from './Jeffsum';

export const GlobalStyles = createGlobalStyle`
  ${JeffsumStyles}

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

