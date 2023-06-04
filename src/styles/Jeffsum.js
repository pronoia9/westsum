
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

import { css } from "styled-components";

export const JeffsumStyles = css`
  /*! normalize.css v4.0.0 | MIT License | github.com/necolas/normalize.css */
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
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

  @media print {
    *,
    *::before,
    *::after,
    *::first-letter,
    *::first-line {
      text-shadow: none !important;
      box-shadow: none !important;
    }
    a,
    a:visited {
      text-decoration: underline;
    }
    abbr[title]::after {
      content: ' (' attr(title) ')';
    }
    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }
    thead {
      display: table-header-group;
    }
    tr,
    img {
      page-break-inside: avoid;
    }
    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }
    h2,
    h3 {
      page-break-after: avoid;
    }
    .navbar {
      display: none;
    }
    .btn > .caret,
    .dropup > .btn > .caret {
      border-top-color: #000 !important;
    }
    .tag {
      border: 1px solid #000;
    }
    .table {
      border-collapse: collapse !important;
    }
    .table td,
    .table th {
      background-color: #fff !important;
    }
    .table-bordered th,
    .table-bordered td {
      border: 1px solid #ddd !important;
    }
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  @-ms-viewport {
    width: device-width;
  }

  html {
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
  }

  [tabindex='-1']:focus {
    outline: none !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  abbr[title],
  abbr[data-original-title] {
    cursor: help;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
  }
  a:not([href]):not([tabindex]):focus {
    outline: none;
  }

  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }

  figure {
    margin: 0 0 1rem;
  }

  img {
    vertical-align: middle;
  }

  [role='button'] {
    cursor: pointer;
  }

  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }

  table {
    border-collapse: collapse;
  }

  caption {
    text-align: left;
    caption-side: bottom;
  }

  th {
    text-align: left;
  }

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  input,
  button,
  select,
  textarea {
    margin: 0;
    line-height: inherit;
    border-radius: 0;
  }

  input[type='radio']:disabled,
  input[type='checkbox']:disabled {
    cursor: not-allowed;
  }

  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: listbox;
  }

  textarea {
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
  }

  input[type='search'] {
    -webkit-appearance: none;
  }

  [hidden] {
    display: none !important;
  }

  .c-button {
    -webkit-appearance: none;
    appearance: none;
    background-color: white;
    border-color: #c1cbd4;
    border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    box-shadow: none;
    box-sizing: border-box;
    color: #2a3b47;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    font-weight: normal;
    height: 36px;
    line-height: 34px;
    outline: none;
    padding: 0 1em;
    transition: none;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    -webkit-user-select: none;
    user-select: none;
  }
  .c-button:hover {
    background-color: #f9fafa;
    border-color: #c1cbd4;
    color: #2a3b47;
    text-decoration: none;
  }
  .c-button:active {
    background-color: #e3e8eb;
    border-color: #c1cbd4;
    color: #2a3b47;
  }
  .c-button:focus {
    border-color: #3197d6;
    box-shadow: none;
    color: #2a3b47;
  }
  .c-button:focus:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset;
  }
  .c-button:disabled,
  .c-button.is-disabled {
    background-color: white;
    border-color: #c1cbd4;
    text-decoration: none;
  }

  .c-button.is-disabled,
  .c-button[disabled] {
    cursor: not-allowed;
    opacity: 0.65;
  }
  .c-button.is-disabled:hover,
  .c-button.is-disabled:active,
  .c-button.is-disabled:focus,
  .c-button[disabled]:hover,
  .c-button[disabled]:active,
  .c-button[disabled]:focus {
    cursor: not-allowed;
    opacity: 0.65;
  }

  .c-button.is-selected {
    background-color: #e9edef;
  }
  .c-button.is-selected:hover {
    background-color: #e3e8eb;
  }
  .c-button.is-selected:active {
    background-color: #dde3e7;
  }

  .c-button.is-error {
    background-color: #e52f28;
    border-color: #cc1f19;
    color: #fff;
  }
  .c-button.is-error:hover {
    background-color: #de221b;
    border-color: #cc1f19;
    color: #fff;
  }
  .c-button.is-error:active {
    background-color: #cc1f19;
    border-color: #cc1f19;
  }
  .c-button.is-error:focus {
    border-color: #cc1f19;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4) inset;
  }
  .c-button.is-error:disabled,
  .c-button.is-error.is-disabled {
    background-color: #e52f28;
    border-color: #cc1f19;
  }

  .c-button.is-success {
    background-color: #4bc27d;
    border-color: #3aaa69;
    color: #fff;
  }
  .c-button.is-success:hover {
    background-color: #3fba73;
    border-color: #3aaa69;
    color: #fff;
  }
  .c-button.is-success:active {
    background-color: #3aaa69;
    border-color: #3aaa69;
  }
  .c-button.is-success:focus {
    border-color: #3aaa69;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4) inset;
  }
  .c-button.is-success:disabled,
  .c-button.is-success.is-disabled {
    background-color: #4bc27d;
    border-color: #3aaa69;
  }

  .c-button.is-warning {
    background-color: #ffc646;
    border-color: #ffb91d;
    color: #fff;
  }
  .c-button.is-warning:hover {
    background-color: #ffc032;
    border-color: #ffb91d;
    color: #fff;
  }
  .c-button.is-warning:active {
    background-color: #ffb91d;
    border-color: #ffb91d;
  }
  .c-button.is-warning:focus {
    border-color: #ffb91d;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4) inset;
  }
  .c-button.is-warning:disabled,
  .c-button.is-warning.is-disabled {
    background-color: #ffc646;
    border-color: #ffb91d;
  }

  .c-button--sm {
    font-size: 0.875rem;
    height: 28px;
    line-height: 26px;
    padding: 0 0.5em;
  }

  .c-button--md {
    font-size: 1rem;
    height: 36px;
    line-height: 34px;
    padding: 0 1em;
  }

  .c-button--lg {
    font-size: 1.25rem;
    height: 52px;
    line-height: 50px;
    padding: 0 1.5em;
  }

  .c-button--primary {
    background-color: #3197d6;
    border-color: #2581b9;
    color: white;
  }
  .c-button--primary:hover {
    background-color: #288cca;
    border-color: #2581b9;
    color: white;
  }
  .c-button--primary:active {
    background-color: #2581b9;
    border-color: #2581b9;
    color: white;
  }
  .c-button--primary:focus {
    border-color: #2581b9;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4) inset;
    color: white;
  }
  .c-button--primary:focus:active {
    color: white;
  }
  .c-button--primary:disabled,
  .c-button--primary.is-disabled {
    background-color: #3197d6;
    border-color: #2581b9;
  }

  .c-button--link {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    color: #3197d6;
  }
  .c-button--link:hover {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    text-decoration: underline;
    color: #3197d6;
  }
  .c-button--link:active {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    color: #3197d6;
  }
  .c-button--link:focus {
    border-color: transparent;
    box-shadow: none;
    text-decoration: underline;
    color: #3197d6;
  }
  .c-button--link:focus:active {
    box-shadow: none;
    color: #3197d6;
  }
  .c-button--link:disabled,
  .c-button--link.is-disabled {
    background-color: transparent;
    border-color: transparent;
    text-decoration: none;
  }
  .c-button--link.is-error {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    color: #cc1f19;
  }
  .c-button--link.is-error:hover {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    color: #cc1f19;
  }
  .c-button--link.is-error:active {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    color: #cc1f19;
  }
  .c-button--link.is-error:focus {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    color: #cc1f19;
  }
  .c-button--link.is-error:focus:active {
    box-shadow: none;
  }
  .c-button--link.is-error:disabled,
  .c-button--link.is-error.is-disabled {
    background-color: transparent;
    border-color: transparent;
  }
  .c-button--link.is-success {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    color: #3aaa69;
  }
  .c-button--link.is-success:hover {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    color: #3aaa69;
  }
  .c-button--link.is-success:active {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    color: #3aaa69;
  }
  .c-button--link.is-success:focus {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    color: #3aaa69;
  }
  .c-button--link.is-success:focus:active {
    box-shadow: none;
  }
  .c-button--link.is-success:disabled,
  .c-button--link.is-success.is-disabled {
    background-color: transparent;
    border-color: transparent;
  }
  .c-button--link.is-warning {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    color: #ffb91d;
  }
  .c-button--link.is-warning:hover {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    color: #ffb91d;
  }
  .c-button--link.is-warning:active {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    color: #ffb91d;
  }
  .c-button--link.is-warning:focus {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    color: #ffb91d;
  }
  .c-button--link.is-warning:focus:active {
    box-shadow: none;
  }
  .c-button--link.is-warning:disabled,
  .c-button--link.is-warning.is-disabled {
    background-color: transparent;
    border-color: transparent;
  }

  .c-button--block {
    display: block;
    width: 100%;
  }

  button.c-button {
    font-family: inherit;
    overflow: visible;
    outline: none;
  }
  button.c-button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button.c-button:-moz-focus-ring {
    outline: 1px dotted Buttontext;
  }
  button.c-button:focus {
    outline: none;
  }

  .o-control-group {
    box-sizing: border-box;
    display: flex;
    position: relative;
    vertical-align: middle;
  }
  .o-control-group > * {
    box-sizing: border-box;
    margin-top: 0;
    position: relative;
    width: auto;
  }
  .o-control-group > *:hover {
    z-index: 1;
  }
  .o-control-group > * + *:not(:first-child) {
    margin-left: -1px;
  }
  .o-control-group > *:first-child {
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .o-control-group > *:last-child {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }
  .o-control-group > *:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
  .o-control-group > *:only-child {
    border-radius: 3px;
  }
  .o-control-group > *:focus {
    z-index: 2;
  }
  .o-control-group--block > * {
    flex: 1;
  }
  .o-control-group--left {
    justify-content: flex-start;
  }
  .o-control-group--center {
    justify-content: center;
  }
  .o-control-group--right {
    justify-content: flex-end;
  }
  @media (min-width: 544px) {
    .o-control-group--left--sm {
      justify-content: flex-start;
    }
    .o-control-group--center--sm {
      justify-content: center;
    }
    .o-control-group--right--sm {
      justify-content: flex-end;
    }
  }
  @media (min-width: 768px) {
    .o-control-group--left--md {
      justify-content: flex-start;
    }
    .o-control-group--center--md {
      justify-content: center;
    }
    .o-control-group--right--md {
      justify-content: flex-end;
    }
  }
  @media (min-width: 992px) {
    .o-control-group--left--lg {
      justify-content: flex-start;
    }
    .o-control-group--center--lg {
      justify-content: center;
    }
    .o-control-group--right--lg {
      justify-content: flex-end;
    }
  }

  .o-control-group__block {
    box-sizing: border-box;
    flex: 1;
  }

  .u-d-initial {
    display: initial !important;
  }

  .u-d-none {
    display: none !important;
  }

  .u-d-block {
    display: block !important;
  }

  .u-d-inline {
    display: inline !important;
  }

  .u-d-inline-block {
    display: inline-block !important;
  }

  .u-d-flex {
    display: flex !important;
  }

  @media (min-width: 544px) {
    .u-d-initial--sm {
      display: initial !important;
    }
    .u-d-none--sm {
      display: none !important;
    }
    .u-d-block--sm {
      display: block !important;
    }
    .u-d-inline--sm {
      display: inline !important;
    }
    .u-d-inline-block--sm {
      display: inline-block !important;
    }
    .u-d-flex--sm {
      display: flex !important;
    }
  }

  @media (min-width: 768px) {
    .u-d-initial--md {
      display: initial !important;
    }
    .u-d-none--md {
      display: none !important;
    }
    .u-d-block--md {
      display: block !important;
    }
    .u-d-inline--md {
      display: inline !important;
    }
    .u-d-inline-block--md {
      display: inline-block !important;
    }
    .u-d-flex--md {
      display: flex !important;
    }
  }

  @media (min-width: 992px) {
    .u-d-initial--lg {
      display: initial !important;
    }
    .u-d-none--lg {
      display: none !important;
    }
    .u-d-block--lg {
      display: block !important;
    }
    .u-d-inline--lg {
      display: inline !important;
    }
    .u-d-inline-block--lg {
      display: inline-block !important;
    }
    .u-d-flex--lg {
      display: flex !important;
    }
  }

  .o-flexy {
    box-sizing: border-box;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 544px) {
    .o-flexy--sm {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
  }
  @media (min-width: 768px) {
    .o-flexy--md {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
  }
  @media (min-width: 992px) {
    .o-flexy--lg {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
  }

  .o-flexy--top {
    align-items: flex-start;
  }

  .o-flexy--middle {
    align-items: center;
  }

  .o-flexy--bottom {
    align-items: flex-end;
  }

  .o-flexy--stretch {
    align-items: stretch;
  }

  @media (min-width: 544px) {
    .o-flexy--top--sm {
      align-items: flex-start;
    }
    .o-flexy--middle--sm {
      align-items: center;
    }
    .o-flexy--bottom--sm {
      align-items: flex-end;
    }
    .o-flexy--stretch--sm {
      align-items: stretch;
    }
  }

  @media (min-width: 768px) {
    .o-flexy--top--md {
      align-items: flex-start;
    }
    .o-flexy--middle--md {
      align-items: center;
    }
    .o-flexy--bottom--md {
      align-items: flex-end;
    }
    .o-flexy--stretch--md {
      align-items: stretch;
    }
  }

  @media (min-width: 992px) {
    .o-flexy--top--lg {
      align-items: flex-start;
    }
    .o-flexy--middle--lg {
      align-items: center;
    }
    .o-flexy--bottom--lg {
      align-items: flex-end;
    }
    .o-flexy--stretch--lg {
      align-items: stretch;
    }
  }

  .o-flexy--gap-xs > * {
    margin-left: 4px;
  }
  .o-flexy--gap-xs > *:first-child {
    margin-left: 0;
  }

  .o-flexy--gap-sm > * {
    margin-left: 8px;
  }
  .o-flexy--gap-sm > *:first-child {
    margin-left: 0;
  }

  .o-flexy--gap-md > * {
    margin-left: 12px;
  }
  .o-flexy--gap-md > *:first-child {
    margin-left: 0;
  }

  .o-flexy--gap-lg > * {
    margin-left: 16px;
  }
  .o-flexy--gap-lg > *:first-child {
    margin-left: 0;
  }

  .o-flexy--gap-xl > * {
    margin-left: 20px;
  }
  .o-flexy--gap-xl > *:first-child {
    margin-left: 0;
  }

  @media (min-width: 544px) {
    .o-flexy--gap-xs--sm > * {
      margin-left: 4px;
    }
    .o-flexy--gap-xs--sm > *:first-child {
      margin-left: 0;
    }
    .o-flexy--gap-sm--sm > * {
      margin-left: 8px;
    }
    .o-flexy--gap-sm--sm > *:first-child {
      margin-left: 0;
    }
    .o-flexy--gap-md--sm > * {
      margin-left: 12px;
    }
    .o-flexy--gap-md--sm > *:first-child {
      margin-left: 0;
    }
    .o-flexy--gap-lg--sm > * {
      margin-left: 16px;
    }
    .o-flexy--gap-lg--sm > *:first-child {
      margin-left: 0;
    }
    .o-flexy--gap-xl--sm > * {
      margin-left: 20px;
    }
    .o-flexy--gap-xl--sm > *:first-child {
      margin-left: 0;
    }
  }

  @media (min-width: 768px) {
    .o-flexy--gap-xs--md > * {
      margin-left: 4px;
    }
    .o-flexy--gap-xs--md > *:first-child {
      margin-left: 0;
    }
    .o-flexy--gap-sm--md > * {
      margin-left: 8px;
    }
    .o-flexy--gap-sm--md > *:first-child {
      margin-left: 0;
    }
    .o-flexy--gap-md--md > * {
      margin-left: 12px;
    }
    .o-flexy--gap-md--md > *:first-child {
      margin-left: 0;
    }
    .o-flexy--gap-lg--md > * {
      margin-left: 16px;
    }
    .o-flexy--gap-lg--md > *:first-child {
      margin-left: 0;
    }
    .o-flexy--gap-xl--md > * {
      margin-left: 20px;
    }
    .o-flexy--gap-xl--md > *:first-child {
      margin-left: 0;
    }
  }

  @media (min-width: 992px) {
    .o-flexy--gap-xs--lg > * {
      margin-left: 4px;
    }
    .o-flexy--gap-xs--lg > *:first-child {
      margin-left: 0;
    }
    .o-flexy--gap-sm--lg > * {
      margin-left: 8px;
    }
    .o-flexy--gap-sm--lg > *:first-child {
      margin-left: 0;
    }
    .o-flexy--gap-md--lg > * {
      margin-left: 12px;
    }
    .o-flexy--gap-md--lg > *:first-child {
      margin-left: 0;
    }
    .o-flexy--gap-lg--lg > * {
      margin-left: 16px;
    }
    .o-flexy--gap-lg--lg > *:first-child {
      margin-left: 0;
    }
    .o-flexy--gap-xl--lg > * {
      margin-left: 20px;
    }
    .o-flexy--gap-xl--lg > *:first-child {
      margin-left: 0;
    }
  }

  .o-flexy--just-default {
    justify-content: space-between;
  }

  .o-flexy--just-left {
    justify-content: flex-start;
  }

  .o-flexy--just-center {
    justify-content: center;
  }

  .o-flexy--just-right {
    justify-content: flex-end;
  }

  @media (min-width: 544px) {
    .o-flexy--just-default--sm {
      justify-content: space-between;
    }
    .o-flexy--just-left--sm {
      justify-content: flex-start;
    }
    .o-flexy--just-center--sm {
      justify-content: center;
    }
    .o-flexy--just-right--sm {
      justify-content: flex-end;
    }
  }

  @media (min-width: 768px) {
    .o-flexy--just-default--md {
      justify-content: space-between;
    }
    .o-flexy--just-left--md {
      justify-content: flex-start;
    }
    .o-flexy--just-center--md {
      justify-content: center;
    }
    .o-flexy--just-right--md {
      justify-content: flex-end;
    }
  }

  @media (min-width: 992px) {
    .o-flexy--just-default--lg {
      justify-content: space-between;
    }
    .o-flexy--just-left--lg {
      justify-content: flex-start;
    }
    .o-flexy--just-center--lg {
      justify-content: center;
    }
    .o-flexy--just-right--lg {
      justify-content: flex-end;
    }
  }

  .o-flexy__block {
    box-sizing: border-box;
    max-width: 100%;
    min-width: 0;
    flex: 1;
  }
  @media (min-width: 544px) {
    .o-flexy__block--sm {
      flex: 1;
    }
  }
  @media (min-width: 768px) {
    .o-flexy__block--md {
      flex: 1;
    }
  }
  @media (min-width: 992px) {
    .o-flexy__block--lg {
      flex: 1;
    }
  }

  .o-flexy__inline-item {
    box-sizing: border-box;
    max-width: 100%;
  }

  .o-flexy__item {
    box-sizing: border-box;
    max-width: 100%;
    min-width: 0;
  }

  .c-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    border-color: #d5d5d5;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    display: inline-block;
    font-family: inherit;
    font-size: 100%;
    height: 36px;
    line-height: 34px;
    margin: 0;
    outline: none;
    padding: 0 8px;
    position: relative;
    vertical-align: middle;
    width: 100%;
  }
  .c-input:focus {
    border-color: #3197d6;
    outline: none;
  }

  .c-input--sm {
    height: 28px;
    line-height: 26px;
  }

  .c-input--md {
    height: 36px;
    line-height: 34px;
  }

  .c-input--lg {
    height: 52px;
    line-height: 50px;
  }

  .c-input.is-disabled,
  .c-input[disabled] {
    background-color: #e6e6e6;
    border-color: #d5d5d5;
    cursor: not-allowed;
  }
  .c-input.is-disabled:hover,
  .c-input.is-disabled:active,
  .c-input.is-disabled:focus,
  .c-input[disabled]:hover,
  .c-input[disabled]:active,
  .c-input[disabled]:focus {
    background-color: #e6e6e6;
    border-color: #d5d5d5;
    cursor: not-allowed;
  }

  .c-input[readonly],
  .c-input.is-readonly {
    background-color: #e6e6e6;
    border-color: #d5d5d5;
  }
  .c-input[readonly]:focus,
  .c-input.is-readonly:focus {
    border-color: #3197d6;
  }

  .c-input.is-error {
    border-color: #e52f28;
  }
  .c-input.is-error.is-disabled,
  .c-input.is-error[disabled] {
    border-color: #e52f28;
  }
  .c-input.is-error.is-disabled:hover,
  .c-input.is-error.is-disabled:active,
  .c-input.is-error.is-disabled:focus,
  .c-input.is-error[disabled]:hover,
  .c-input.is-error[disabled]:active,
  .c-input.is-error[disabled]:focus {
    border-color: #e52f28;
  }

  .c-input.is-success {
    border-color: #4bc27d;
  }
  .c-input.is-success.is-disabled,
  .c-input.is-success[disabled] {
    border-color: #4bc27d;
  }
  .c-input.is-success.is-disabled:hover,
  .c-input.is-success.is-disabled:active,
  .c-input.is-success.is-disabled:focus,
  .c-input.is-success[disabled]:hover,
  .c-input.is-success[disabled]:active,
  .c-input.is-success[disabled]:focus {
    border-color: #4bc27d;
  }

  .c-input.is-warning {
    border-color: #ffc646;
  }
  .c-input.is-warning.is-disabled,
  .c-input.is-warning[disabled] {
    border-color: #ffc646;
  }
  .c-input.is-warning.is-disabled:hover,
  .c-input.is-warning.is-disabled:active,
  .c-input.is-warning.is-disabled:focus,
  .c-input.is-warning[disabled]:hover,
  .c-input.is-warning[disabled]:active,
  .c-input.is-warning[disabled]:focus {
    border-color: #ffc646;
  }

  input[type='file'].c-input {
    border-color: transparent;
    cursor: pointer;
    line-height: 0;
    padding-bottom: 6px;
    padding-left: 0;
    padding-right: 0;
    padding-top: 6px;
    width: auto;
  }
  input[type='file'].c-input--sm {
    line-height: 0;
    padding-bottom: 2px;
    padding-top: 2px;
  }
  input[type='file'].c-input--md {
    line-height: 0;
    padding-bottom: 6px;
    padding-top: 6px;
  }
  input[type='file'].c-input--lg {
    line-height: 0;
    padding-bottom: 14px;
    padding-top: 14px;
  }

  select.c-input {
    -webkit-appearance: menulist;
    -moz-appearance: menulist;
    appearance: menu;
  }

  textarea.c-input {
    height: auto;
    line-height: inherit;
    overflow: auto;
    padding: 8px;
    vertical-align: top;
  }

  .c-form-group {
    border: none;
    box-sizing: border-box;
    display: block;
    margin-bottom: 20px;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
  }
  .c-form-group:last-child {
    margin-bottom: 0;
  }
  .c-form-group.is-error label {
    color: #9d1f1a;
  }
  .c-form-group.is-error .c-input {
    border-color: #e52f28;
  }
  .c-form-group.is-success label {
    color: #228350;
  }
  .c-form-group.is-success .c-input {
    border-color: #4bc27d;
  }
  .c-form-group.is-warning label {
    color: #b37100;
  }
  .c-form-group.is-warning .c-input {
    border-color: #ffc646;
  }

  .o-container {
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 1140px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .o-container--fluid {
    max-width: 100%;
  }

  .o-container--responsive {
    max-width: 100%;
  }
  @media (min-width: 544px) {
    .o-container--responsive {
      max-width: 576px;
    }
  }
  @media (min-width: 768px) {
    .o-container--responsive {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .o-container--responsive {
      max-width: 940px;
    }
  }

  [class*='o-col-'],
  .o-col {
    box-sizing: border-box;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    width: 100%;
  }

  .o-col-0 {
    width: 0%;
  }

  .o-col-1 {
    width: 8.33333%;
  }

  .o-col-2 {
    width: 16.66667%;
  }

  .o-col-3 {
    width: 25%;
  }

  .o-col-4 {
    width: 33.33333%;
  }

  .o-col-5 {
    width: 41.66667%;
  }

  .o-col-6 {
    width: 50%;
  }

  .o-col-7 {
    width: 58.33333%;
  }

  .o-col-8 {
    width: 66.66667%;
  }

  .o-col-9 {
    width: 75%;
  }

  .o-col-10 {
    width: 83.33333%;
  }

  .o-col-11 {
    width: 91.66667%;
  }

  .o-col-12 {
    width: 100%;
  }

  .o-col-20 {
    width: 20%;
  }

  .o-col-offset-1 {
    margin-left: 8.33333%;
  }

  .o-col-pull-1 {
    right: 8.33333%;
  }

  .o-col-push-1 {
    left: 8.33333%;
  }

  .o-col-offset-2 {
    margin-left: 16.66667%;
  }

  .o-col-pull-2 {
    right: 16.66667%;
  }

  .o-col-push-2 {
    left: 16.66667%;
  }

  .o-col-offset-3 {
    margin-left: 25%;
  }

  .o-col-pull-3 {
    right: 25%;
  }

  .o-col-push-3 {
    left: 25%;
  }

  .o-col-offset-4 {
    margin-left: 33.33333%;
  }

  .o-col-pull-4 {
    right: 33.33333%;
  }

  .o-col-push-4 {
    left: 33.33333%;
  }

  .o-col-offset-5 {
    margin-left: 41.66667%;
  }

  .o-col-pull-5 {
    right: 41.66667%;
  }

  .o-col-push-5 {
    left: 41.66667%;
  }

  .o-col-offset-6 {
    margin-left: 50%;
  }

  .o-col-pull-6 {
    right: 50%;
  }

  .o-col-push-6 {
    left: 50%;
  }

  .o-col-offset-7 {
    margin-left: 58.33333%;
  }

  .o-col-pull-7 {
    right: 58.33333%;
  }

  .o-col-push-7 {
    left: 58.33333%;
  }

  .o-col-offset-8 {
    margin-left: 66.66667%;
  }

  .o-col-pull-8 {
    right: 66.66667%;
  }

  .o-col-push-8 {
    left: 66.66667%;
  }

  .o-col-offset-9 {
    margin-left: 75%;
  }

  .o-col-pull-9 {
    right: 75%;
  }

  .o-col-push-9 {
    left: 75%;
  }

  .o-col-offset-10 {
    margin-left: 83.33333%;
  }

  .o-col-pull-10 {
    right: 83.33333%;
  }

  .o-col-push-10 {
    left: 83.33333%;
  }

  .o-col-offset-11 {
    margin-left: 91.66667%;
  }

  .o-col-pull-11 {
    right: 91.66667%;
  }

  .o-col-push-11 {
    left: 91.66667%;
  }

  .o-col-offset-12 {
    margin-left: 100%;
  }

  .o-col-pull-12 {
    right: 100%;
  }

  .o-col-push-12 {
    left: 100%;
  }

  .o-col-offset-20 {
    margin-left: 20%;
  }

  .o-col-pull-20 {
    right: 20%;
  }

  .o-col-push-20 {
    left: 20%;
  }

  @media (min-width: 544px) {
    .o-col-0--sm {
      width: 0%;
    }
    .o-col-1--sm {
      width: 8.33333%;
    }
    .o-col-2--sm {
      width: 16.66667%;
    }
    .o-col-3--sm {
      width: 25%;
    }
    .o-col-4--sm {
      width: 33.33333%;
    }
    .o-col-5--sm {
      width: 41.66667%;
    }
    .o-col-6--sm {
      width: 50%;
    }
    .o-col-7--sm {
      width: 58.33333%;
    }
    .o-col-8--sm {
      width: 66.66667%;
    }
    .o-col-9--sm {
      width: 75%;
    }
    .o-col-10--sm {
      width: 83.33333%;
    }
    .o-col-11--sm {
      width: 91.66667%;
    }
    .o-col-12--sm {
      width: 100%;
    }
    .o-col-20--sm {
      width: 20%;
    }
    .o-col-offset-0--sm {
      margin-left: 0%;
    }
    .o-col-pull-0--sm {
      right: auto;
    }
    .o-col-push-0--sm {
      left: auto;
    }
    .o-col-offset-1--sm {
      margin-left: 8.33333%;
    }
    .o-col-pull-1--sm {
      right: 8.33333%;
    }
    .o-col-push-1--sm {
      left: 8.33333%;
    }
    .o-col-offset-2--sm {
      margin-left: 16.66667%;
    }
    .o-col-pull-2--sm {
      right: 16.66667%;
    }
    .o-col-push-2--sm {
      left: 16.66667%;
    }
    .o-col-offset-3--sm {
      margin-left: 25%;
    }
    .o-col-pull-3--sm {
      right: 25%;
    }
    .o-col-push-3--sm {
      left: 25%;
    }
    .o-col-offset-4--sm {
      margin-left: 33.33333%;
    }
    .o-col-pull-4--sm {
      right: 33.33333%;
    }
    .o-col-push-4--sm {
      left: 33.33333%;
    }
    .o-col-offset-5--sm {
      margin-left: 41.66667%;
    }
    .o-col-pull-5--sm {
      right: 41.66667%;
    }
    .o-col-push-5--sm {
      left: 41.66667%;
    }
    .o-col-offset-6--sm {
      margin-left: 50%;
    }
    .o-col-pull-6--sm {
      right: 50%;
    }
    .o-col-push-6--sm {
      left: 50%;
    }
    .o-col-offset-7--sm {
      margin-left: 58.33333%;
    }
    .o-col-pull-7--sm {
      right: 58.33333%;
    }
    .o-col-push-7--sm {
      left: 58.33333%;
    }
    .o-col-offset-8--sm {
      margin-left: 66.66667%;
    }
    .o-col-pull-8--sm {
      right: 66.66667%;
    }
    .o-col-push-8--sm {
      left: 66.66667%;
    }
    .o-col-offset-9--sm {
      margin-left: 75%;
    }
    .o-col-pull-9--sm {
      right: 75%;
    }
    .o-col-push-9--sm {
      left: 75%;
    }
    .o-col-offset-10--sm {
      margin-left: 83.33333%;
    }
    .o-col-pull-10--sm {
      right: 83.33333%;
    }
    .o-col-push-10--sm {
      left: 83.33333%;
    }
    .o-col-offset-11--sm {
      margin-left: 91.66667%;
    }
    .o-col-pull-11--sm {
      right: 91.66667%;
    }
    .o-col-push-11--sm {
      left: 91.66667%;
    }
    .o-col-offset-12--sm {
      margin-left: 100%;
    }
    .o-col-pull-12--sm {
      right: 100%;
    }
    .o-col-push-12--sm {
      left: 100%;
    }
    .o-col-offset-20--sm {
      margin-left: 20%;
    }
    .o-col-pull-20--sm {
      right: 20%;
    }
    .o-col-push-20--sm {
      left: 20%;
    }
  }

  @media (min-width: 768px) {
    .o-col-0--md {
      width: 0%;
    }
    .o-col-1--md {
      width: 8.33333%;
    }
    .o-col-2--md {
      width: 16.66667%;
    }
    .o-col-3--md {
      width: 25%;
    }
    .o-col-4--md {
      width: 33.33333%;
    }
    .o-col-5--md {
      width: 41.66667%;
    }
    .o-col-6--md {
      width: 50%;
    }
    .o-col-7--md {
      width: 58.33333%;
    }
    .o-col-8--md {
      width: 66.66667%;
    }
    .o-col-9--md {
      width: 75%;
    }
    .o-col-10--md {
      width: 83.33333%;
    }
    .o-col-11--md {
      width: 91.66667%;
    }
    .o-col-12--md {
      width: 100%;
    }
    .o-col-20--md {
      width: 20%;
    }
    .o-col-offset-0--md {
      margin-left: 0%;
    }
    .o-col-pull-0--md {
      right: auto;
    }
    .o-col-push-0--md {
      left: auto;
    }
    .o-col-offset-1--md {
      margin-left: 8.33333%;
    }
    .o-col-pull-1--md {
      right: 8.33333%;
    }
    .o-col-push-1--md {
      left: 8.33333%;
    }
    .o-col-offset-2--md {
      margin-left: 16.66667%;
    }
    .o-col-pull-2--md {
      right: 16.66667%;
    }
    .o-col-push-2--md {
      left: 16.66667%;
    }
    .o-col-offset-3--md {
      margin-left: 25%;
    }
    .o-col-pull-3--md {
      right: 25%;
    }
    .o-col-push-3--md {
      left: 25%;
    }
    .o-col-offset-4--md {
      margin-left: 33.33333%;
    }
    .o-col-pull-4--md {
      right: 33.33333%;
    }
    .o-col-push-4--md {
      left: 33.33333%;
    }
    .o-col-offset-5--md {
      margin-left: 41.66667%;
    }
    .o-col-pull-5--md {
      right: 41.66667%;
    }
    .o-col-push-5--md {
      left: 41.66667%;
    }
    .o-col-offset-6--md {
      margin-left: 50%;
    }
    .o-col-pull-6--md {
      right: 50%;
    }
    .o-col-push-6--md {
      left: 50%;
    }
    .o-col-offset-7--md {
      margin-left: 58.33333%;
    }
    .o-col-pull-7--md {
      right: 58.33333%;
    }
    .o-col-push-7--md {
      left: 58.33333%;
    }
    .o-col-offset-8--md {
      margin-left: 66.66667%;
    }
    .o-col-pull-8--md {
      right: 66.66667%;
    }
    .o-col-push-8--md {
      left: 66.66667%;
    }
    .o-col-offset-9--md {
      margin-left: 75%;
    }
    .o-col-pull-9--md {
      right: 75%;
    }
    .o-col-push-9--md {
      left: 75%;
    }
    .o-col-offset-10--md {
      margin-left: 83.33333%;
    }
    .o-col-pull-10--md {
      right: 83.33333%;
    }
    .o-col-push-10--md {
      left: 83.33333%;
    }
    .o-col-offset-11--md {
      margin-left: 91.66667%;
    }
    .o-col-pull-11--md {
      right: 91.66667%;
    }
    .o-col-push-11--md {
      left: 91.66667%;
    }
    .o-col-offset-12--md {
      margin-left: 100%;
    }
    .o-col-pull-12--md {
      right: 100%;
    }
    .o-col-push-12--md {
      left: 100%;
    }
    .o-col-offset-20--md {
      margin-left: 20%;
    }
    .o-col-pull-20--md {
      right: 20%;
    }
    .o-col-push-20--md {
      left: 20%;
    }
  }

  @media (min-width: 992px) {
    .o-col-0--lg {
      width: 0%;
    }
    .o-col-1--lg {
      width: 8.33333%;
    }
    .o-col-2--lg {
      width: 16.66667%;
    }
    .o-col-3--lg {
      width: 25%;
    }
    .o-col-4--lg {
      width: 33.33333%;
    }
    .o-col-5--lg {
      width: 41.66667%;
    }
    .o-col-6--lg {
      width: 50%;
    }
    .o-col-7--lg {
      width: 58.33333%;
    }
    .o-col-8--lg {
      width: 66.66667%;
    }
    .o-col-9--lg {
      width: 75%;
    }
    .o-col-10--lg {
      width: 83.33333%;
    }
    .o-col-11--lg {
      width: 91.66667%;
    }
    .o-col-12--lg {
      width: 100%;
    }
    .o-col-20--lg {
      width: 20%;
    }
    .o-col-offset-0--lg {
      margin-left: 0%;
    }
    .o-col-pull-0--lg {
      right: auto;
    }
    .o-col-push-0--lg {
      left: auto;
    }
    .o-col-offset-1--lg {
      margin-left: 8.33333%;
    }
    .o-col-pull-1--lg {
      right: 8.33333%;
    }
    .o-col-push-1--lg {
      left: 8.33333%;
    }
    .o-col-offset-2--lg {
      margin-left: 16.66667%;
    }
    .o-col-pull-2--lg {
      right: 16.66667%;
    }
    .o-col-push-2--lg {
      left: 16.66667%;
    }
    .o-col-offset-3--lg {
      margin-left: 25%;
    }
    .o-col-pull-3--lg {
      right: 25%;
    }
    .o-col-push-3--lg {
      left: 25%;
    }
    .o-col-offset-4--lg {
      margin-left: 33.33333%;
    }
    .o-col-pull-4--lg {
      right: 33.33333%;
    }
    .o-col-push-4--lg {
      left: 33.33333%;
    }
    .o-col-offset-5--lg {
      margin-left: 41.66667%;
    }
    .o-col-pull-5--lg {
      right: 41.66667%;
    }
    .o-col-push-5--lg {
      left: 41.66667%;
    }
    .o-col-offset-6--lg {
      margin-left: 50%;
    }
    .o-col-pull-6--lg {
      right: 50%;
    }
    .o-col-push-6--lg {
      left: 50%;
    }
    .o-col-offset-7--lg {
      margin-left: 58.33333%;
    }
    .o-col-pull-7--lg {
      right: 58.33333%;
    }
    .o-col-push-7--lg {
      left: 58.33333%;
    }
    .o-col-offset-8--lg {
      margin-left: 66.66667%;
    }
    .o-col-pull-8--lg {
      right: 66.66667%;
    }
    .o-col-push-8--lg {
      left: 66.66667%;
    }
    .o-col-offset-9--lg {
      margin-left: 75%;
    }
    .o-col-pull-9--lg {
      right: 75%;
    }
    .o-col-push-9--lg {
      left: 75%;
    }
    .o-col-offset-10--lg {
      margin-left: 83.33333%;
    }
    .o-col-pull-10--lg {
      right: 83.33333%;
    }
    .o-col-push-10--lg {
      left: 83.33333%;
    }
    .o-col-offset-11--lg {
      margin-left: 91.66667%;
    }
    .o-col-pull-11--lg {
      right: 91.66667%;
    }
    .o-col-push-11--lg {
      left: 91.66667%;
    }
    .o-col-offset-12--lg {
      margin-left: 100%;
    }
    .o-col-pull-12--lg {
      right: 100%;
    }
    .o-col-push-12--lg {
      left: 100%;
    }
    .o-col-offset-20--lg {
      margin-left: 20%;
    }
    .o-col-pull-20--lg {
      right: 20%;
    }
    .o-col-push-20--lg {
      left: 20%;
    }
  }

  .o-row {
    box-sizing: border-box;
    margin-left: -15px;
    margin-right: -15px;
  }
  .o-row::after {
    clear: both;
    content: '';
    display: table;
  }
  .o-row > [class*='o-col'] {
    float: left;
  }
  .o-row--md {
    margin-left: -8px;
    margin-right: -8px;
  }
  .o-row--md > [class*='o-col'] {
    padding-left: 8px;
    padding-right: 8px;
  }
  .o-row--sm {
    margin-left: -4px;
    margin-right: -4px;
  }
  .o-row--sm > [class*='o-col'] {
    padding-left: 4px;
    padding-right: 4px;
  }
  .o-row--xs {
    margin-left: -2px;
    margin-right: -2px;
  }
  .o-row--xs > [class*='o-col'] {
    padding-left: 2px;
    padding-right: 2px;
  }

  .o-row-flex {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
  }
  .o-row-flex--md {
    margin-left: -8px;
    margin-right: -8px;
  }
  .o-row-flex--md > [class*='o-col'] {
    padding-left: 8px;
    padding-right: 8px;
  }
  .o-row-flex--sm {
    margin-left: -4px;
    margin-right: -4px;
  }
  .o-row-flex--sm > [class*='o-col'] {
    padding-left: 4px;
    padding-right: 4px;
  }
  .o-row-flex--xs {
    margin-left: -2px;
    margin-right: -2px;
  }
  .o-row-flex--xs > [class*='o-col'] {
    padding-left: 2px;
    padding-right: 2px;
  }

  .t-bg-black {
    background-color: #000 !important;
  }

  .t-bg-white {
    background-color: #fff !important;
  }

  .t-bg-blue-100 {
    background-color: #f7fcfe !important;
  }

  .t-bg-blue-200 {
    background-color: #daf1ff !important;
  }

  .t-bg-blue-300 {
    background-color: #aedfff !important;
  }

  .t-bg-blue-400 {
    background-color: #71bff1 !important;
  }

  .t-bg-blue-500 {
    background-color: #3197d6 !important;
  }

  .t-bg-blue-600 {
    background-color: #237ab3 !important;
  }

  .t-bg-blue-700 {
    background-color: #1f5e89 !important;
  }

  .t-bg-blue-800 {
    background-color: #194c6e !important;
  }

  .t-bg-blue-900 {
    background-color: #143d57 !important;
  }

  .t-bg-charcoal-200 {
    background-color: #93a1af !important;
  }

  .t-bg-charcoal-300 {
    background-color: #72808e !important;
  }

  .t-bg-charcoal-400 {
    background-color: #4f5d6b !important;
  }

  .t-bg-charcoal-500 {
    background-color: #394956 !important;
  }

  .t-bg-charcoal-600 {
    background-color: #2a3b47 !important;
  }

  .t-bg-charcoal-700 {
    background-color: #253540 !important;
  }

  .t-bg-charcoal-800 {
    background-color: #1d2b36 !important;
  }

  .t-bg-grey-200 {
    background-color: #f9fafa !important;
  }

  .t-bg-grey-300 {
    background-color: #f1f3f5 !important;
  }

  .t-bg-grey-400 {
    background-color: #e3e8eb !important;
  }

  .t-bg-grey-500 {
    background-color: #d6dde3 !important;
  }

  .t-bg-grey-600 {
    background-color: #c1cbd4 !important;
  }

  .t-bg-grey-700 {
    background-color: #b4c0ca !important;
  }

  .t-bg-grey-800 {
    background-color: #a5b2bd !important;
  }

  .t-bg-yellow-100 {
    background-color: #fffdf6 !important;
  }

  .t-bg-yellow-200 {
    background-color: #fff6e2 !important;
  }

  .t-bg-yellow-300 {
    background-color: #ffe8b5 !important;
  }

  .t-bg-yellow-400 {
    background-color: #ffd56d !important;
  }

  .t-bg-yellow-500 {
    background-color: #ffc646 !important;
  }

  .t-bg-yellow-600 {
    background-color: #f5b126 !important;
  }

  .t-bg-yellow-700 {
    background-color: #d79400 !important;
  }

  .t-bg-yellow-800 {
    background-color: #b37100 !important;
  }

  .t-bg-yellow-900 {
    background-color: #875200 !important;
  }

  .t-bg-green-100 {
    background-color: #fafdfb !important;
  }

  .t-bg-green-200 {
    background-color: #e4fbe6 !important;
  }

  .t-bg-green-300 {
    background-color: #c4f0ce !important;
  }

  .t-bg-green-400 {
    background-color: #81dc9e !important;
  }

  .t-bg-green-500 {
    background-color: #4bc27d !important;
  }

  .t-bg-green-600 {
    background-color: #3cb170 !important;
  }

  .t-bg-green-700 {
    background-color: #2f9f62 !important;
  }

  .t-bg-green-800 {
    background-color: #228350 !important;
  }

  .t-bg-green-900 {
    background-color: #23633e !important;
  }

  .t-bg-red-100 {
    background-color: #fef7f6 !important;
  }

  .t-bg-red-200 {
    background-color: #ffe3e2 !important;
  }

  .t-bg-red-300 {
    background-color: #ffa2a2 !important;
  }

  .t-bg-red-400 {
    background-color: #f45b55 !important;
  }

  .t-bg-red-500 {
    background-color: #e52f28 !important;
  }

  .t-bg-red-600 {
    background-color: #d21b14 !important;
  }

  .t-bg-red-700 {
    background-color: #ba1f19 !important;
  }

  .t-bg-red-800 {
    background-color: #9d1f1a !important;
  }

  .t-bg-red-900 {
    background-color: #731814 !important;
  }

  .t-bg-purple-100 {
    background-color: #fbfbfe !important;
  }

  .t-bg-purple-200 {
    background-color: #eaeafc !important;
  }

  .t-bg-purple-300 {
    background-color: #d1d2f6 !important;
  }

  .t-bg-purple-400 {
    background-color: #a3a4f3 !important;
  }

  .t-bg-purple-500 {
    background-color: #7e80e7 !important;
  }

  .t-bg-purple-600 {
    background-color: #696aca !important;
  }

  .t-bg-purple-700 {
    background-color: #585b9e !important;
  }

  .t-bg-purple-800 {
    background-color: #45467d !important;
  }

  .t-bg-purple-900 {
    background-color: #383966 !important;
  }

  .t-bg-orange-100 {
    background-color: #fff8f2 !important;
  }

  .t-bg-orange-200 {
    background-color: #ffead8 !important;
  }

  .t-bg-orange-300 {
    background-color: #ffd3ae !important;
  }

  .t-bg-orange-400 {
    background-color: #ffa75a !important;
  }

  .t-bg-orange-500 {
    background-color: #ff9139 !important;
  }

  .t-bg-orange-600 {
    background-color: #e87800 !important;
  }

  .t-bg-orange-700 {
    background-color: #c76400 !important;
  }

  .t-bg-orange-800 {
    background-color: #a45300 !important;
  }

  .t-bg-orange-900 {
    background-color: #813c00 !important;
  }

  .t-tx-black {
    color: #000 !important;
  }

  .t-tx-white {
    color: #fff !important;
  }

  .t-tx-blue-100 {
    color: #f7fcfe !important;
  }

  .t-tx-blue-200 {
    color: #daf1ff !important;
  }

  .t-tx-blue-300 {
    color: #aedfff !important;
  }

  .t-tx-blue-400 {
    color: #71bff1 !important;
  }

  .t-tx-blue-500 {
    color: #3197d6 !important;
  }

  .t-tx-blue-600 {
    color: #237ab3 !important;
  }

  .t-tx-blue-700 {
    color: #1f5e89 !important;
  }

  .t-tx-blue-800 {
    color: #194c6e !important;
  }

  .t-tx-blue-900 {
    color: #143d57 !important;
  }

  .t-tx-charcoal-200 {
    color: #93a1af !important;
  }

  .t-tx-charcoal-300 {
    color: #72808e !important;
  }

  .t-tx-charcoal-400 {
    color: #4f5d6b !important;
  }

  .t-tx-charcoal-500 {
    color: #394956 !important;
  }

  .t-tx-charcoal-600 {
    color: #2a3b47 !important;
  }

  .t-tx-charcoal-700 {
    color: #253540 !important;
  }

  .t-tx-charcoal-800 {
    color: #1d2b36 !important;
  }

  .t-tx-grey-200 {
    color: #f9fafa !important;
  }

  .t-tx-grey-300 {
    color: #f1f3f5 !important;
  }

  .t-tx-grey-400 {
    color: #e3e8eb !important;
  }

  .t-tx-grey-500 {
    color: #d6dde3 !important;
  }

  .t-tx-grey-600 {
    color: #c1cbd4 !important;
  }

  .t-tx-grey-700 {
    color: #b4c0ca !important;
  }

  .t-tx-grey-800 {
    color: #a5b2bd !important;
  }

  .t-tx-yellow-100 {
    color: #fffdf6 !important;
  }

  .t-tx-yellow-200 {
    color: #fff6e2 !important;
  }

  .t-tx-yellow-300 {
    color: #ffe8b5 !important;
  }

  .t-tx-yellow-400 {
    color: #ffd56d !important;
  }

  .t-tx-yellow-500 {
    color: #ffc646 !important;
  }

  .t-tx-yellow-600 {
    color: #f5b126 !important;
  }

  .t-tx-yellow-700 {
    color: #d79400 !important;
  }

  .t-tx-yellow-800 {
    color: #b37100 !important;
  }

  .t-tx-yellow-900 {
    color: #875200 !important;
  }

  .t-tx-green-100 {
    color: #fafdfb !important;
  }

  .t-tx-green-200 {
    color: #e4fbe6 !important;
  }

  .t-tx-green-300 {
    color: #c4f0ce !important;
  }

  .t-tx-green-400 {
    color: #81dc9e !important;
  }

  .t-tx-green-500 {
    color: #4bc27d !important;
  }

  .t-tx-green-600 {
    color: #3cb170 !important;
  }

  .t-tx-green-700 {
    color: #2f9f62 !important;
  }

  .t-tx-green-800 {
    color: #228350 !important;
  }

  .t-tx-green-900 {
    color: #23633e !important;
  }

  .t-tx-red-100 {
    color: #fef7f6 !important;
  }

  .t-tx-red-200 {
    color: #ffe3e2 !important;
  }

  .t-tx-red-300 {
    color: #ffa2a2 !important;
  }

  .t-tx-red-400 {
    color: #f45b55 !important;
  }

  .t-tx-red-500 {
    color: #e52f28 !important;
  }

  .t-tx-red-600 {
    color: #d21b14 !important;
  }

  .t-tx-red-700 {
    color: #ba1f19 !important;
  }

  .t-tx-red-800 {
    color: #9d1f1a !important;
  }

  .t-tx-red-900 {
    color: #731814 !important;
  }

  .t-tx-purple-100 {
    color: #fbfbfe !important;
  }

  .t-tx-purple-200 {
    color: #eaeafc !important;
  }

  .t-tx-purple-300 {
    color: #d1d2f6 !important;
  }

  .t-tx-purple-400 {
    color: #a3a4f3 !important;
  }

  .t-tx-purple-500 {
    color: #7e80e7 !important;
  }

  .t-tx-purple-600 {
    color: #696aca !important;
  }

  .t-tx-purple-700 {
    color: #585b9e !important;
  }

  .t-tx-purple-800 {
    color: #45467d !important;
  }

  .t-tx-purple-900 {
    color: #383966 !important;
  }

  .t-tx-orange-100 {
    color: #fff8f2 !important;
  }

  .t-tx-orange-200 {
    color: #ffead8 !important;
  }

  .t-tx-orange-300 {
    color: #ffd3ae !important;
  }

  .t-tx-orange-400 {
    color: #ffa75a !important;
  }

  .t-tx-orange-500 {
    color: #ff9139 !important;
  }

  .t-tx-orange-600 {
    color: #e87800 !important;
  }

  .t-tx-orange-700 {
    color: #c76400 !important;
  }

  .t-tx-orange-800 {
    color: #a45300 !important;
  }

  .t-tx-orange-900 {
    color: #813c00 !important;
  }

  .o-inline {
    box-sizing: border-box;
    display: block;
    list-style: none;
    margin-bottom: -4px;
    margin-left: 0;
    padding-left: 0;
  }
  .o-inline::after {
    box-sizing: border-box;
    content: ' ';
    clear: both;
    display: table;
  }
  .o-inline:last-child {
    margin-bottom: -4px;
  }
  .o-inline--xs {
    margin-bottom: -4px;
    margin-right: -4px;
  }
  .o-inline--xs:last-child {
    margin-bottom: -4px;
  }
  .o-inline--xs .o-inline__item {
    margin-bottom: 4px;
    margin-right: 4px;
  }
  .o-inline--sm {
    margin-bottom: -8px;
    margin-right: -8px;
  }
  .o-inline--sm:last-child {
    margin-bottom: -8px;
  }
  .o-inline--sm .o-inline__item {
    margin-bottom: 8px;
    margin-right: 8px;
  }
  .o-inline--md {
    margin-bottom: -16px;
    margin-right: -16px;
  }
  .o-inline--md:last-child {
    margin-bottom: -16px;
  }
  .o-inline--md .o-inline__item {
    margin-bottom: 16px;
    margin-right: 16px;
  }
  .o-inline--lg {
    margin-bottom: -24px;
    margin-right: -24px;
  }
  .o-inline--lg:last-child {
    margin-bottom: -24px;
  }
  .o-inline--lg .o-inline__item {
    margin-bottom: 24px;
    margin-right: 24px;
  }

  .o-inline__item {
    box-sizing: border-box;
    display: inline-block;
    margin: 0 0 4px;
    padding: 0;
    vertical-align: middle;
  }

  .c-input-addon {
    background-color: #f1f3f5;
    border-color: #d5d5d5;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    display: inline-block;
    height: 36px;
    line-height: 34px;
    padding: 0 0.5em;
    vertical-align: middle;
  }
  .c-input-addon--sm {
    height: 28px;
    line-height: 26px;
  }
  .c-input-addon--md {
    height: 36px;
    line-height: 34px;
  }
  .c-input-addon--lg {
    height: 52px;
    line-height: 50px;
  }

  .c-input-static {
    box-sizing: border-box;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    vertical-align: middle;
  }
  .c-input-static--sm {
    height: 28px;
    line-height: 28px;
  }
  .c-input-static--md {
    height: 36px;
    line-height: 36px;
  }
  .c-input-static--lg {
    height: 52px;
    line-height: 52px;
  }

  .u-pos-absolute {
    position: absolute !important;
  }

  .u-pos-fixed {
    position: fixed !important;
  }

  .u-pos-inherit {
    position: inherit !important;
  }

  .u-pos-initial {
    position: initial !important;
  }

  .u-pos-relative {
    position: relative !important;
  }

  .u-pos-static {
    position: static !important;
  }

  @media (min-width: 544px) {
    .u-pos-absolute--sm {
      position: absolute !important;
    }
    .u-pos-fixed--sm {
      position: fixed !important;
    }
    .u-pos-inherit--sm {
      position: inherit !important;
    }
    .u-pos-initial--sm {
      position: initial !important;
    }
    .u-pos-relative--sm {
      position: relative !important;
    }
    .u-pos-static--sm {
      position: static !important;
    }
  }

  @media (min-width: 768px) {
    .u-pos-absolute--md {
      position: absolute !important;
    }
    .u-pos-fixed--md {
      position: fixed !important;
    }
    .u-pos-inherit--md {
      position: inherit !important;
    }
    .u-pos-initial--md {
      position: initial !important;
    }
    .u-pos-relative--md {
      position: relative !important;
    }
    .u-pos-static--md {
      position: static !important;
    }
  }

  @media (min-width: 992px) {
    .u-pos-absolute--lg {
      position: absolute !important;
    }
    .u-pos-fixed--lg {
      position: fixed !important;
    }
    .u-pos-inherit--lg {
      position: inherit !important;
    }
    .u-pos-initial--lg {
      position: initial !important;
    }
    .u-pos-relative--lg {
      position: relative !important;
    }
    .u-pos-static--lg {
      position: static !important;
    }
  }

  .u-mrg-0 {
    margin: 0 !important;
  }

  .u-mrg-1 {
    margin: 4px !important;
  }

  .u-mrg-2 {
    margin: 8px !important;
  }

  .u-mrg-3 {
    margin: 12px !important;
  }

  .u-mrg-4 {
    margin: 16px !important;
  }

  .u-mrg-5 {
    margin: 20px !important;
  }

  .u-mrg-6 {
    margin: 24px !important;
  }

  .u-mrg-7 {
    margin: 28px !important;
  }

  .u-mrg-8 {
    margin: 32px !important;
  }

  .u-mrg-9 {
    margin: 36px !important;
  }

  .u-mrg-10 {
    margin: 40px !important;
  }

  .u-mrg-auto {
    margin: auto !important;
  }

  @media (min-width: 544px) {
    .u-mrg-0--sm {
      margin: 0 !important;
    }
    .u-mrg-1--sm {
      margin: 4px !important;
    }
    .u-mrg-2--sm {
      margin: 8px !important;
    }
    .u-mrg-3--sm {
      margin: 12px !important;
    }
    .u-mrg-4--sm {
      margin: 16px !important;
    }
    .u-mrg-5--sm {
      margin: 20px !important;
    }
    .u-mrg-6--sm {
      margin: 24px !important;
    }
    .u-mrg-7--sm {
      margin: 28px !important;
    }
    .u-mrg-8--sm {
      margin: 32px !important;
    }
    .u-mrg-9--sm {
      margin: 36px !important;
    }
    .u-mrg-10--sm {
      margin: 40px !important;
    }
    .u-mrg-auto--sm {
      margin: auto !important;
    }
  }

  @media (min-width: 768px) {
    .u-mrg-0--md {
      margin: 0 !important;
    }
    .u-mrg-1--md {
      margin: 4px !important;
    }
    .u-mrg-2--md {
      margin: 8px !important;
    }
    .u-mrg-3--md {
      margin: 12px !important;
    }
    .u-mrg-4--md {
      margin: 16px !important;
    }
    .u-mrg-5--md {
      margin: 20px !important;
    }
    .u-mrg-6--md {
      margin: 24px !important;
    }
    .u-mrg-7--md {
      margin: 28px !important;
    }
    .u-mrg-8--md {
      margin: 32px !important;
    }
    .u-mrg-9--md {
      margin: 36px !important;
    }
    .u-mrg-10--md {
      margin: 40px !important;
    }
    .u-mrg-auto--md {
      margin: auto !important;
    }
  }

  @media (min-width: 992px) {
    .u-mrg-0--lg {
      margin: 0 !important;
    }
    .u-mrg-1--lg {
      margin: 4px !important;
    }
    .u-mrg-2--lg {
      margin: 8px !important;
    }
    .u-mrg-3--lg {
      margin: 12px !important;
    }
    .u-mrg-4--lg {
      margin: 16px !important;
    }
    .u-mrg-5--lg {
      margin: 20px !important;
    }
    .u-mrg-6--lg {
      margin: 24px !important;
    }
    .u-mrg-7--lg {
      margin: 28px !important;
    }
    .u-mrg-8--lg {
      margin: 32px !important;
    }
    .u-mrg-9--lg {
      margin: 36px !important;
    }
    .u-mrg-10--lg {
      margin: 40px !important;
    }
    .u-mrg-auto--lg {
      margin: auto !important;
    }
  }

  .u-mrg-t-0 {
    margin-top: 0 !important;
  }

  .u-mrg-t-1 {
    margin-top: 4px !important;
  }

  .u-mrg-t-2 {
    margin-top: 8px !important;
  }

  .u-mrg-t-3 {
    margin-top: 12px !important;
  }

  .u-mrg-t-4 {
    margin-top: 16px !important;
  }

  .u-mrg-t-5 {
    margin-top: 20px !important;
  }

  .u-mrg-t-6 {
    margin-top: 24px !important;
  }

  .u-mrg-t-7 {
    margin-top: 28px !important;
  }

  .u-mrg-t-8 {
    margin-top: 32px !important;
  }

  .u-mrg-t-9 {
    margin-top: 36px !important;
  }

  .u-mrg-t-10 {
    margin-top: 40px !important;
  }

  .u-mrg-t-auto {
    margin-top: auto !important;
  }

  @media (min-width: 544px) {
    .u-mrg-t-0--sm {
      margin-top: 0 !important;
    }
    .u-mrg-t-1--sm {
      margin-top: 4px !important;
    }
    .u-mrg-t-2--sm {
      margin-top: 8px !important;
    }
    .u-mrg-t-3--sm {
      margin-top: 12px !important;
    }
    .u-mrg-t-4--sm {
      margin-top: 16px !important;
    }
    .u-mrg-t-5--sm {
      margin-top: 20px !important;
    }
    .u-mrg-t-6--sm {
      margin-top: 24px !important;
    }
    .u-mrg-t-7--sm {
      margin-top: 28px !important;
    }
    .u-mrg-t-8--sm {
      margin-top: 32px !important;
    }
    .u-mrg-t-9--sm {
      margin-top: 36px !important;
    }
    .u-mrg-t-10--sm {
      margin-top: 40px !important;
    }
    .u-mrg-t-auto--sm {
      margin-top: auto !important;
    }
  }

  @media (min-width: 768px) {
    .u-mrg-t-0--md {
      margin-top: 0 !important;
    }
    .u-mrg-t-1--md {
      margin-top: 4px !important;
    }
    .u-mrg-t-2--md {
      margin-top: 8px !important;
    }
    .u-mrg-t-3--md {
      margin-top: 12px !important;
    }
    .u-mrg-t-4--md {
      margin-top: 16px !important;
    }
    .u-mrg-t-5--md {
      margin-top: 20px !important;
    }
    .u-mrg-t-6--md {
      margin-top: 24px !important;
    }
    .u-mrg-t-7--md {
      margin-top: 28px !important;
    }
    .u-mrg-t-8--md {
      margin-top: 32px !important;
    }
    .u-mrg-t-9--md {
      margin-top: 36px !important;
    }
    .u-mrg-t-10--md {
      margin-top: 40px !important;
    }
    .u-mrg-t-auto--md {
      margin-top: auto !important;
    }
  }

  @media (min-width: 992px) {
    .u-mrg-t-0--lg {
      margin-top: 0 !important;
    }
    .u-mrg-t-1--lg {
      margin-top: 4px !important;
    }
    .u-mrg-t-2--lg {
      margin-top: 8px !important;
    }
    .u-mrg-t-3--lg {
      margin-top: 12px !important;
    }
    .u-mrg-t-4--lg {
      margin-top: 16px !important;
    }
    .u-mrg-t-5--lg {
      margin-top: 20px !important;
    }
    .u-mrg-t-6--lg {
      margin-top: 24px !important;
    }
    .u-mrg-t-7--lg {
      margin-top: 28px !important;
    }
    .u-mrg-t-8--lg {
      margin-top: 32px !important;
    }
    .u-mrg-t-9--lg {
      margin-top: 36px !important;
    }
    .u-mrg-t-10--lg {
      margin-top: 40px !important;
    }
    .u-mrg-t-auto--lg {
      margin-top: auto !important;
    }
  }

  .u-mrg-r-0 {
    margin-right: 0 !important;
  }

  .u-mrg-r-1 {
    margin-right: 4px !important;
  }

  .u-mrg-r-2 {
    margin-right: 8px !important;
  }

  .u-mrg-r-3 {
    margin-right: 12px !important;
  }

  .u-mrg-r-4 {
    margin-right: 16px !important;
  }

  .u-mrg-r-5 {
    margin-right: 20px !important;
  }

  .u-mrg-r-6 {
    margin-right: 24px !important;
  }

  .u-mrg-r-7 {
    margin-right: 28px !important;
  }

  .u-mrg-r-8 {
    margin-right: 32px !important;
  }

  .u-mrg-r-9 {
    margin-right: 36px !important;
  }

  .u-mrg-r-10 {
    margin-right: 40px !important;
  }

  .u-mrg-r-auto {
    margin-right: auto !important;
  }

  @media (min-width: 544px) {
    .u-mrg-r-0--sm {
      margin-right: 0 !important;
    }
    .u-mrg-r-1--sm {
      margin-right: 4px !important;
    }
    .u-mrg-r-2--sm {
      margin-right: 8px !important;
    }
    .u-mrg-r-3--sm {
      margin-right: 12px !important;
    }
    .u-mrg-r-4--sm {
      margin-right: 16px !important;
    }
    .u-mrg-r-5--sm {
      margin-right: 20px !important;
    }
    .u-mrg-r-6--sm {
      margin-right: 24px !important;
    }
    .u-mrg-r-7--sm {
      margin-right: 28px !important;
    }
    .u-mrg-r-8--sm {
      margin-right: 32px !important;
    }
    .u-mrg-r-9--sm {
      margin-right: 36px !important;
    }
    .u-mrg-r-10--sm {
      margin-right: 40px !important;
    }
    .u-mrg-r-auto--sm {
      margin-right: auto !important;
    }
  }

  @media (min-width: 768px) {
    .u-mrg-r-0--md {
      margin-right: 0 !important;
    }
    .u-mrg-r-1--md {
      margin-right: 4px !important;
    }
    .u-mrg-r-2--md {
      margin-right: 8px !important;
    }
    .u-mrg-r-3--md {
      margin-right: 12px !important;
    }
    .u-mrg-r-4--md {
      margin-right: 16px !important;
    }
    .u-mrg-r-5--md {
      margin-right: 20px !important;
    }
    .u-mrg-r-6--md {
      margin-right: 24px !important;
    }
    .u-mrg-r-7--md {
      margin-right: 28px !important;
    }
    .u-mrg-r-8--md {
      margin-right: 32px !important;
    }
    .u-mrg-r-9--md {
      margin-right: 36px !important;
    }
    .u-mrg-r-10--md {
      margin-right: 40px !important;
    }
    .u-mrg-r-auto--md {
      margin-right: auto !important;
    }
  }

  @media (min-width: 992px) {
    .u-mrg-r-0--lg {
      margin-right: 0 !important;
    }
    .u-mrg-r-1--lg {
      margin-right: 4px !important;
    }
    .u-mrg-r-2--lg {
      margin-right: 8px !important;
    }
    .u-mrg-r-3--lg {
      margin-right: 12px !important;
    }
    .u-mrg-r-4--lg {
      margin-right: 16px !important;
    }
    .u-mrg-r-5--lg {
      margin-right: 20px !important;
    }
    .u-mrg-r-6--lg {
      margin-right: 24px !important;
    }
    .u-mrg-r-7--lg {
      margin-right: 28px !important;
    }
    .u-mrg-r-8--lg {
      margin-right: 32px !important;
    }
    .u-mrg-r-9--lg {
      margin-right: 36px !important;
    }
    .u-mrg-r-10--lg {
      margin-right: 40px !important;
    }
    .u-mrg-r-auto--lg {
      margin-right: auto !important;
    }
  }

  .u-mrg-b-0 {
    margin-bottom: 0 !important;
  }

  .u-mrg-b-1 {
    margin-bottom: 4px !important;
  }

  .u-mrg-b-2 {
    margin-bottom: 8px !important;
  }

  .u-mrg-b-3 {
    margin-bottom: 12px !important;
  }

  .u-mrg-b-4 {
    margin-bottom: 16px !important;
  }

  .u-mrg-b-5 {
    margin-bottom: 20px !important;
  }

  .u-mrg-b-6 {
    margin-bottom: 24px !important;
  }

  .u-mrg-b-7 {
    margin-bottom: 28px !important;
  }

  .u-mrg-b-8 {
    margin-bottom: 32px !important;
  }

  .u-mrg-b-9 {
    margin-bottom: 36px !important;
  }

  .u-mrg-b-10 {
    margin-bottom: 40px !important;
  }

  .u-mrg-b-auto {
    margin-bottom: auto !important;
  }

  @media (min-width: 544px) {
    .u-mrg-b-0--sm {
      margin-bottom: 0 !important;
    }
    .u-mrg-b-1--sm {
      margin-bottom: 4px !important;
    }
    .u-mrg-b-2--sm {
      margin-bottom: 8px !important;
    }
    .u-mrg-b-3--sm {
      margin-bottom: 12px !important;
    }
    .u-mrg-b-4--sm {
      margin-bottom: 16px !important;
    }
    .u-mrg-b-5--sm {
      margin-bottom: 20px !important;
    }
    .u-mrg-b-6--sm {
      margin-bottom: 24px !important;
    }
    .u-mrg-b-7--sm {
      margin-bottom: 28px !important;
    }
    .u-mrg-b-8--sm {
      margin-bottom: 32px !important;
    }
    .u-mrg-b-9--sm {
      margin-bottom: 36px !important;
    }
    .u-mrg-b-10--sm {
      margin-bottom: 40px !important;
    }
    .u-mrg-b-auto--sm {
      margin-bottom: auto !important;
    }
  }

  @media (min-width: 768px) {
    .u-mrg-b-0--md {
      margin-bottom: 0 !important;
    }
    .u-mrg-b-1--md {
      margin-bottom: 4px !important;
    }
    .u-mrg-b-2--md {
      margin-bottom: 8px !important;
    }
    .u-mrg-b-3--md {
      margin-bottom: 12px !important;
    }
    .u-mrg-b-4--md {
      margin-bottom: 16px !important;
    }
    .u-mrg-b-5--md {
      margin-bottom: 20px !important;
    }
    .u-mrg-b-6--md {
      margin-bottom: 24px !important;
    }
    .u-mrg-b-7--md {
      margin-bottom: 28px !important;
    }
    .u-mrg-b-8--md {
      margin-bottom: 32px !important;
    }
    .u-mrg-b-9--md {
      margin-bottom: 36px !important;
    }
    .u-mrg-b-10--md {
      margin-bottom: 40px !important;
    }
    .u-mrg-b-auto--md {
      margin-bottom: auto !important;
    }
  }

  @media (min-width: 992px) {
    .u-mrg-b-0--lg {
      margin-bottom: 0 !important;
    }
    .u-mrg-b-1--lg {
      margin-bottom: 4px !important;
    }
    .u-mrg-b-2--lg {
      margin-bottom: 8px !important;
    }
    .u-mrg-b-3--lg {
      margin-bottom: 12px !important;
    }
    .u-mrg-b-4--lg {
      margin-bottom: 16px !important;
    }
    .u-mrg-b-5--lg {
      margin-bottom: 20px !important;
    }
    .u-mrg-b-6--lg {
      margin-bottom: 24px !important;
    }
    .u-mrg-b-7--lg {
      margin-bottom: 28px !important;
    }
    .u-mrg-b-8--lg {
      margin-bottom: 32px !important;
    }
    .u-mrg-b-9--lg {
      margin-bottom: 36px !important;
    }
    .u-mrg-b-10--lg {
      margin-bottom: 40px !important;
    }
    .u-mrg-b-auto--lg {
      margin-bottom: auto !important;
    }
  }

  .u-mrg-l-0 {
    margin-left: 0 !important;
  }

  .u-mrg-l-1 {
    margin-left: 4px !important;
  }

  .u-mrg-l-2 {
    margin-left: 8px !important;
  }

  .u-mrg-l-3 {
    margin-left: 12px !important;
  }

  .u-mrg-l-4 {
    margin-left: 16px !important;
  }

  .u-mrg-l-5 {
    margin-left: 20px !important;
  }

  .u-mrg-l-6 {
    margin-left: 24px !important;
  }

  .u-mrg-l-7 {
    margin-left: 28px !important;
  }

  .u-mrg-l-8 {
    margin-left: 32px !important;
  }

  .u-mrg-l-9 {
    margin-left: 36px !important;
  }

  .u-mrg-l-10 {
    margin-left: 40px !important;
  }

  .u-mrg-l-auto {
    margin-left: auto !important;
  }

  @media (min-width: 544px) {
    .u-mrg-l-0--sm {
      margin-left: 0 !important;
    }
    .u-mrg-l-1--sm {
      margin-left: 4px !important;
    }
    .u-mrg-l-2--sm {
      margin-left: 8px !important;
    }
    .u-mrg-l-3--sm {
      margin-left: 12px !important;
    }
    .u-mrg-l-4--sm {
      margin-left: 16px !important;
    }
    .u-mrg-l-5--sm {
      margin-left: 20px !important;
    }
    .u-mrg-l-6--sm {
      margin-left: 24px !important;
    }
    .u-mrg-l-7--sm {
      margin-left: 28px !important;
    }
    .u-mrg-l-8--sm {
      margin-left: 32px !important;
    }
    .u-mrg-l-9--sm {
      margin-left: 36px !important;
    }
    .u-mrg-l-10--sm {
      margin-left: 40px !important;
    }
    .u-mrg-l-auto--sm {
      margin-left: auto !important;
    }
  }

  @media (min-width: 768px) {
    .u-mrg-l-0--md {
      margin-left: 0 !important;
    }
    .u-mrg-l-1--md {
      margin-left: 4px !important;
    }
    .u-mrg-l-2--md {
      margin-left: 8px !important;
    }
    .u-mrg-l-3--md {
      margin-left: 12px !important;
    }
    .u-mrg-l-4--md {
      margin-left: 16px !important;
    }
    .u-mrg-l-5--md {
      margin-left: 20px !important;
    }
    .u-mrg-l-6--md {
      margin-left: 24px !important;
    }
    .u-mrg-l-7--md {
      margin-left: 28px !important;
    }
    .u-mrg-l-8--md {
      margin-left: 32px !important;
    }
    .u-mrg-l-9--md {
      margin-left: 36px !important;
    }
    .u-mrg-l-10--md {
      margin-left: 40px !important;
    }
    .u-mrg-l-auto--md {
      margin-left: auto !important;
    }
  }

  @media (min-width: 992px) {
    .u-mrg-l-0--lg {
      margin-left: 0 !important;
    }
    .u-mrg-l-1--lg {
      margin-left: 4px !important;
    }
    .u-mrg-l-2--lg {
      margin-left: 8px !important;
    }
    .u-mrg-l-3--lg {
      margin-left: 12px !important;
    }
    .u-mrg-l-4--lg {
      margin-left: 16px !important;
    }
    .u-mrg-l-5--lg {
      margin-left: 20px !important;
    }
    .u-mrg-l-6--lg {
      margin-left: 24px !important;
    }
    .u-mrg-l-7--lg {
      margin-left: 28px !important;
    }
    .u-mrg-l-8--lg {
      margin-left: 32px !important;
    }
    .u-mrg-l-9--lg {
      margin-left: 36px !important;
    }
    .u-mrg-l-10--lg {
      margin-left: 40px !important;
    }
    .u-mrg-l-auto--lg {
      margin-left: auto !important;
    }
  }

  .u-mrg-h-0 {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .u-mrg-h-1 {
    margin-left: 4px !important;
    margin-right: 4px !important;
  }

  .u-mrg-h-2 {
    margin-left: 8px !important;
    margin-right: 8px !important;
  }

  .u-mrg-h-3 {
    margin-left: 12px !important;
    margin-right: 12px !important;
  }

  .u-mrg-h-4 {
    margin-left: 16px !important;
    margin-right: 16px !important;
  }

  .u-mrg-h-5 {
    margin-left: 20px !important;
    margin-right: 20px !important;
  }

  .u-mrg-h-6 {
    margin-left: 24px !important;
    margin-right: 24px !important;
  }

  .u-mrg-h-7 {
    margin-left: 28px !important;
    margin-right: 28px !important;
  }

  .u-mrg-h-8 {
    margin-left: 32px !important;
    margin-right: 32px !important;
  }

  .u-mrg-h-9 {
    margin-left: 36px !important;
    margin-right: 36px !important;
  }

  .u-mrg-h-10 {
    margin-left: 40px !important;
    margin-right: 40px !important;
  }

  .u-mrg-h-auto {
    margin-left: auto !important;
    margin-right: auto !important;
  }

  @media (min-width: 544px) {
    .u-mrg-h-0--sm {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
    .u-mrg-h-1--sm {
      margin-left: 4px !important;
      margin-right: 4px !important;
    }
    .u-mrg-h-2--sm {
      margin-left: 8px !important;
      margin-right: 8px !important;
    }
    .u-mrg-h-3--sm {
      margin-left: 12px !important;
      margin-right: 12px !important;
    }
    .u-mrg-h-4--sm {
      margin-left: 16px !important;
      margin-right: 16px !important;
    }
    .u-mrg-h-5--sm {
      margin-left: 20px !important;
      margin-right: 20px !important;
    }
    .u-mrg-h-6--sm {
      margin-left: 24px !important;
      margin-right: 24px !important;
    }
    .u-mrg-h-7--sm {
      margin-left: 28px !important;
      margin-right: 28px !important;
    }
    .u-mrg-h-8--sm {
      margin-left: 32px !important;
      margin-right: 32px !important;
    }
    .u-mrg-h-9--sm {
      margin-left: 36px !important;
      margin-right: 36px !important;
    }
    .u-mrg-h-10--sm {
      margin-left: 40px !important;
      margin-right: 40px !important;
    }
    .u-mrg-h-auto--sm {
      margin-left: auto !important;
      margin-right: auto !important;
    }
  }

  @media (min-width: 768px) {
    .u-mrg-h-0--md {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
    .u-mrg-h-1--md {
      margin-left: 4px !important;
      margin-right: 4px !important;
    }
    .u-mrg-h-2--md {
      margin-left: 8px !important;
      margin-right: 8px !important;
    }
    .u-mrg-h-3--md {
      margin-left: 12px !important;
      margin-right: 12px !important;
    }
    .u-mrg-h-4--md {
      margin-left: 16px !important;
      margin-right: 16px !important;
    }
    .u-mrg-h-5--md {
      margin-left: 20px !important;
      margin-right: 20px !important;
    }
    .u-mrg-h-6--md {
      margin-left: 24px !important;
      margin-right: 24px !important;
    }
    .u-mrg-h-7--md {
      margin-left: 28px !important;
      margin-right: 28px !important;
    }
    .u-mrg-h-8--md {
      margin-left: 32px !important;
      margin-right: 32px !important;
    }
    .u-mrg-h-9--md {
      margin-left: 36px !important;
      margin-right: 36px !important;
    }
    .u-mrg-h-10--md {
      margin-left: 40px !important;
      margin-right: 40px !important;
    }
    .u-mrg-h-auto--md {
      margin-left: auto !important;
      margin-right: auto !important;
    }
  }

  @media (min-width: 992px) {
    .u-mrg-h-0--lg {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
    .u-mrg-h-1--lg {
      margin-left: 4px !important;
      margin-right: 4px !important;
    }
    .u-mrg-h-2--lg {
      margin-left: 8px !important;
      margin-right: 8px !important;
    }
    .u-mrg-h-3--lg {
      margin-left: 12px !important;
      margin-right: 12px !important;
    }
    .u-mrg-h-4--lg {
      margin-left: 16px !important;
      margin-right: 16px !important;
    }
    .u-mrg-h-5--lg {
      margin-left: 20px !important;
      margin-right: 20px !important;
    }
    .u-mrg-h-6--lg {
      margin-left: 24px !important;
      margin-right: 24px !important;
    }
    .u-mrg-h-7--lg {
      margin-left: 28px !important;
      margin-right: 28px !important;
    }
    .u-mrg-h-8--lg {
      margin-left: 32px !important;
      margin-right: 32px !important;
    }
    .u-mrg-h-9--lg {
      margin-left: 36px !important;
      margin-right: 36px !important;
    }
    .u-mrg-h-10--lg {
      margin-left: 40px !important;
      margin-right: 40px !important;
    }
    .u-mrg-h-auto--lg {
      margin-left: auto !important;
      margin-right: auto !important;
    }
  }

  .u-mrg-v-0 {
    margin-bottom: 0 !important;
    margin-top: 0 !important;
  }

  .u-mrg-v-1 {
    margin-bottom: 4px !important;
    margin-top: 4px !important;
  }

  .u-mrg-v-2 {
    margin-bottom: 8px !important;
    margin-top: 8px !important;
  }

  .u-mrg-v-3 {
    margin-bottom: 12px !important;
    margin-top: 12px !important;
  }

  .u-mrg-v-4 {
    margin-bottom: 16px !important;
    margin-top: 16px !important;
  }

  .u-mrg-v-5 {
    margin-bottom: 20px !important;
    margin-top: 20px !important;
  }

  .u-mrg-v-6 {
    margin-bottom: 24px !important;
    margin-top: 24px !important;
  }

  .u-mrg-v-7 {
    margin-bottom: 28px !important;
    margin-top: 28px !important;
  }

  .u-mrg-v-8 {
    margin-bottom: 32px !important;
    margin-top: 32px !important;
  }

  .u-mrg-v-9 {
    margin-bottom: 36px !important;
    margin-top: 36px !important;
  }

  .u-mrg-v-10 {
    margin-bottom: 40px !important;
    margin-top: 40px !important;
  }

  .u-mrg-v-auto {
    margin-bottom: auto !important;
    margin-top: auto !important;
  }

  @media (min-width: 544px) {
    .u-mrg-v-0--sm {
      margin-bottom: 0 !important;
      margin-top: 0 !important;
    }
    .u-mrg-v-1--sm {
      margin-bottom: 4px !important;
      margin-top: 4px !important;
    }
    .u-mrg-v-2--sm {
      margin-bottom: 8px !important;
      margin-top: 8px !important;
    }
    .u-mrg-v-3--sm {
      margin-bottom: 12px !important;
      margin-top: 12px !important;
    }
    .u-mrg-v-4--sm {
      margin-bottom: 16px !important;
      margin-top: 16px !important;
    }
    .u-mrg-v-5--sm {
      margin-bottom: 20px !important;
      margin-top: 20px !important;
    }
    .u-mrg-v-6--sm {
      margin-bottom: 24px !important;
      margin-top: 24px !important;
    }
    .u-mrg-v-7--sm {
      margin-bottom: 28px !important;
      margin-top: 28px !important;
    }
    .u-mrg-v-8--sm {
      margin-bottom: 32px !important;
      margin-top: 32px !important;
    }
    .u-mrg-v-9--sm {
      margin-bottom: 36px !important;
      margin-top: 36px !important;
    }
    .u-mrg-v-10--sm {
      margin-bottom: 40px !important;
      margin-top: 40px !important;
    }
    .u-mrg-v-auto--sm {
      margin-bottom: auto !important;
      margin-top: auto !important;
    }
  }

  @media (min-width: 768px) {
    .u-mrg-v-0--md {
      margin-bottom: 0 !important;
      margin-top: 0 !important;
    }
    .u-mrg-v-1--md {
      margin-bottom: 4px !important;
      margin-top: 4px !important;
    }
    .u-mrg-v-2--md {
      margin-bottom: 8px !important;
      margin-top: 8px !important;
    }
    .u-mrg-v-3--md {
      margin-bottom: 12px !important;
      margin-top: 12px !important;
    }
    .u-mrg-v-4--md {
      margin-bottom: 16px !important;
      margin-top: 16px !important;
    }
    .u-mrg-v-5--md {
      margin-bottom: 20px !important;
      margin-top: 20px !important;
    }
    .u-mrg-v-6--md {
      margin-bottom: 24px !important;
      margin-top: 24px !important;
    }
    .u-mrg-v-7--md {
      margin-bottom: 28px !important;
      margin-top: 28px !important;
    }
    .u-mrg-v-8--md {
      margin-bottom: 32px !important;
      margin-top: 32px !important;
    }
    .u-mrg-v-9--md {
      margin-bottom: 36px !important;
      margin-top: 36px !important;
    }
    .u-mrg-v-10--md {
      margin-bottom: 40px !important;
      margin-top: 40px !important;
    }
    .u-mrg-v-auto--md {
      margin-bottom: auto !important;
      margin-top: auto !important;
    }
  }

  @media (min-width: 992px) {
    .u-mrg-v-0--lg {
      margin-bottom: 0 !important;
      margin-top: 0 !important;
    }
    .u-mrg-v-1--lg {
      margin-bottom: 4px !important;
      margin-top: 4px !important;
    }
    .u-mrg-v-2--lg {
      margin-bottom: 8px !important;
      margin-top: 8px !important;
    }
    .u-mrg-v-3--lg {
      margin-bottom: 12px !important;
      margin-top: 12px !important;
    }
    .u-mrg-v-4--lg {
      margin-bottom: 16px !important;
      margin-top: 16px !important;
    }
    .u-mrg-v-5--lg {
      margin-bottom: 20px !important;
      margin-top: 20px !important;
    }
    .u-mrg-v-6--lg {
      margin-bottom: 24px !important;
      margin-top: 24px !important;
    }
    .u-mrg-v-7--lg {
      margin-bottom: 28px !important;
      margin-top: 28px !important;
    }
    .u-mrg-v-8--lg {
      margin-bottom: 32px !important;
      margin-top: 32px !important;
    }
    .u-mrg-v-9--lg {
      margin-bottom: 36px !important;
      margin-top: 36px !important;
    }
    .u-mrg-v-10--lg {
      margin-bottom: 40px !important;
      margin-top: 40px !important;
    }
    .u-mrg-v-auto--lg {
      margin-bottom: auto !important;
      margin-top: auto !important;
    }
  }

  .u-pad-0 {
    padding: 0 !important;
  }

  .u-pad-1 {
    padding: 4px !important;
  }

  .u-pad-2 {
    padding: 8px !important;
  }

  .u-pad-3 {
    padding: 12px !important;
  }

  .u-pad-4 {
    padding: 16px !important;
  }

  .u-pad-5 {
    padding: 20px !important;
  }

  .u-pad-6 {
    padding: 24px !important;
  }

  .u-pad-7 {
    padding: 28px !important;
  }

  .u-pad-8 {
    padding: 32px !important;
  }

  .u-pad-9 {
    padding: 36px !important;
  }

  .u-pad-10 {
    padding: 40px !important;
  }

  @media (min-width: 544px) {
    .u-pad-0--sm {
      padding: 0 !important;
    }
    .u-pad-1--sm {
      padding: 4px !important;
    }
    .u-pad-2--sm {
      padding: 8px !important;
    }
    .u-pad-3--sm {
      padding: 12px !important;
    }
    .u-pad-4--sm {
      padding: 16px !important;
    }
    .u-pad-5--sm {
      padding: 20px !important;
    }
    .u-pad-6--sm {
      padding: 24px !important;
    }
    .u-pad-7--sm {
      padding: 28px !important;
    }
    .u-pad-8--sm {
      padding: 32px !important;
    }
    .u-pad-9--sm {
      padding: 36px !important;
    }
    .u-pad-10--sm {
      padding: 40px !important;
    }
  }

  @media (min-width: 768px) {
    .u-pad-0--md {
      padding: 0 !important;
    }
    .u-pad-1--md {
      padding: 4px !important;
    }
    .u-pad-2--md {
      padding: 8px !important;
    }
    .u-pad-3--md {
      padding: 12px !important;
    }
    .u-pad-4--md {
      padding: 16px !important;
    }
    .u-pad-5--md {
      padding: 20px !important;
    }
    .u-pad-6--md {
      padding: 24px !important;
    }
    .u-pad-7--md {
      padding: 28px !important;
    }
    .u-pad-8--md {
      padding: 32px !important;
    }
    .u-pad-9--md {
      padding: 36px !important;
    }
    .u-pad-10--md {
      padding: 40px !important;
    }
  }

  @media (min-width: 992px) {
    .u-pad-0--lg {
      padding: 0 !important;
    }
    .u-pad-1--lg {
      padding: 4px !important;
    }
    .u-pad-2--lg {
      padding: 8px !important;
    }
    .u-pad-3--lg {
      padding: 12px !important;
    }
    .u-pad-4--lg {
      padding: 16px !important;
    }
    .u-pad-5--lg {
      padding: 20px !important;
    }
    .u-pad-6--lg {
      padding: 24px !important;
    }
    .u-pad-7--lg {
      padding: 28px !important;
    }
    .u-pad-8--lg {
      padding: 32px !important;
    }
    .u-pad-9--lg {
      padding: 36px !important;
    }
    .u-pad-10--lg {
      padding: 40px !important;
    }
  }

  .u-pad-t-0 {
    padding-top: 0 !important;
  }

  .u-pad-t-1 {
    padding-top: 4px !important;
  }

  .u-pad-t-2 {
    padding-top: 8px !important;
  }

  .u-pad-t-3 {
    padding-top: 12px !important;
  }

  .u-pad-t-4 {
    padding-top: 16px !important;
  }

  .u-pad-t-5 {
    padding-top: 20px !important;
  }

  .u-pad-t-6 {
    padding-top: 24px !important;
  }

  .u-pad-t-7 {
    padding-top: 28px !important;
  }

  .u-pad-t-8 {
    padding-top: 32px !important;
  }

  .u-pad-t-9 {
    padding-top: 36px !important;
  }

  .u-pad-t-10 {
    padding-top: 40px !important;
  }

  @media (min-width: 544px) {
    .u-pad-t-0--sm {
      padding-top: 0 !important;
    }
    .u-pad-t-1--sm {
      padding-top: 4px !important;
    }
    .u-pad-t-2--sm {
      padding-top: 8px !important;
    }
    .u-pad-t-3--sm {
      padding-top: 12px !important;
    }
    .u-pad-t-4--sm {
      padding-top: 16px !important;
    }
    .u-pad-t-5--sm {
      padding-top: 20px !important;
    }
    .u-pad-t-6--sm {
      padding-top: 24px !important;
    }
    .u-pad-t-7--sm {
      padding-top: 28px !important;
    }
    .u-pad-t-8--sm {
      padding-top: 32px !important;
    }
    .u-pad-t-9--sm {
      padding-top: 36px !important;
    }
    .u-pad-t-10--sm {
      padding-top: 40px !important;
    }
  }

  @media (min-width: 768px) {
    .u-pad-t-0--md {
      padding-top: 0 !important;
    }
    .u-pad-t-1--md {
      padding-top: 4px !important;
    }
    .u-pad-t-2--md {
      padding-top: 8px !important;
    }
    .u-pad-t-3--md {
      padding-top: 12px !important;
    }
    .u-pad-t-4--md {
      padding-top: 16px !important;
    }
    .u-pad-t-5--md {
      padding-top: 20px !important;
    }
    .u-pad-t-6--md {
      padding-top: 24px !important;
    }
    .u-pad-t-7--md {
      padding-top: 28px !important;
    }
    .u-pad-t-8--md {
      padding-top: 32px !important;
    }
    .u-pad-t-9--md {
      padding-top: 36px !important;
    }
    .u-pad-t-10--md {
      padding-top: 40px !important;
    }
  }

  @media (min-width: 992px) {
    .u-pad-t-0--lg {
      padding-top: 0 !important;
    }
    .u-pad-t-1--lg {
      padding-top: 4px !important;
    }
    .u-pad-t-2--lg {
      padding-top: 8px !important;
    }
    .u-pad-t-3--lg {
      padding-top: 12px !important;
    }
    .u-pad-t-4--lg {
      padding-top: 16px !important;
    }
    .u-pad-t-5--lg {
      padding-top: 20px !important;
    }
    .u-pad-t-6--lg {
      padding-top: 24px !important;
    }
    .u-pad-t-7--lg {
      padding-top: 28px !important;
    }
    .u-pad-t-8--lg {
      padding-top: 32px !important;
    }
    .u-pad-t-9--lg {
      padding-top: 36px !important;
    }
    .u-pad-t-10--lg {
      padding-top: 40px !important;
    }
  }

  .u-pad-r-0 {
    padding-right: 0 !important;
  }

  .u-pad-r-1 {
    padding-right: 4px !important;
  }

  .u-pad-r-2 {
    padding-right: 8px !important;
  }

  .u-pad-r-3 {
    padding-right: 12px !important;
  }

  .u-pad-r-4 {
    padding-right: 16px !important;
  }

  .u-pad-r-5 {
    padding-right: 20px !important;
  }

  .u-pad-r-6 {
    padding-right: 24px !important;
  }

  .u-pad-r-7 {
    padding-right: 28px !important;
  }

  .u-pad-r-8 {
    padding-right: 32px !important;
  }

  .u-pad-r-9 {
    padding-right: 36px !important;
  }

  .u-pad-r-10 {
    padding-right: 40px !important;
  }

  @media (min-width: 544px) {
    .u-pad-r-0--sm {
      padding-right: 0 !important;
    }
    .u-pad-r-1--sm {
      padding-right: 4px !important;
    }
    .u-pad-r-2--sm {
      padding-right: 8px !important;
    }
    .u-pad-r-3--sm {
      padding-right: 12px !important;
    }
    .u-pad-r-4--sm {
      padding-right: 16px !important;
    }
    .u-pad-r-5--sm {
      padding-right: 20px !important;
    }
    .u-pad-r-6--sm {
      padding-right: 24px !important;
    }
    .u-pad-r-7--sm {
      padding-right: 28px !important;
    }
    .u-pad-r-8--sm {
      padding-right: 32px !important;
    }
    .u-pad-r-9--sm {
      padding-right: 36px !important;
    }
    .u-pad-r-10--sm {
      padding-right: 40px !important;
    }
  }

  @media (min-width: 768px) {
    .u-pad-r-0--md {
      padding-right: 0 !important;
    }
    .u-pad-r-1--md {
      padding-right: 4px !important;
    }
    .u-pad-r-2--md {
      padding-right: 8px !important;
    }
    .u-pad-r-3--md {
      padding-right: 12px !important;
    }
    .u-pad-r-4--md {
      padding-right: 16px !important;
    }
    .u-pad-r-5--md {
      padding-right: 20px !important;
    }
    .u-pad-r-6--md {
      padding-right: 24px !important;
    }
    .u-pad-r-7--md {
      padding-right: 28px !important;
    }
    .u-pad-r-8--md {
      padding-right: 32px !important;
    }
    .u-pad-r-9--md {
      padding-right: 36px !important;
    }
    .u-pad-r-10--md {
      padding-right: 40px !important;
    }
  }

  @media (min-width: 992px) {
    .u-pad-r-0--lg {
      padding-right: 0 !important;
    }
    .u-pad-r-1--lg {
      padding-right: 4px !important;
    }
    .u-pad-r-2--lg {
      padding-right: 8px !important;
    }
    .u-pad-r-3--lg {
      padding-right: 12px !important;
    }
    .u-pad-r-4--lg {
      padding-right: 16px !important;
    }
    .u-pad-r-5--lg {
      padding-right: 20px !important;
    }
    .u-pad-r-6--lg {
      padding-right: 24px !important;
    }
    .u-pad-r-7--lg {
      padding-right: 28px !important;
    }
    .u-pad-r-8--lg {
      padding-right: 32px !important;
    }
    .u-pad-r-9--lg {
      padding-right: 36px !important;
    }
    .u-pad-r-10--lg {
      padding-right: 40px !important;
    }
  }

  .u-pad-b-0 {
    padding-bottom: 0 !important;
  }

  .u-pad-b-1 {
    padding-bottom: 4px !important;
  }

  .u-pad-b-2 {
    padding-bottom: 8px !important;
  }

  .u-pad-b-3 {
    padding-bottom: 12px !important;
  }

  .u-pad-b-4 {
    padding-bottom: 16px !important;
  }

  .u-pad-b-5 {
    padding-bottom: 20px !important;
  }

  .u-pad-b-6 {
    padding-bottom: 24px !important;
  }

  .u-pad-b-7 {
    padding-bottom: 28px !important;
  }

  .u-pad-b-8 {
    padding-bottom: 32px !important;
  }

  .u-pad-b-9 {
    padding-bottom: 36px !important;
  }

  .u-pad-b-10 {
    padding-bottom: 40px !important;
  }

  @media (min-width: 544px) {
    .u-pad-b-0--sm {
      padding-bottom: 0 !important;
    }
    .u-pad-b-1--sm {
      padding-bottom: 4px !important;
    }
    .u-pad-b-2--sm {
      padding-bottom: 8px !important;
    }
    .u-pad-b-3--sm {
      padding-bottom: 12px !important;
    }
    .u-pad-b-4--sm {
      padding-bottom: 16px !important;
    }
    .u-pad-b-5--sm {
      padding-bottom: 20px !important;
    }
    .u-pad-b-6--sm {
      padding-bottom: 24px !important;
    }
    .u-pad-b-7--sm {
      padding-bottom: 28px !important;
    }
    .u-pad-b-8--sm {
      padding-bottom: 32px !important;
    }
    .u-pad-b-9--sm {
      padding-bottom: 36px !important;
    }
    .u-pad-b-10--sm {
      padding-bottom: 40px !important;
    }
  }

  @media (min-width: 768px) {
    .u-pad-b-0--md {
      padding-bottom: 0 !important;
    }
    .u-pad-b-1--md {
      padding-bottom: 4px !important;
    }
    .u-pad-b-2--md {
      padding-bottom: 8px !important;
    }
    .u-pad-b-3--md {
      padding-bottom: 12px !important;
    }
    .u-pad-b-4--md {
      padding-bottom: 16px !important;
    }
    .u-pad-b-5--md {
      padding-bottom: 20px !important;
    }
    .u-pad-b-6--md {
      padding-bottom: 24px !important;
    }
    .u-pad-b-7--md {
      padding-bottom: 28px !important;
    }
    .u-pad-b-8--md {
      padding-bottom: 32px !important;
    }
    .u-pad-b-9--md {
      padding-bottom: 36px !important;
    }
    .u-pad-b-10--md {
      padding-bottom: 40px !important;
    }
  }

  @media (min-width: 992px) {
    .u-pad-b-0--lg {
      padding-bottom: 0 !important;
    }
    .u-pad-b-1--lg {
      padding-bottom: 4px !important;
    }
    .u-pad-b-2--lg {
      padding-bottom: 8px !important;
    }
    .u-pad-b-3--lg {
      padding-bottom: 12px !important;
    }
    .u-pad-b-4--lg {
      padding-bottom: 16px !important;
    }
    .u-pad-b-5--lg {
      padding-bottom: 20px !important;
    }
    .u-pad-b-6--lg {
      padding-bottom: 24px !important;
    }
    .u-pad-b-7--lg {
      padding-bottom: 28px !important;
    }
    .u-pad-b-8--lg {
      padding-bottom: 32px !important;
    }
    .u-pad-b-9--lg {
      padding-bottom: 36px !important;
    }
    .u-pad-b-10--lg {
      padding-bottom: 40px !important;
    }
  }

  .u-pad-l-0 {
    padding-left: 0 !important;
  }

  .u-pad-l-1 {
    padding-left: 4px !important;
  }

  .u-pad-l-2 {
    padding-left: 8px !important;
  }

  .u-pad-l-3 {
    padding-left: 12px !important;
  }

  .u-pad-l-4 {
    padding-left: 16px !important;
  }

  .u-pad-l-5 {
    padding-left: 20px !important;
  }

  .u-pad-l-6 {
    padding-left: 24px !important;
  }

  .u-pad-l-7 {
    padding-left: 28px !important;
  }

  .u-pad-l-8 {
    padding-left: 32px !important;
  }

  .u-pad-l-9 {
    padding-left: 36px !important;
  }

  .u-pad-l-10 {
    padding-left: 40px !important;
  }

  @media (min-width: 544px) {
    .u-pad-l-0--sm {
      padding-left: 0 !important;
    }
    .u-pad-l-1--sm {
      padding-left: 4px !important;
    }
    .u-pad-l-2--sm {
      padding-left: 8px !important;
    }
    .u-pad-l-3--sm {
      padding-left: 12px !important;
    }
    .u-pad-l-4--sm {
      padding-left: 16px !important;
    }
    .u-pad-l-5--sm {
      padding-left: 20px !important;
    }
    .u-pad-l-6--sm {
      padding-left: 24px !important;
    }
    .u-pad-l-7--sm {
      padding-left: 28px !important;
    }
    .u-pad-l-8--sm {
      padding-left: 32px !important;
    }
    .u-pad-l-9--sm {
      padding-left: 36px !important;
    }
    .u-pad-l-10--sm {
      padding-left: 40px !important;
    }
  }

  @media (min-width: 768px) {
    .u-pad-l-0--md {
      padding-left: 0 !important;
    }
    .u-pad-l-1--md {
      padding-left: 4px !important;
    }
    .u-pad-l-2--md {
      padding-left: 8px !important;
    }
    .u-pad-l-3--md {
      padding-left: 12px !important;
    }
    .u-pad-l-4--md {
      padding-left: 16px !important;
    }
    .u-pad-l-5--md {
      padding-left: 20px !important;
    }
    .u-pad-l-6--md {
      padding-left: 24px !important;
    }
    .u-pad-l-7--md {
      padding-left: 28px !important;
    }
    .u-pad-l-8--md {
      padding-left: 32px !important;
    }
    .u-pad-l-9--md {
      padding-left: 36px !important;
    }
    .u-pad-l-10--md {
      padding-left: 40px !important;
    }
  }

  @media (min-width: 992px) {
    .u-pad-l-0--lg {
      padding-left: 0 !important;
    }
    .u-pad-l-1--lg {
      padding-left: 4px !important;
    }
    .u-pad-l-2--lg {
      padding-left: 8px !important;
    }
    .u-pad-l-3--lg {
      padding-left: 12px !important;
    }
    .u-pad-l-4--lg {
      padding-left: 16px !important;
    }
    .u-pad-l-5--lg {
      padding-left: 20px !important;
    }
    .u-pad-l-6--lg {
      padding-left: 24px !important;
    }
    .u-pad-l-7--lg {
      padding-left: 28px !important;
    }
    .u-pad-l-8--lg {
      padding-left: 32px !important;
    }
    .u-pad-l-9--lg {
      padding-left: 36px !important;
    }
    .u-pad-l-10--lg {
      padding-left: 40px !important;
    }
  }

  .u-pad-h-0 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .u-pad-h-1 {
    padding-left: 4px !important;
    padding-right: 4px !important;
  }

  .u-pad-h-2 {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }

  .u-pad-h-3 {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  .u-pad-h-4 {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  .u-pad-h-5 {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  .u-pad-h-6 {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }

  .u-pad-h-7 {
    padding-left: 28px !important;
    padding-right: 28px !important;
  }

  .u-pad-h-8 {
    padding-left: 32px !important;
    padding-right: 32px !important;
  }

  .u-pad-h-9 {
    padding-left: 36px !important;
    padding-right: 36px !important;
  }

  .u-pad-h-10 {
    padding-left: 40px !important;
    padding-right: 40px !important;
  }

  @media (min-width: 544px) {
    .u-pad-h-0--sm {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    .u-pad-h-1--sm {
      padding-left: 4px !important;
      padding-right: 4px !important;
    }
    .u-pad-h-2--sm {
      padding-left: 8px !important;
      padding-right: 8px !important;
    }
    .u-pad-h-3--sm {
      padding-left: 12px !important;
      padding-right: 12px !important;
    }
    .u-pad-h-4--sm {
      padding-left: 16px !important;
      padding-right: 16px !important;
    }
    .u-pad-h-5--sm {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    .u-pad-h-6--sm {
      padding-left: 24px !important;
      padding-right: 24px !important;
    }
    .u-pad-h-7--sm {
      padding-left: 28px !important;
      padding-right: 28px !important;
    }
    .u-pad-h-8--sm {
      padding-left: 32px !important;
      padding-right: 32px !important;
    }
    .u-pad-h-9--sm {
      padding-left: 36px !important;
      padding-right: 36px !important;
    }
    .u-pad-h-10--sm {
      padding-left: 40px !important;
      padding-right: 40px !important;
    }
  }

  @media (min-width: 768px) {
    .u-pad-h-0--md {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    .u-pad-h-1--md {
      padding-left: 4px !important;
      padding-right: 4px !important;
    }
    .u-pad-h-2--md {
      padding-left: 8px !important;
      padding-right: 8px !important;
    }
    .u-pad-h-3--md {
      padding-left: 12px !important;
      padding-right: 12px !important;
    }
    .u-pad-h-4--md {
      padding-left: 16px !important;
      padding-right: 16px !important;
    }
    .u-pad-h-5--md {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    .u-pad-h-6--md {
      padding-left: 24px !important;
      padding-right: 24px !important;
    }
    .u-pad-h-7--md {
      padding-left: 28px !important;
      padding-right: 28px !important;
    }
    .u-pad-h-8--md {
      padding-left: 32px !important;
      padding-right: 32px !important;
    }
    .u-pad-h-9--md {
      padding-left: 36px !important;
      padding-right: 36px !important;
    }
    .u-pad-h-10--md {
      padding-left: 40px !important;
      padding-right: 40px !important;
    }
  }

  @media (min-width: 992px) {
    .u-pad-h-0--lg {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    .u-pad-h-1--lg {
      padding-left: 4px !important;
      padding-right: 4px !important;
    }
    .u-pad-h-2--lg {
      padding-left: 8px !important;
      padding-right: 8px !important;
    }
    .u-pad-h-3--lg {
      padding-left: 12px !important;
      padding-right: 12px !important;
    }
    .u-pad-h-4--lg {
      padding-left: 16px !important;
      padding-right: 16px !important;
    }
    .u-pad-h-5--lg {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    .u-pad-h-6--lg {
      padding-left: 24px !important;
      padding-right: 24px !important;
    }
    .u-pad-h-7--lg {
      padding-left: 28px !important;
      padding-right: 28px !important;
    }
    .u-pad-h-8--lg {
      padding-left: 32px !important;
      padding-right: 32px !important;
    }
    .u-pad-h-9--lg {
      padding-left: 36px !important;
      padding-right: 36px !important;
    }
    .u-pad-h-10--lg {
      padding-left: 40px !important;
      padding-right: 40px !important;
    }
  }

  .u-pad-v-0 {
    padding-bottom: 0 !important;
    padding-top: 0 !important;
  }

  .u-pad-v-1 {
    padding-bottom: 4px !important;
    padding-top: 4px !important;
  }

  .u-pad-v-2 {
    padding-bottom: 8px !important;
    padding-top: 8px !important;
  }

  .u-pad-v-3 {
    padding-bottom: 12px !important;
    padding-top: 12px !important;
  }

  .u-pad-v-4 {
    padding-bottom: 16px !important;
    padding-top: 16px !important;
  }

  .u-pad-v-5 {
    padding-bottom: 20px !important;
    padding-top: 20px !important;
  }

  .u-pad-v-6 {
    padding-bottom: 24px !important;
    padding-top: 24px !important;
  }

  .u-pad-v-7 {
    padding-bottom: 28px !important;
    padding-top: 28px !important;
  }

  .u-pad-v-8 {
    padding-bottom: 32px !important;
    padding-top: 32px !important;
  }

  .u-pad-v-9 {
    padding-bottom: 36px !important;
    padding-top: 36px !important;
  }

  .u-pad-v-10 {
    padding-bottom: 40px !important;
    padding-top: 40px !important;
  }

  @media (min-width: 544px) {
    .u-pad-v-0--sm {
      padding-bottom: 0 !important;
      padding-top: 0 !important;
    }
    .u-pad-v-1--sm {
      padding-bottom: 4px !important;
      padding-top: 4px !important;
    }
    .u-pad-v-2--sm {
      padding-bottom: 8px !important;
      padding-top: 8px !important;
    }
    .u-pad-v-3--sm {
      padding-bottom: 12px !important;
      padding-top: 12px !important;
    }
    .u-pad-v-4--sm {
      padding-bottom: 16px !important;
      padding-top: 16px !important;
    }
    .u-pad-v-5--sm {
      padding-bottom: 20px !important;
      padding-top: 20px !important;
    }
    .u-pad-v-6--sm {
      padding-bottom: 24px !important;
      padding-top: 24px !important;
    }
    .u-pad-v-7--sm {
      padding-bottom: 28px !important;
      padding-top: 28px !important;
    }
    .u-pad-v-8--sm {
      padding-bottom: 32px !important;
      padding-top: 32px !important;
    }
    .u-pad-v-9--sm {
      padding-bottom: 36px !important;
      padding-top: 36px !important;
    }
    .u-pad-v-10--sm {
      padding-bottom: 40px !important;
      padding-top: 40px !important;
    }
  }

  @media (min-width: 768px) {
    .u-pad-v-0--md {
      padding-bottom: 0 !important;
      padding-top: 0 !important;
    }
    .u-pad-v-1--md {
      padding-bottom: 4px !important;
      padding-top: 4px !important;
    }
    .u-pad-v-2--md {
      padding-bottom: 8px !important;
      padding-top: 8px !important;
    }
    .u-pad-v-3--md {
      padding-bottom: 12px !important;
      padding-top: 12px !important;
    }
    .u-pad-v-4--md {
      padding-bottom: 16px !important;
      padding-top: 16px !important;
    }
    .u-pad-v-5--md {
      padding-bottom: 20px !important;
      padding-top: 20px !important;
    }
    .u-pad-v-6--md {
      padding-bottom: 24px !important;
      padding-top: 24px !important;
    }
    .u-pad-v-7--md {
      padding-bottom: 28px !important;
      padding-top: 28px !important;
    }
    .u-pad-v-8--md {
      padding-bottom: 32px !important;
      padding-top: 32px !important;
    }
    .u-pad-v-9--md {
      padding-bottom: 36px !important;
      padding-top: 36px !important;
    }
    .u-pad-v-10--md {
      padding-bottom: 40px !important;
      padding-top: 40px !important;
    }
  }

  @media (min-width: 992px) {
    .u-pad-v-0--lg {
      padding-bottom: 0 !important;
      padding-top: 0 !important;
    }
    .u-pad-v-1--lg {
      padding-bottom: 4px !important;
      padding-top: 4px !important;
    }
    .u-pad-v-2--lg {
      padding-bottom: 8px !important;
      padding-top: 8px !important;
    }
    .u-pad-v-3--lg {
      padding-bottom: 12px !important;
      padding-top: 12px !important;
    }
    .u-pad-v-4--lg {
      padding-bottom: 16px !important;
      padding-top: 16px !important;
    }
    .u-pad-v-5--lg {
      padding-bottom: 20px !important;
      padding-top: 20px !important;
    }
    .u-pad-v-6--lg {
      padding-bottom: 24px !important;
      padding-top: 24px !important;
    }
    .u-pad-v-7--lg {
      padding-bottom: 28px !important;
      padding-top: 28px !important;
    }
    .u-pad-v-8--lg {
      padding-bottom: 32px !important;
      padding-top: 32px !important;
    }
    .u-pad-v-9--lg {
      padding-bottom: 36px !important;
      padding-top: 36px !important;
    }
    .u-pad-v-10--lg {
      padding-bottom: 40px !important;
      padding-top: 40px !important;
    }
  }

  .tx-justify {
    text-align: justify !important;
  }

  .tx-left {
    text-align: left !important;
  }

  .tx-center {
    text-align: center !important;
  }

  .tx-right {
    text-align: right !important;
  }

  @media (min-width: 544px) {
    .tx-justify--sm {
      text-align: justify !important;
    }
    .tx-left--sm {
      text-align: left !important;
    }
    .tx-center--sm {
      text-align: center !important;
    }
    .tx-right--sm {
      text-align: right !important;
    }
  }

  @media (min-width: 768px) {
    .tx-justify--md {
      text-align: justify !important;
    }
    .tx-left--md {
      text-align: left !important;
    }
    .tx-center--md {
      text-align: center !important;
    }
    .tx-right--md {
      text-align: right !important;
    }
  }

  @media (min-width: 992px) {
    .tx-justify--lg {
      text-align: justify !important;
    }
    .tx-left--lg {
      text-align: left !important;
    }
    .tx-center--lg {
      text-align: center !important;
    }
    .tx-right--lg {
      text-align: right !important;
    }
  }

  .tx-break-all {
    word-break: break-all !important;
  }

  .tx-break-keep-all {
    word-break: keep-all !important;
  }

  .tx-break-normal {
    word-break: normal !important;
  }

  .tx-overline {
    text-decoration: overline !important;
  }

  .tx-strikethrough {
    text-decoration: line-through !important;
  }

  .tx-underline {
    text-decoration: underline !important;
  }

  .tx-no-decoration {
    text-decoration: none !important;
  }

  .tx-no-underline {
    text-decoration: none !important;
  }

  .tx-h1 {
    font-size: 3rem !important;
  }

  .tx-h2 {
    font-size: 2.25rem !important;
  }

  .tx-h3 {
    font-size: 1.5rem !important;
  }

  .tx-h4 {
    font-size: 1.25rem !important;
  }

  .tx-h5 {
    font-size: 1rem !important;
  }

  .tx-h6 {
    font-size: 0.875rem !important;
  }

  @media (min-width: 544px) {
    .tx-h1--sm {
      font-size: 3rem !important;
    }
    .tx-h2--sm {
      font-size: 2.25rem !important;
    }
    .tx-h3--sm {
      font-size: 1.5rem !important;
    }
    .tx-h4--sm {
      font-size: 1.25rem !important;
    }
    .tx-h5--sm {
      font-size: 1rem !important;
    }
    .tx-h6--sm {
      font-size: 0.875rem !important;
    }
  }

  @media (min-width: 768px) {
    .tx-h1--md {
      font-size: 3rem !important;
    }
    .tx-h2--md {
      font-size: 2.25rem !important;
    }
    .tx-h3--md {
      font-size: 1.5rem !important;
    }
    .tx-h4--md {
      font-size: 1.25rem !important;
    }
    .tx-h5--md {
      font-size: 1rem !important;
    }
    .tx-h6--md {
      font-size: 0.875rem !important;
    }
  }

  @media (min-width: 992px) {
    .tx-h1--lg {
      font-size: 3rem !important;
    }
    .tx-h2--lg {
      font-size: 2.25rem !important;
    }
    .tx-h3--lg {
      font-size: 1.5rem !important;
    }
    .tx-h4--lg {
      font-size: 1.25rem !important;
    }
    .tx-h5--lg {
      font-size: 1rem !important;
    }
    .tx-h6--lg {
      font-size: 0.875rem !important;
    }
  }

  .tx-headline-1 {
    font-size: 5rem !important;
  }

  .tx-headline-2 {
    font-size: 4.5rem !important;
  }

  .tx-headline-3 {
    font-size: 4rem !important;
  }

  .tx-headline-4 {
    font-size: 3.5rem !important;
  }

  @media (min-width: 544px) {
    .tx-headline-1--sm {
      font-size: 5rem !important;
    }
    .tx-headline-2--sm {
      font-size: 4.5rem !important;
    }
    .tx-headline-3--sm {
      font-size: 4rem !important;
    }
    .tx-headline-4--sm {
      font-size: 3.5rem !important;
    }
  }

  @media (min-width: 768px) {
    .tx-headline-1--md {
      font-size: 5rem !important;
    }
    .tx-headline-2--md {
      font-size: 4.5rem !important;
    }
    .tx-headline-3--md {
      font-size: 4rem !important;
    }
    .tx-headline-4--md {
      font-size: 3.5rem !important;
    }
  }

  @media (min-width: 992px) {
    .tx-headline-1--lg {
      font-size: 5rem !important;
    }
    .tx-headline-2--lg {
      font-size: 4.5rem !important;
    }
    .tx-headline-3--lg {
      font-size: 4rem !important;
    }
    .tx-headline-4--lg {
      font-size: 3.5rem !important;
    }
  }

  .tx-lh-heading {
    line-height: 1.2 !important;
  }

  .tx-lh-body {
    line-height: 1.5 !important;
  }

  .tx-lh-copy {
    line-height: 1.6 !important;
  }

  .tx-lh-reset {
    line-height: 1 !important;
  }

  .tx-lh-none {
    line-height: 0 !important;
  }

  @media (min-width: 544px) {
    .tx-lh-heading--sm {
      line-height: 1.2 !important;
    }
    .tx-lh-body--sm {
      line-height: 1.5 !important;
    }
    .tx-lh-copy--sm {
      line-height: 1.6 !important;
    }
    .tx-lh-reset--sm {
      line-height: 1 !important;
    }
    .tx-lh-none--sm {
      line-height: 0 !important;
    }
  }

  @media (min-width: 768px) {
    .tx-lh-heading--md {
      line-height: 1.2 !important;
    }
    .tx-lh-body--md {
      line-height: 1.5 !important;
    }
    .tx-lh-copy--md {
      line-height: 1.6 !important;
    }
    .tx-lh-reset--md {
      line-height: 1 !important;
    }
    .tx-lh-none--md {
      line-height: 0 !important;
    }
  }

  @media (min-width: 992px) {
    .tx-lh-heading--lg {
      line-height: 1.2 !important;
    }
    .tx-lh-body--lg {
      line-height: 1.5 !important;
    }
    .tx-lh-copy--lg {
      line-height: 1.6 !important;
    }
    .tx-lh-reset--lg {
      line-height: 1 !important;
    }
    .tx-lh-none--lg {
      line-height: 0 !important;
    }
  }

  .tx-lead {
    font-size: 1.25rem !important;
  }

  .tx-xl {
    font-size: 1.28rem !important;
  }

  .tx-lg {
    font-size: 1.14rem !important;
  }

  .tx-md {
    font-size: 1rem !important;
  }

  .tx-sm {
    font-size: 0.92rem !important;
  }

  .tx-xs {
    font-size: 0.78rem !important;
  }

  @media (min-width: 544px) {
    .tx-lead--sm {
      font-size: 1.25rem !important;
    }
    .tx-xl--sm {
      font-size: 1.28rem !important;
    }
    .tx-lg--sm {
      font-size: 1.14rem !important;
    }
    .tx-md--sm {
      font-size: 1rem !important;
    }
    .tx-sm--sm {
      font-size: 0.92rem !important;
    }
    .tx-xs--sm {
      font-size: 0.78rem !important;
    }
  }

  @media (min-width: 768px) {
    .tx-lead--md {
      font-size: 1.25rem !important;
    }
    .tx-xl--md {
      font-size: 1.28rem !important;
    }
    .tx-lg--md {
      font-size: 1.14rem !important;
    }
    .tx-md--md {
      font-size: 1rem !important;
    }
    .tx-sm--md {
      font-size: 0.92rem !important;
    }
    .tx-xs--md {
      font-size: 0.78rem !important;
    }
  }

  @media (min-width: 992px) {
    .tx-lead--lg {
      font-size: 1.25rem !important;
    }
    .tx-xl--lg {
      font-size: 1.28rem !important;
    }
    .tx-lg--lg {
      font-size: 1.14rem !important;
    }
    .tx-md--lg {
      font-size: 1rem !important;
    }
    .tx-sm--lg {
      font-size: 0.92rem !important;
    }
    .tx-xs--lg {
      font-size: 0.78rem !important;
    }
  }

  .tx-smooth {
    -moz-osx-font-smoothing: antialiased !important;
    -webkit-font-smoothing: antialiased !important;
  }

  .tx-smooth-auto {
    -moz-osx-font-smoothing: auto !important;
    -webkit-font-smoothing: auto !important;
  }

  .tx-smooth-none {
    -moz-osx-font-smoothing: none !important;
    -webkit-font-smoothing: none !important;
  }

  .tx-initial {
    -moz-osx-font-smoothing: initial !important;
    -webkit-font-smoothing: initial !important;
  }

  .tx-capitalize {
    text-transform: capitalize !important;
  }

  .tx-lowercase {
    text-transform: lowercase !important;
  }

  .tx-uppercase {
    text-transform: uppercase !important;
  }

  .tx-truncate {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
  }

  .tx-truncate-block {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    display: block;
  }

  .tx-100 {
    font-weight: 100 !important;
  }

  .tx-200 {
    font-weight: 200 !important;
  }

  .tx-300 {
    font-weight: 300 !important;
  }

  .tx-400 {
    font-weight: 400 !important;
  }

  .tx-500 {
    font-weight: 500 !important;
  }

  .tx-600 {
    font-weight: 600 !important;
  }

  .tx-700 {
    font-weight: 700 !important;
  }

  .tx-800 {
    font-weight: 800 !important;
  }

  .tx-900 {
    font-weight: 900 !important;
  }

  .tx-lighter {
    font-weight: lighter !important;
  }

  .tx-normal {
    font-weight: normal !important;
  }

  .tx-bold {
    font-weight: bold !important;
  }

  .tx-bolder {
    font-weight: bolder !important;
  }

  .tx-ws-nowrap {
    white-space: nowrap !important;
  }

  .tx-ws-pre {
    white-space: pre !important;
  }

  .tx-ws-pre-line {
    white-space: pre-line !important;
  }

  .tx-ws-normal {
    white-space: normal !important;
  }

  .tx-wrap-break {
    word-wrap: break-word !important;
  }

  .tx-wrap-normal {
    word-wrap: normal !important;
  }

  [class*='u-width-'] {
    max-width: 100%;
  }

  .u-width-0 {
    width: 0% !important;
  }

  .u-width-1 {
    width: 8.33333% !important;
  }

  .u-width-2 {
    width: 16.66667% !important;
  }

  .u-width-3 {
    width: 25% !important;
  }

  .u-width-4 {
    width: 33.33333% !important;
  }

  .u-width-5 {
    width: 41.66667% !important;
  }

  .u-width-6 {
    width: 50% !important;
  }

  .u-width-7 {
    width: 58.33333% !important;
  }

  .u-width-8 {
    width: 66.66667% !important;
  }

  .u-width-9 {
    width: 75% !important;
  }

  .u-width-10 {
    width: 83.33333% !important;
  }

  .u-width-11 {
    width: 91.66667% !important;
  }

  .u-width-12 {
    width: 100% !important;
  }

  @media (min-width: 544px) {
    .u-width-0--sm {
      width: 0% !important;
    }
    .u-width-1--sm {
      width: 8.33333% !important;
    }
    .u-width-2--sm {
      width: 16.66667% !important;
    }
    .u-width-3--sm {
      width: 25% !important;
    }
    .u-width-4--sm {
      width: 33.33333% !important;
    }
    .u-width-5--sm {
      width: 41.66667% !important;
    }
    .u-width-6--sm {
      width: 50% !important;
    }
    .u-width-7--sm {
      width: 58.33333% !important;
    }
    .u-width-8--sm {
      width: 66.66667% !important;
    }
    .u-width-9--sm {
      width: 75% !important;
    }
    .u-width-10--sm {
      width: 83.33333% !important;
    }
    .u-width-11--sm {
      width: 91.66667% !important;
    }
    .u-width-12--sm {
      width: 100% !important;
    }
  }

  @media (min-width: 768px) {
    .u-width-0--md {
      width: 0% !important;
    }
    .u-width-1--md {
      width: 8.33333% !important;
    }
    .u-width-2--md {
      width: 16.66667% !important;
    }
    .u-width-3--md {
      width: 25% !important;
    }
    .u-width-4--md {
      width: 33.33333% !important;
    }
    .u-width-5--md {
      width: 41.66667% !important;
    }
    .u-width-6--md {
      width: 50% !important;
    }
    .u-width-7--md {
      width: 58.33333% !important;
    }
    .u-width-8--md {
      width: 66.66667% !important;
    }
    .u-width-9--md {
      width: 75% !important;
    }
    .u-width-10--md {
      width: 83.33333% !important;
    }
    .u-width-11--md {
      width: 91.66667% !important;
    }
    .u-width-12--md {
      width: 100% !important;
    }
  }

  @media (min-width: 992px) {
    .u-width-0--lg {
      width: 0% !important;
    }
    .u-width-1--lg {
      width: 8.33333% !important;
    }
    .u-width-2--lg {
      width: 16.66667% !important;
    }
    .u-width-3--lg {
      width: 25% !important;
    }
    .u-width-4--lg {
      width: 33.33333% !important;
    }
    .u-width-5--lg {
      width: 41.66667% !important;
    }
    .u-width-6--lg {
      width: 50% !important;
    }
    .u-width-7--lg {
      width: 58.33333% !important;
    }
    .u-width-8--lg {
      width: 66.66667% !important;
    }
    .u-width-9--lg {
      width: 75% !important;
    }
    .u-width-10--lg {
      width: 83.33333% !important;
    }
    .u-width-11--lg {
      width: 91.66667% !important;
    }
    .u-width-12--lg {
      width: 100% !important;
    }
  }

  .u-zi-inherit {
    z-index: inherit !important;
  }

  .u-zi-initial {
    z-index: initial !important;
  }

  .u-zi-unset {
    z-index: unset !important;
  }

  .u-zi-hidden {
    z-index: -1 !important;
  }

  .u-zi-0 {
    z-index: 0 !important;
  }

  .u-zi-1 {
    z-index: 1 !important;
  }

  .u-zi-2 {
    z-index: 2 !important;
  }

  .u-zi-3 {
    z-index: 3 !important;
  }

  .u-zi-5 {
    z-index: 5 !important;
  }

  .u-zi-10 {
    z-index: 10 !important;
  }

  .u-zi-100 {
    z-index: 100 !important;
  }

  .u-zi-200 {
    z-index: 200 !important;
  }

  .u-zi-1000 {
    z-index: 1000 !important;
  }

  .u-zi-max {
    z-index: 9999999 !important;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: #fff;
  }

  h1 {
    font-size: 70px;
    letter-spacing: -2px;
    color: #fff;
    margin: 1.5em 0 0;
    font-weight: 600;
    text-align: right;
  }
  @media (min-width: 992px) {
    h1 {
      margin: 0.6em 0 0;
      text-align: left;
      font-size: 212px;
      letter-spacing: -6px;
    }
  }

  h2 {
    font-weight: 500;
    font-size: 24px;
    color: #fff;
    margin: 0.3em 0 4em;
    text-align: right;
  }
  @media (min-width: 992px) {
    h2 {
      color: #fff;
      text-align: left;
      font-size: 39px;
      margin: 0 0 110px;
      letter-spacing: -1px;
      padding-left: 5.5em;
      opacity: 0.7;
    }
  }

  .c-hero {
    overflow: hidden;
  }
  @media (min-width: 992px) {
    .c-hero {
      overflow: visible;
    }
  }
  .c-hero--one {
    background-image: -webkit-linear-gradient(152deg, #61bfd9 16%, #0551b4 67%);
    background-image: -o-linear-gradient(152deg, #61bfd9 16%, #0551b4 67%);
    background-image: linear-gradient(242deg, #61bfd9 16%, #0551b4 67%);
  }
  .c-hero__image {
    width: 496px;
    height: 622px;
    background: #6fb9e0;
    position: absolute;
    bottom: 0;
    left: -30px;
    top: 0;
    z-index: 5;
    box-shadow: 0 48px 64px -24px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    opacity: 0.4;
  }
  @media (min-width: 992px) {
    .c-hero__image {
      opacity: 1;
      top: 60px;
    }
  }
  .c-hero__image img {
    position: absolute;
    left: 0;
    top: 0;
  }
  .c-hero__desc {
    position: relative;
    z-index: 10;
  }
  .c-hero__jeff {
    pointer-events: none;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .c-hero__jeff--two {
    background-image: -webkit-linear-gradient(152deg, #15af88 16%, #6c429a 67%);
    background-image: -o-linear-gradient(152deg, #15af88 16%, #6c429a 67%);
    background-image: linear-gradient(242deg, #15af88 16%, #6c429a 67%);
  }
  .c-hero__jeff--three {
    background-image: -webkit-linear-gradient(152deg, #eea031 18%, #930560 67%);
    background-image: -o-linear-gradient(152deg, #eea031 18%, #930560 67%);
    background-image: linear-gradient(242deg, #eea031 18%, #930560 67%);
  }

  .c-content {
    padding: 0 0 5em;
  }
  @media (min-width: 992px) {
    .c-content {
      padding: 5.5em 0 6.5em;
    }
  }
  .c-content p {
    font-size: 20px;
    color: #394956;
    line-height: 150%;
    margin: 0;
  }
  .c-content p + p {
    margin-top: 2em;
  }
  @media (min-width: 992px) {
    .c-content p {
      font-size: 20px;
      line-height: 150%;
    }
  }

  .c-form {
    position: relative;
    z-index: 20;
    top: -40px;
  }
  .c-form__button {
    background: #0551b4;
    color: white;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: -0.5px;
    border: 0;
    height: 76px;
    padding: 0 2em;
    transition: background 0.3s ease-in-out;
    width: 100%;
  }
  @media (min-width: 992px) {
    .c-form__button {
      width: auto;
    }
  }
  .c-form__button:hover {
    background: #043b82;
  }
  .c-form .c-input__mini {
    width: 55px;
  }
  .c-form__bar {
    box-shadow: 0 23px 50px -13px rgba(0, 0, 0, 0.3);
  }
  .c-form__block {
    background: white;
    padding: 12px 30px;
    color: #2a3b47;
    font-size: 20px;
    letter-spacing: -0.5px;
  }
  @media (min-width: 992px) {
    .c-form__block {
      height: 76px;
    }
  }

  .c-maker {
    position: absolute;
    right: 0;
    top: 0;
    padding: 1.5em;
    z-index: 100;
  }
  .c-maker__text {
    color: #fff;
  }
  .c-maker__text span {
    opacity: 0.7;
  }
  .c-maker__link {
    color: #fff;
    text-decoration: none;
    position: relative;
    z-index: 10;
    text-decoration: line-through;
    opacity: 0.7;
    font-weight: 500;
  }
  .c-maker__link:hover {
    text-decoration: none;
    opacity: 1;
  }
`;