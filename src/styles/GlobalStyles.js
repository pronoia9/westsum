import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.font};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

  a {
    background-color: transparent;
  }

  a:active, a:hover {
    outline-width: 0;
  }

  button, input {
    font: inherit;
    overflow: visible;
    margin: 0;
    line-height: inherit;
    border-radius: 0;
  }

  button {
    text-transform: none;
    cursor: pointer;
  }

  [disabled] {
    cursor: default;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
    outline: 1px dotted ButtonText;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  @media print {
    *, *::before, *::after, *::first-letter, *::first-line {
      text-shadow: none !important;
      box-shadow: none !important;
    }

    a, a:visited {
      text-decoration: underline;
    }

    img {
      page-break-inside: avoid;
    }

    p, h2, h3 {
      orphans: 3;
      widows: 3;
    }

    h2, h3 {
      page-break-after: avoid;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  @-ms-viewport {
    width: device-width;
  }


  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
  }
  a:not([href]):not([tabindex]):focus {
    outline: none;
  }

  img {
    vertical-align: middle;
  }

  a,
  button,
  input,
  textarea {
    touch-action: manipulation;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  [hidden] {
    display: none !important;
  }
`;
