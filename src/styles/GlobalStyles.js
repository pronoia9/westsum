import { createGlobalStyle } from 'styled-components';

import { resetCSS } from './ResetCSS';

export const GlobalStyles = createGlobalStyle`
  ${resetCSS}

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  } 

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    -moz-osx-font-smoothing: antialiased !important;
    -webkit-font-smoothing: antialiased !important;  
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  progress {
    vertical-align: baseline;
  }

  template,
  [hidden] {
    display: none;
  }

  a {
    background-color: transparent;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: inherit;
  }

  b,
  strong {
    font-weight: bolder;
  }

  dfn {
    font-style: italic;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  mark {
    background-color: #ff0;
    color: #000;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  optgroup {
    font-weight: bold;
  }

  button,
  input,
  select {
    overflow: visible;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    cursor: pointer;
  }

  [disabled] {
    cursor: default;
  }

  button,
  html [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  button:-moz-focusring,
  input:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
  }

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
`;

